import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component{

  displayAlert(){
    alert("Hi")
  }

  render(){
    return(
 <Button title="Click me" color={this.props.ButtonColor} onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {

  render() {
    return (
      <View style={{ marginTop: 200 }}>
      <AnyColorButton ButtonColor="red"/>
      <AnyColorButton ButtonColor="green"/>
      <Text>My First React component</Text>
      </View>
    );
  }
}
