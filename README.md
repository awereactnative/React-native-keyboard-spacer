# react-native-keyboard-spacer

Plug and play iOS react-native keyboard spacer view.

## Quick Start

Install View: `npm install --save react-native-keyboard-spacer`

## Example Usage

The view will automatically perform a layout animation when the keyboard appears or disappears.

```javascript
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

```
### Properties - Basic

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| topSpacing | 0 | `number` | Add or subtract additional spacing from keyboard height |
| animationConfig | [A default animation](https://github.com/Andr3wHur5t/react-native-keyboard-spacer/blob/expose-layout-animations/KeyboardSpacer.js#L14) | `LayoutAnimationConfig` | [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation.html#content) configuration object |

### Properties - Methods

| Prop  | Params  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onToggle | `toggleState` | `function` | onToggle method is called when when keyboard toggles. Two parameters passed through, keyboardState (boolean, true if keyboard shown) and keyboardSpace (height occupied by keyboard) |
