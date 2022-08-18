// ** Redux Imports
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import apiMiddleware from "./api/middleware"
import {routerMiddleware} from "react-router-redux"
import {createBrowserHistory} from "history"

export const history = createBrowserHistory()

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiMiddleware, routerMiddleware(history))
  }
})

export { store }
