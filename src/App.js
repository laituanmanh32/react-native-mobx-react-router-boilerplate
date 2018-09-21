import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import {Provider} from "mobx-react/native";
import Welcome from "./pages/Welcome";
import stores from "./stores";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...stores}>
      <NativeRouter>
        <Welcome></Welcome>
      </NativeRouter>
    </Provider>);
  }
}
