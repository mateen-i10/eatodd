// ** Checks if an object is empty (returns boolean)
import httpService, {baseURL} from "./http"
import {toast} from "react-toastify"
import {store} from "../redux/store"
import {calculateTotalItems} from "../redux/cartItems/actions"
import {
  cartName,
  groupOrder, groupOrderCode,
  groupOrderCustomerId,
  groupOrderId,
  groupOrderMemberName,
  isJoinedGroupOrderByLink
} from "./constants"

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
export const loadOptions = async (url, input, pageIndex = 1, pageSize = 12, extra = false) => {
  return httpService._get(`${baseURL}${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${input}&&isHtml=${extra}`)
      .then(response => {
        if (response.status === 200 && response.data.statusCode === 200) {
          console.log('dataaa', response.data.data)
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
    return Math.round(Number(totalPrice))
  }
}
export const cartTotalItems = () => {
  const cart = getCartData()
  if (cart) {
    let totalQuantity = 0
    if (cart.meals && cart.meals.length > 0) totalQuantity = totalQuantity + cart.meals.length
    if (cart.wines && cart.wines.length > 0) totalQuantity = totalQuantity + cart.wines.length
    if (cart.catering && cart.catering.length > 0) totalQuantity = totalQuantity + cart.catering.length
    return Number(totalQuantity)
  }
}
export const clearCart = () => {
  localStorage.removeItem(cartName)
}

// meal items
export const addItemToCart = (item, isToast = true) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  const cart = JSON.parse(items)
  const finalMeals = cart && cart.meals && cart.meals.length > 0 ? [...cart.meals] : []
    finalMeals.push(item)
  localStorage.setItem(cartName, JSON.stringify({ meals: [...finalMeals]}))
  if (isToast) toast.success(`'${item.mealName}' added to cart`)
  store.dispatch(calculateTotalItems())
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
    store.dispatch(calculateTotalItems())
    return true
  }
return false
}

// catering items
export const addCateringItem = (item, isWine = false) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  const cart = JSON.parse(items)
  const finalCatering = cart && cart.catering && cart.catering.length > 0 ? [...cart.catering] : []
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
    finalCatering.push(item)
  }

  localStorage.setItem(cartName, JSON.stringify({ catering: [...finalCatering], wines: [...finalWines] }))
  toast.success(`'${item.name}' added to cart`)
  store.dispatch(calculateTotalItems())
  return true
}
export const removeCateringItemFromCart = (index, isWine = false) => {
  //getting existing cart items
  const items = localStorage.getItem(cartName)
  if (items && items.length > 0) {
    const cart = JSON.parse(items)
    isWine ? cart.wines.splice(index, 1) : cart.catering.splice(index, 1)
    const finalItems = {...cart, catering: [...cart.catering], wines: cart.wines ? [...cart.wines] : []}
    localStorage.setItem(cartName, JSON.stringify(finalItems))
    store.dispatch(calculateTotalItems())
    return true
  }
  return false
}

// group order related functions
export const isGroupOrder = () => {
  return localStorage.getItem(groupOrder) && JSON.parse(localStorage.getItem(groupOrder))
}
export const setGroupOrder = (val, id) => {
  localStorage.setItem(groupOrder, val)
  localStorage.setItem(groupOrderId, id)
}
export const clearGroupOrder = () => {
  localStorage.removeItem(groupOrder)
  localStorage.removeItem(groupOrderCode)
  //localStorage.removeItem(groupOrderId)
}
export const joinByLink = (restaurantId, customerId, groupId) => {
  localStorage.setItem('restaurantId', restaurantId)
  localStorage.setItem(groupOrderCustomerId, customerId)
  localStorage.setItem(groupOrderId, groupId)
  localStorage.setItem(isJoinedGroupOrderByLink, 'true')
  setGroupOrder(true, groupId)
}
export const isJoinedByLink = () => {
  return localStorage.getItem(isJoinedGroupOrderByLink) && JSON.parse(localStorage.getItem(isJoinedGroupOrderByLink))
}
export const clearJoinByLink = () => {
  localStorage.removeItem(groupOrderCustomerId)
  localStorage.removeItem(isJoinedGroupOrderByLink)
  localStorage.removeItem(groupOrderMemberName)
  clearCart()
  clearGroupOrder()
}
export const setMemberName = (name) => {
  localStorage.setItem(groupOrderMemberName, name)
}
export const setGroupOrderCode = (code) => {
  localStorage.setItem(groupOrderCode, code)
}
export const getGroupOrderCode = () => {
  return localStorage.getItem(groupOrderCode)
}
export const getGroupOrderId = () => {
  return localStorage.getItem(groupOrderId)
}
export const isGroupOrderMemberName = () => {
  return localStorage.getItem(groupOrderMemberName) && localStorage.getItem(groupOrderMemberName).length && localStorage.getItem(groupOrderMemberName).length > 0
}
export const setGroupOrderMeals = (data) => {
  if (data && data.meals && data.meals.length > 0) {
    data.meals.map(m => {
      let totalPrice = 0
      const finalItems = m.mealProducts ? m.mealProducts.map(item => {
        const price = item.option.price
        totalPrice =  totalPrice + (price * item.quantity)
        return {
          ...item.product,
          options: [{...item.option, isSelected: true}],
          selectedQuantity: item.quantity,
          calculatedPrice: price * item.quantity,
          price
        }
      }) : []

      const meal = {
        guestName: m?.guestName,
        mealId: m.id,
        mealName: m.name,
        totalPrice,
        categoryName: m.category?.name,
        categoryId: m.categoryId,
        selectedProducts : [...finalItems]
      }
      addItemToCart(meal, false)
    })
  }

}
