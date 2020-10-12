import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn11138819Navigator from '../features/SignIn11138819/navigator';
import Dashboard12138818Navigator from '../features/Dashboard12138818/navigator';
import BlankScreen0138817Navigator from '../features/BlankScreen0138817/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn11138819: { screen: SignIn11138819Navigator },
Dashboard12138818: { screen: Dashboard12138818Navigator },
BlankScreen0138817: { screen: BlankScreen0138817Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
