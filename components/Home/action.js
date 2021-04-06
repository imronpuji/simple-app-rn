import * as actionTypes from '../../actionTypes'
import {Actions} from 'react-native-router-flux'

//func for logout
export const logout = () => {
    Actions.login()
    return {type : actionTypes.ON_LOGOUT}
}

//logout proses
export const logOutWithDelay = () => {

console.log('kjkj')
    return (dispatch, getState) => {
        setTimeout(() => {
             dispatch(logout())
        }, 1000)
    }
}