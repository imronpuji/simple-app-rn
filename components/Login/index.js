import Login from './Login'
import {connect} from 'react-redux'
import * as actions from './actions'
import {  getNav, getLogin  } from '../../reducers/RootReducer'


const mapStateToProps = (state) => ({
    ...getNav(state),
    ...getLogin(state)
})

const login = connect(mapStateToProps, actions)(Login)



export default login
