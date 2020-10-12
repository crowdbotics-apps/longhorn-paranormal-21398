import React from 'react';
import {ImageBackground, ImageProps, View} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
} from 'react-native-ui-kitten';
import {Button, Text} from 'react-native-ui-kitten';
import {SignInForm1, SocialAuth} from '../../components/auth';
import {ScrollableAvoidKeyboard, textStyle} from '../../components/common';
import {EmailValidator, PasswordValidator} from '../../core/validators';

const imageSignIn1Bg = require('../../assets/images/image-background-sign-in-1.jpg');

class SignIn1Component extends React.Component {
  state = {
    email: undefined,
    password: '',
  };

  onEmailInputTextChange = email => {
    this.setState({email});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  backgroundImage = imageSignIn1Bg;

  onSignInButtonPress = () => {
    this.props.onSignInPress({
      email: this.state.email,
      password: this.state.password,
    });
  };

  onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  onEwaButtonPress = () => {
    this.props.onEwaPress();
  };

  onFormDataChange = formData => {
    this.setState({formData});
  };

  renderEwaButtonIcon = style => {
    const {themedStyle} = this.props;

    return <Icon {...themedStyle.ewaButtonIcon} name="heart" />;
  };

  renderSignUpButtonIcon = style => {
    const {themedStyle} = this.props;

    return (
      <Icon {...themedStyle.signUpButtonIcon} name="arrow-forward-outline" />
    );
  };

  validator() {
    return (
      this.state.email &&
      EmailValidator(this.state.email) &&
      this.state.password != ''
    );
  }

  render() {
    const {themedStyle} = this.props;

    return (
      <ScrollableAvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={this.backgroundImage}>
          <Button
            appearance="ghost"
            style={themedStyle.ewaButton}
            textStyle={themedStyle.ewaButtonText}
            size="large"
            activeOpacity={0.75}
            icon={this.renderEwaButtonIcon}
            onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signInContainer}>
            <Text style={themedStyle.signInLabel} category="h4">
              SIGN IN
            </Text>
            <Button
              style={themedStyle.signUpButton}
              textStyle={themedStyle.signUpButtonText}
              activeOpacity={0.75}
              appearance="ghost"
              size="giant"
              icon={this.renderSignUpButtonIcon}
              onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
          {this.props.errorMsg && (
            <View>
              <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
            </View>
          )}
          <SignInForm1
            style={themedStyle.formContainer}
            onEmailInputTextChange={this.onEmailInputTextChange}
            onPasswordInputTextChange={this.onPasswordInputTextChange}
            email={this.state.email}
            password={this.state.password}
          />
          <Button
            size="large"
            textStyle={textStyle.button}
            style={!this.validator() ? themedStyle.disabledButton : themedStyle.button}
            status="info"
            disabled={!this.validator()}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            iconStyle={themedStyle.socialAuthIcon}
            hintStyle={themedStyle.socialAuthHint}
            hint="Sign with a social account"
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
        </ImageBackground>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn1 = withStyles(SignIn1Component, theme => ({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  socialAuthContainer: {
    marginTop: 48,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  ewaButtonText: {
    color: 'white',
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  signInLabel: {
    flex: 1,
    ...textStyle.headline,
    color: 'white',
  },
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  signUpButtonText: {
    color: 'white',
  },
  signUpButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  socialAuthIcon: {
    tintColor: 'white',
  },
  socialAuthHint: {
    color: 'white',
  },
  button: {backgroundColor: 'white', borderColor: 'white'},
  disabledButton: {backgroundColor: 'grey', borderColor: 'grey'},

}));
