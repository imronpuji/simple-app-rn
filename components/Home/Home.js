import React, {Component} from 'react'
import { View, Text, Alert, ScrollView, Modal, Picker } from 'react-native'
import { Card, Header, Button, Icon } from 'react-native-elements'

export default class Home extends Component {

    state = {
        modalVisible : false
    }
    componentDidMount() {
        this.props.navigation.setParams({
             title: `Halo ${this.props.username.substring(0,2)}`
        });
     }
    
    render() {  
    
        const users = [1,2,3,4,5,6,7,8,9]
        return (
        <View>
          <Modal
          style={{borderWidth:2, height:100}}
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onPress={() => Alert.alert('Modal has been closed.')}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 50, position:'absolute', right:16, width:100, height:100, backgroundColor:'white'}}>
            <View>
              <Text>Hello World!</Text>

            </View>
          </View>
        </Modal>
        <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'FOOD & DRINK', style: { color: '#fff' } }}
  rightComponent={ <Picker
    mode={'dropdown'}
    selectedValue={'Java'}
    style={{ height: 20, width: 50, }}
  >
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>}
/>
             <ScrollView>
              {
                users.map((u, i) => {
                  return (
                    <View key={i} style={{marginTop:2}}>
                    <Card>
                       <Card.Title>BIG BURGER</Card.Title>
                          <Card.Divider/>
                          <Card.Image source={require('./logo.png')}>
                            <Text style={{marginBottom: 10}}>
                              The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                            <Button
                              icon={<Icon name='code' color='#ffffff' />}
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                              title='VIEW NOW' />
                          </Card.Image>
                          </Card>
                    </View>
                  );
                })
              }
            </ScrollView>
            </View>
            
        )
    }
  }