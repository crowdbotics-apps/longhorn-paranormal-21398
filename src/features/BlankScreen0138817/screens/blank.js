import React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { withStyles, Text, Button, CheckBox, Radio, Toggle, Icon, Input, Datepicker } from 'react-native-ui-kitten';
import Slider from '@react-native-community/slider';
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    };
  };

  state = { }

  render = () => <View style={this.props.themedStyle.container}></View>;
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}));
