import Home from '../Home/Home'
import {connect} from 'react-redux'
import * as actions from './action'
import {  getNav, getLogin  } from '../../reducers/RootReducer'

// get every state
const mapStateToProps = (state) => ({
    ...getNav(state),
    ...getLogin(state)
})

//connect component home with the state
const home = connect(mapStateToProps, actions)(Home)

export default  home
