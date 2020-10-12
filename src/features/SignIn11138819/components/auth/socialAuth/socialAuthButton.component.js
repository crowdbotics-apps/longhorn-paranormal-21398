import React from 'react';
import {ImageProps, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon
} from 'react-native-ui-kitten';
import {Button, ButtonProps} from 'react-native-ui-kitten';

class SocialAuthButtonComponent extends React.Component {
  renderIcon = style => {
    const {icon, iconStyle} = this.props;

    return <Icon {...iconStyle} name={icon} />;
  };

  render() {
    const {themedStyle, ...restProps} = this.props;

    return (
      <Button
        appearance="ghost"
        size="giant"
        {...restProps}
        icon={this.renderIcon}
      />
    );
  }
}

export const SocialButton = withStyles(SocialAuthButtonComponent, theme => ({
  icon: {
    width: 24,
    height: 24,
  },
}));
