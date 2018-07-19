import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default class LoginForm extends React.Component {

  onPressLearnMore = () => {
    console.log('hi');
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
        <TextInput
          placeholder='Username'
          placeholderTextColor='rgba(255,255,255,0.7)'
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.smallText}>Forgot password?</Text>
        {/*
        <Text style={styles.textStyle}>OR</Text>
        <SocialIcon
          style={styles.loginFacebook}
          raised={false}
          title='Log in with Facebook'
          button
          type='facebook'
        />
        <SocialIcon
          style={styles.loginGoogle}
          raised={false}
          title='Log in with Google+'
          button
          type='google-plus-official'
        />
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 45,
    width: 320,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 4,
  },
  buttonContainer: {
    backgroundColor: '#11bfae',
    paddingVertical: 15,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  textStyle: {
    padding: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#FFF',
  },
  smallText: {
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    padding: 20,
  },
  loginFacebook: {
    backgroundColor: '#3B5998',
    borderRadius: 0,
  },
  loginGoogle: {
    backgroundColor: '#DB4437',
    borderRadius: 0,
  }
});
