import React from 'react'
import {
    Image,
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import { Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          spinner: false
        };
      }
      
    handleSpinner = () => {
      this.setState({spinner:true})
      
      setTimeout(() => {
        this.setState({spinner:false})
      }, 1000);
    }
      
    render() {
        return(
            <View style={styles.container}>
            
                {/* <Button onPress={this.props.loginWithDelay} title="attempt Login"/>
                <Text>{this.props.onLogging && <Text>hai world</Text>}</Text> */}
                
                <Image style={{width:200, top:-40}} source={require('./logo.png')} />

                <TextInput
                  onChangeText={(value) => this.props.inputForm({username:value})}
                  placeholder={'Username'}
                  style={styles.input}
                />
                <TextInput
                  onChangeText={(value) => this.props.inputForm({password : value})}
                  placeholder={'Password'}
                  style={styles.input}
                />
                <Button
                    buttonStyle={{width:300, borderRadius:8, backgroundColor:'#bab257'}}
                    onPressIn={
                        this.handleSpinner
                      }
                    onPress={this.props.loginWithDelay}
                  icon={
                    <Icon
                      name=""
                      size={24}
                      color="white"
                    />
                  }
                  title="Beli Sekarang"
                />
                
                <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgba(100, 100, 100, 0.3)',
      marginBottom: 20,
      borderRadius:8,
    },
    
    button : {
        width:300,
        height : 44
    }
  });