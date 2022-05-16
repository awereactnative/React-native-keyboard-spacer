import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TextInput } from 'react-native';
import KeyboardSpacer from "react-native-keyboard-spacer"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}>
            This is KeyboardSpacer in react native
        </Text>
        <Image
        style={styles.image}
        source={
          require ('F:/andy/testing/one/pics/gta.jpg')
        }
      />
        <TextInput style={styles.textInput}
              placeholder={'Enter your text!'}/>

        <KeyboardSpacer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 20,
    textAlign: 'center',
    borderColor: '#F9F9F9'


  },
  textInput: {
    left: 0, 
    right: 0, 
    height: 45,
    alignItems: 'center'
  },
  image: {
    width: 400,
    height: 200,
  },
});
