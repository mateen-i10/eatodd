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
    /* eslint-enable */
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

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === Roles.superAdmin) return '/dashboard'
  if (userRole === Roles.customer) return '/dashboard/customer'
  if (userRole === Roles.branchManager) return '/'
  return '/'
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

export const addMealToCart = (meal) => {
  //getting existing cart items
  const items = localStorage.getItem('cartItems')
  const cart = JSON.parse(items)
  const finalItems = items && items.length > 0 ? [...cart.meals, meal] : [meal]
  localStorage.setItem('cartItems', JSON.stringify({ meals: [...finalItems]}))
}

export const removeMealFromCart = (index) => {
  //getting existing cart items
  const items = localStorage.getItem('cartItems')
  if (items && items.length > 0) {
    const cart = JSON.parse(items)
    cart.meals.splice(index, 1)
    const finalItems = {...cart, meals: [...cart.meals]}
    localStorage.setItem('cartItems', JSON.stringify(finalItems))
    return true
  }
return false
}

export const getCartData = () => {
  const string = localStorage.getItem('cartItems')
  const obj = string && string.length > 0 ? JSON.parse(localStorage.getItem('cartItems')) : null
  return obj && !isObjEmpty(obj) ? obj : null
}

export const loadOptions = async (url, input, pageIndex = 1, pageSize = 12) => {
  return httpService._get(`${baseURL}${url}?pageIndex=${pageIndex}&&pageSize=${pageSize}&&searchQuery=${input}`)
      .then(response => {
        if (response.status === 200 && response.data.statusCode === 200) {
          console.log(response, "resp")
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