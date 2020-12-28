/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

//Modules imports
import {Label} from 'native-base';

//File imports
import Context from '../../Context/Context';
import Constants from '../../constants/Constants';

class GettingStarted extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redbox}>
          <Image
            resizeMode={'cover'}
            style={{
              alignSelf: 'center',
              height: '100%',
              width: '100%',
            }}
            source={require('../../../assets/Header.png')}
          />
        </View>
        <View>
          <Text style={styles.gettingStartedText}>Get Started</Text>
        </View>

        <Text style={styles.mobileNumberText}>
          Please enter your mobile number
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your mobile number"
          placeholderTextColor="#211C1E"
          keyboardType={'phone-pad'}>
          <Label style={styles.mobileNumberLabel}> +91 | </Label>
        </TextInput>

        <Text style={styles.mobileNumberText}>
          We will send OTP on this number
        </Text>
        <TouchableOpacity style={styles.otpButton}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <View style={styles.borders} />
          <View>
            <Text style={styles.orText}>Or</Text>
          </View>
          <View style={styles.borders} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  gettingStartedText: {
    fontFamily: 'Avalon',
    fontSize: 30,
    fontWeight: '700',
    color: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
  },
  mobileNumberText: {
    fontFamily: 'Avalon',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 15,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    borderRadius: 30,
    marginTop: 20,
  },
  mobileNumberLabel: {
    color: '#211C1E',
    fontFamily: 'Avalon',
    fontWeight: '600',
    fontSize: 12,
  },
  otpButton: {
    backgroundColor: '#E0E0E0',
    width: 300,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#7F7F7F',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Avalon',
    marginTop: 10,
    marginBottom: 10,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  borders: {
    flex: 1,
    height: 1,
    backgroundColor: '#F5F5F5',
  },
  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 15,
    color: '#211C1E',
  },
  redbox: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    marginBottom: 30,
  },
});

GettingStarted.contextType = Context;
export default GettingStarted;
