import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DrawerNavigator } from 'react-navigation';
import reducers from './reducers'
import MyHeader from './components/MyHeader';
import { NavButtons, DrawerStack} from './components/Navigation';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){ 
    super(props);
    this.state = {
      visible: false,
      loggedIn: false
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjmm9QC9AaA4wYVtYn9-WsBtW_2QRaCZ4',
      authDomain: 'authentication-d36c6.firebaseapp.com',
      databaseURL: 'https://authentication-d36c6.firebaseio.com',
      projectId: 'authentication-d36c6',
      storageBucket: 'authentication-d36c6.appspot.com',
      messagingSenderId: '75288336879'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: null });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <DrawerStack />
        )
      case false:
        return <LoginForm />;
      default:
        return <LoginForm />;
    }
  }

  render() {
    return (
       <Provider store={createStore(reducers)}>
          <View style={styles.container}>
            { this.renderContent() }
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});