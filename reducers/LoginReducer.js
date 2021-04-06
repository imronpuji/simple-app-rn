import * as actionTypes from '../actionTypes'


//reducer

const DEFAULT_STATE = { onLogging : false, username : '', password : '' }

export default function (state = DEFAULT_STATE, action) {
    switch(action.type){
    
        case actionTypes.ON_LOGGIN : 
            return {...state, onLogging : true, data : action.state}
            
        case actionTypes.ON_LOGOUT : 
            return {...state, onLogging : false}
            
        case actionTypes.ON_INPUT : 
            return { onLogging : false, data : action.state}
            
        default : 
            return state
    }
}

export const getLogin = (state) => ({
    onLogging : state.onLogging,
    dataUser : state.data
})