/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';

import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import ScreenN1 from "./src/screens/ScreenN1";
import ScreenN2 from './src/screens/ScreenN2';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Change Screens!</Text>
          <Button
            onPress={() => this.props.navigation.navigate('ScreenN1')}
            title="Start"
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  App: App,
  ScreenN1: ScreenN1,
  ScreenN2: ScreenN2
});

export default createAppContainer(AppNavigator);

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
