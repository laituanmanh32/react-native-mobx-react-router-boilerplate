import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import { inject, observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

@inject("welcomeStore")
@observer
export default class Welcome extends Component {
  render() {
    let {welcomeStore} = this.props;
    let {greeting} = welcomeStore;
    return (
      <View style={styles.container}>
        <Text>{greeting}</Text>
        <Text style={styles.welcome}>Welcome to React Native! he he</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}
