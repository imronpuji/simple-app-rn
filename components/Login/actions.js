import * as actionTypes from '../../actionTypes'
import {getLogin} from '../../reducers/RootReducer'
import {Actions} from 'react-native-router-flux'

let data = {username : '', password : ''}

export const login = (state) => {
    Actions.home({username : state.username})
    return {type : actionTypes.ON_LOGGIN, state}
}

export const loginWithDelay = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const {onLogging} = getLogin(getState())
                if(data.username.length > 1 && data.password.length > 1 ){
                    dispatch(login(data))
                    data = {username : '', password : ''}
                } else {
                    return false
                }
        }, 1000)
    }
}

export const user = (state) => { 
    return {type : actionTypes.ON_INPUT, state}
}

export const inputForm = (state) => {
    
    if(state.username){
        data['username'] = state.username
    } else {
        data['password'] = state.password
    }
     
    return (dispatch, getState) => {
        dispatch(user(data))
    }
}   
