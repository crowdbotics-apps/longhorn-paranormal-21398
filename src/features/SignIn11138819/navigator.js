import {createStackNavigator} from 'react-navigation-stack';

import {SignIn1Container} from './screens/signIn1/signIn1.container';

import Home from './screens/';

export default SignIn01BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignIn1: {screen: SignIn1Container},
  },
  {
    initialRouteName: 'Home',
  },
);
