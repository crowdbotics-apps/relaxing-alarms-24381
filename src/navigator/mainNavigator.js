import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings202883Navigator from '../features/Settings202883/navigator';
import UserProfile20202419Navigator from '../features/UserProfile20202419/navigator';
import BlankScreen19202418Navigator from '../features/BlankScreen19202418/navigator';
import ArticleList202401Navigator from '../features/ArticleList202401/navigator';
import ArticleList202400Navigator from '../features/ArticleList202400/navigator';
import ArticleList202399Navigator from '../features/ArticleList202399/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings202883: { screen: Settings202883Navigator },
UserProfile20202419: { screen: UserProfile20202419Navigator },
BlankScreen19202418: { screen: BlankScreen19202418Navigator },
ArticleList202401: { screen: ArticleList202401Navigator },
ArticleList202400: { screen: ArticleList202400Navigator },
ArticleList202399: { screen: ArticleList202399Navigator },

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
