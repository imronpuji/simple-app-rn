import React from 'react';
import { StyleSheet, Alert} from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './store/configureStore'
import Login from './components/Login'
import Home from './components/Home'
import SliderIntro from './components/sliderApp/slider'


//router with redux
const RouterWithRedux = connect()(Router)

//state management
const store = configureStore()

//state is logged in


export default class App extends React.Component {

  render () {
  
  return (
    <Provider store={store}>
      <RouterWithRedux>
        <Stack key="root"> 
           <Scene key="slider" component={SliderIntro} title="slider" hideNavBar={true}/>
           <Scene key="login" component={Login} title="Login"   hideNavBar={true}/> 
           <Scene key="home" component={Home} hideNavBar={true}/> 
        </Stack>
    </RouterWithRedux> 
    </Provider>
  );
}
}
//style css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});