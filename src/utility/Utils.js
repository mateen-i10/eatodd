// ** Checks if an object is empty (returns boolean)
import {Roles} from "./Roles"
import httpService, {baseURL} from "./http"
import {toast} from "react-toastify"

export const isObjEmpty = obj => Object.keys(obj).length === 0

// ** Returns K format from a number
export const kFormatter = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}


// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed' // for input hover border-color
  }
})

// reuse-able function for async select options
export const loadOptions = async (url, input, pageIndex = 1, pageSize = 12) => {
  return httpService._get(`${baseURL}${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${input}`)
      .then(response => {
        if (response.status === 200 && response.data.statusCode === 200) {
          return response.data.data.map(d =>  {
            return {label: `${d.name}`, value: d.id}
          })
        } else {
          //general Error Action
          toast.error(response.data.message)
        }
      }).catch(error => {
        toast.error(error.message)
      })
}

// cart related functions
const cartName = 'cartItems'
export const addItemToCart = (item, isWine = false) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  const cart = JSON.parse(items)
  const finalMeals = cart && cart.meals && cart.meals.length > 0 ? [...cart.meals] : []
  const finalWines = cart && cart.wines && cart.wines.length > 0 ? [...cart.wines] : []
  if (isWine) {
    //updating quantity if wine already exist
    const index = finalWines.findIndex(p => p.id === item.id)
    if (index > -1) {
      item.selectedQuantity = finalWines[index].selectedQuantity + 1
      finalWines.splice(index, 1, item)
    } else {
      item.selectedQuantity = 1
      finalWines.push(item)
    }
  } else {
    finalMeals.push(item)
  }
  localStorage.setItem(cartName, JSON.stringify({ meals: [...finalMeals], wines: [...finalWines]}))
  toast.success(`'${isWine ? item.name : item.mealName}' added to cart`)
  return true
}
export const removeItemFromCart = (index, isWine = false) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  if (items && items.length > 0) {
    const cart = JSON.parse(items)
    isWine ? cart.wines.splice(index, 1) : cart.meals.splice(index, 1)
    const finalItems = {...cart, meals: [...cart.meals], wines: cart.wines ? [...cart.wines] : []}
    localStorage.setItem(cartName, JSON.stringify(finalItems))
    return true
  }
return false
}
export const getCartData = () => {
  const string = localStorage.getItem(cartName)
  const obj = string && string.length > 0 ? JSON.parse(localStorage.getItem(cartName)) : null
  return obj && !isObjEmpty(obj) ? obj : null
}
export const cartTotalPrice = () => {
  const cart = getCartData()
  if (cart) {
    let totalPrice = 0
    if (cart.meals && cart.meals.length > 0) cart.meals.forEach(c => {
      totalPrice = totalPrice + c.totalPrice
    })
    if (cart.wines && cart.wines.length > 0) cart.wines.forEach(c => {
      totalPrice = totalPrice + (c.price * c.selectedQuantity)
    })
    if (cart.catering && cart.catering.length > 0) cart.catering.forEach(c => {
      totalPrice = totalPrice + c.totalPrice
    })
    return Number(totalPrice)
  }
}
export const clearCart = () => {
  localStorage.removeItem(cartName)
}

// catering items
export const addCateringItem = (item) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  const cart = JSON.parse(items)
  const finalCatering = cart && cart.catering && cart.catering.length > 0 ? [...cart.catering] : []
  finalCatering.push(item)
  localStorage.setItem(cartName, JSON.stringify({ catering: [...finalCatering] }))
  toast.success(`'${item.name}' added to cart`)
  return true
}
export const removeCateringItemFromCart = (index) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  if (items && items.length > 0) {
    const cart = JSON.parse(items)
    cart.catering.splice(index, 1)
    const finalItems = {...cart, catering: [...cart.catering]}
    localStorage.setItem(cartName, JSON.stringify(finalItems))
    return true
  }
  return false
}
