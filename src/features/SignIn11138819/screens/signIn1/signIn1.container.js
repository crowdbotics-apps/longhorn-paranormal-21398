import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignIn1} from './signIn1.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

class _SignIn1Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  navigationKey = 'SignIn1Container';

  onSignInPress = data => {
    // this.props.navigation.goBack();

  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      routeName: 'Sign Up 1',
      key: this.navigationKey,
    });
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  onEwaPress = () => {};

  render() {
    return (
      <SignIn1
        onSignInPress={this.props.login}
        onSignUpPress={this.onSignUpPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onEwaPress={this.onEwaPress}
        errorMsg={this.props.signInErrors}
      />
    );
  }
}

const mapStateToProps = state => ({
  signInErrors: state.SignIn01Blueprint.errors.SignIn,
});

const mapDispatchToProps = {
  login: emailAuthActions.login
}

export const SignIn1Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignIn1Container);