import React from 'react';
import {
  ImageStyle,
  StyleProp,
  TextProps,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon
} from 'react-native-ui-kitten';
import { Text } from 'react-native-ui-kitten';
import { textStyle } from '../../common';
import { SocialButton } from './socialAuthButton.component';

class SocialAuthComponent extends React.Component{

   renderCaptionElement = (style) => {
    const { hint } = this.props;

    return (
      <Text
        style={style}>
        {hint}
      </Text>
    );
  }

   render(){
    const { themedStyle, hintStyle, iconStyle, hint, ...restProps } = this.props;
    const { buttonContainer, ...componentStyle } = themedStyle;

    return (
      <View {...restProps}>
        {hint ? this.renderCaptionElement([componentStyle.hint, hintStyle]) : <React.Fragment/> }
        <View style={buttonContainer}>
          <SocialButton
            activeOpacity={0.75}
            icon='google'
            iconStyle={iconStyle}
            onPress={this.props.onGooglePress}
          />
          <SocialButton
            activeOpacity={0.75}
            icon='facebook'
            iconStyle={iconStyle}
            onPress={this.props.onFacebookPress}
          />
          <SocialButton
            activeOpacity={0.75}
            icon='twitter'
            iconStyle={iconStyle}
            onPress={this.props.onTwitterPress}
          />
        </View>
      </View>
    );
  }
}

export const SocialAuth = withStyles(SocialAuthComponent, (theme) => ({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  hint: {
    alignSelf: 'center',
    marginBottom: 16,
    ...textStyle.subtitle,
  },
}));

