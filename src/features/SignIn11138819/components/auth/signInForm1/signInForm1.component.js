import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Input
} from 'react-native-ui-kitten';
import {textStyle} from '../../common';
import {EmailValidator, PasswordValidator} from '../../../core/validators';

class SignInForm1Component extends React.Component {
  isValid = value => {
    const {validator} = this.props;

    return validator(value);
  };

  getStatus = (valid) => {
      
      return valid ? 'success' : 'danger';
  }


  render() {
    const {
      style,
      themedStyle,
      theme,
      onPasswordInputTextChange,
      onEmailInputTextChange,
      email,
      password,
      ...restProps
    } = this.props;

    return (
      <View {...restProps} style={[themedStyle.container, style]}>
        <Input
          style={themedStyle.emailInput}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          label="EMAIL"
          placeholder="Email"
          autoCapitalize="none"
          status={email && this.getStatus(EmailValidator(email))}
          value={email}
          onChangeText={onEmailInputTextChange}
        />
        <Input
        style={themedStyle.passwordInput}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          secureTextEntry={true}
          placeholder="Password"
          label="PASSWORD"
          //status={password && this.getStatus(PasswordValidator(password))}
          value={password}
          onChangeText={onPasswordInputTextChange}
        />
      </View>
    );
  }
}

export const SignInForm1 = withStyles(SignInForm1Component, theme => ({
  container: {},
  emailInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  passwordInput: {
    marginTop: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
}));
