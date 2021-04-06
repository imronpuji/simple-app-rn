import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {  Actions  } from 'react-native-router-flux'
 
const slides = [

  {
    key: 2,
    title: 'Fast Delivery',
    text: 'Other cool stuff',
    image: require('./assets/2.png'),
    backgroundColor: '#ffb703',
    size : 300

  },
  {
    key: 3,
    title: 'And Delicious',
    text: 'The Biggest Burger',
    image: require('./assets/3.png'),
    backgroundColor: '#fb8500',
    size : 300

  }
];
 
export default class App extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor:item.backgroundColor,  ...style.slide}}>
        <Text style={style.title} >{item.title}</Text>
        <Image style={{width:item.size, height:item.size}} source={item.image} />
        <Text style={{color:'white'}}>{item.text}</Text>
        
      </View>
    );
  }
  _onDone = () => {

    Actions.login()
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} activeDotStyle={{backgroundColor: 'white'}}/>
    }
  }
}

const style = StyleSheet.create({
    slide : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    
    title : {
        color:'white',
        fontSize:28,
        fontWeight:'bold',
        top:-80
        
    },
    

})