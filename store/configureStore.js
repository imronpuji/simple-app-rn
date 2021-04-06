import {  createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import promise from 'redux-promise'
import rootReducers from '../reducers/RootReducer'

export default function configureStore( initialState = undefined ){
    const logger = createLogger()
    const enhancer = compose(
        applyMiddleware(thunk, promise, logger)
    )
    return createStore(rootReducers, initialState, enhancer)
}

