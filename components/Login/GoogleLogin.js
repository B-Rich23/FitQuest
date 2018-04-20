// Import components
import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Expo from 'expo';
// import { StackNavigator } from 'react-navigation';

// create a component
export default class GoogleLogin extends Component {
  static navigationOptions = {
    header: null
  }

  // Function to use Google OAuth
  async signInWithGoogleAsync() {
    try {
      // Object that uses the client IDs created for each platform
      const result = await Expo.Google.logInAsync({
        behavior: 'web',
        androidClientId: '1037327035065-ajdv9id43hfneomj9vn06m95nbv31399.apps.googleusercontent.com',
        iosClientId: '1007400859501-lo894svtlk3hst4nc2am8imc5u32hs23.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });


      if (result.type === 'success') {
        // If the user logs in successfully, make a server request with their email
        //   var serverRequest = { email: result.user.email };

        //   // Make a POST request to the database to create a new user if the email is not found in the database
        //   fetch('#', {
        //     method: 'POST',
        //     body: JSON.stringify(serverRequest),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   }).then(response => {          
        //     // Store login to global async storage
        //     AsyncStorage.setItem('userEmail', serverRequest.email);

        //     // navigate to the home page
        //     this.props.navigation.navigate('Home');

        //   }).catch(error => console.log(error));
        // } else {
        //   return { cancelled: true };
        // }

        console.log(result);
        // DEVELOPMENT ONLY: NAVIGATE DIRECTLY TO HOME PAGE
        this.props.navigation.navigate('Home');
      }
      return { cancelled: true }
    } catch (e) {
      console.log(e);
      return { error: e }
    }
  } 

  // Render the background image and login button at start
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/splashScreen.png')}
        style={styles.backgroundImage}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.emptyContainer} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.signInWithGoogleAsync.bind(this)}
              style={styles.button}
            >
              <Text style={styles.text}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// Creates the StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  backgroundImage: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10,
    borderRadius: 50, borderWidth: 2, borderColor: 'white'
  },
  buttonContainer: {
    flex: 1
  },
  emptyContainer: {
    flex: 3
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
  }
});