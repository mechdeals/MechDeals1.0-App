/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Input,
  Form,
  Item,
  Label,
  Button,
  CheckBox,
  Icon,
} from 'native-base';
import Constants from '../../constants/Constants';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      inputFocus: false,
      isEmailValid: true,
      emailErrorMessage: 'Required',
      isPasswordValid: true,
      passwordErrorMessage: 'Required',
      passwordSecurity: true,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({inputFocus: true});
  };

  _keyboardDidHide = () => {
    this.setState({inputFocus: false});
  };

  handleEmail = (Text) => {
    this.setState({
      email: Text,
    });
  };
  handlePassword = (Text) => {
    this.setState({
      password: Text,
    });
  };

  handleLogin = () => {
    console.log('hanlde Login');
  };

  handleForgotPassword = () => {
    console.log('Forgot Password Route');
  };

  handleSignUp = () => {
    console.log('SignUp Route');
  };

  render() {
    return (
      <>
        <Container>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../Assets/MechDealsLogo.png')}
                style={
                  !this.state.inputFocus
                    ? styles.image
                    : {height: 70, width: 70}
                }
              />
            </View>
            <Text style={styles.signIn}>Sign in</Text>

            <Form style={styles.form}>
              <Item floatingLabel>
                <Label style={styles.labels}>Email/Contact</Label>
                <Input
                  style={styles.input}
                  onChangeText={(Text) => {
                    this.handleEmail(Text);
                  }}
                />
              </Item>
              {!this.state.isEmailValid ? (
                <Text style={styles.errorLabels}>
                  {this.state.emailErrorMessage}
                </Text>
              ) : null}

              <Item floatingLabel>
                <Label style={styles.labels}>Password</Label>
                <Input
                  style={styles.input}
                  secureTextEntry={this.state.passwordSecurity}
                  onChangeText={(Text) => {
                    this.handlePassword(Text);
                  }}
                  onSubmitEditing={Keyboard.dismiss}
                />
              </Item>
              {!this.state.isPasswordValid ? (
                <Text style={styles.errorLabels}>
                  {this.state.passwordErrorMessage}
                </Text>
              ) : null}

              <TouchableOpacity
                style={{justifyContent: 'flex-end'}}
                onPress={this.handleForgotPassword}>
                <Text style={styles.forgotText}>Forgot?</Text>
              </TouchableOpacity>

              <Item>
                <Button block style={styles.button} onPress={this.handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </Button>
              </Item>
              <Item style={{borderBottomColor: 'white'}}>
                <View style={styles.bottomView}>
                  <View style={styles.borders} />
                  <View>
                    <Text style={styles.orText}>Or</Text>
                  </View>
                  <View style={styles.borders} />
                </View>
              </Item>
              <Item
                style={{borderBottomColor: 'white', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={{marginTop: 15}}
                  onPress={this.handleSignUp}>
                  <Text style={{textAlign: 'center', fontSize: 17}}>
                    Don't have an account?{' '}
                    <Text
                      style={{
                        fontSize: 17,
                        color: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
                      }}>
                      Sign up!
                    </Text>
                  </Text>
                </TouchableOpacity>
              </Item>
            </Form>
          </View>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  borders: {
    flex: 1,
    height: 1,
    backgroundColor: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
  },
  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 15,
    color: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
  },
  forgotText: {
    color: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
    marginTop: 12,
    marginBottom: 5,
    textAlign: 'right',
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  labels: {
    marginBottom: 0,
    color: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
  },
  image: {
    width: 150,
    height: 150,
  },
  signIn: {
    color: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 0,
  },
  form: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  input: {
    marginTop: 5,
  },
  errorLabels: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
  },
  button: {
    width: '100%',
    backgroundColor: Constants.APP_THEME_COLOR_CODES.BASE_COLOR,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
