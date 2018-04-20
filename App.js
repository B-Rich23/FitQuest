import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DrawerNavigator, SwitchNavigator } from 'react-navigation';
import reducers from './reducers'
import MyHeader from './components/MyHeader';
import { NavButtons, DrawerStack} from './components/Navigation';
import { Spinner } from './components/common';
import GoogleLogin from './components/Login/GoogleLogin';
import Home from './components/Home/Home';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
      loggedIn: false,
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded){
        return (
          <AppSwitchNavigator />
        );
    }
  }
}

// Defines the stack navigator that renders the login and home pages
const AppSwitchNavigator = SwitchNavigator({
  Login: {
    screen: GoogleLogin
  },
  Home: {
    screen: Home
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
