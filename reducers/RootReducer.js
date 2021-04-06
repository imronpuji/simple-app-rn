import {  combineReducers  } from 'redux'
import nav, * as fromNav from './NavReducer'
import login, * as fromLogin from './LoginReducer'

export default combineReducers ({
    nav,
    login
})

export const getNav = (state) =>  fromNav.getNav(state.nav)

export const getLogin = (state) => fromLogin.getLogin(state.login)