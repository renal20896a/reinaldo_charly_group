import React from 'react';
import {createAppContainer,createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from './source/container/pages/Home';
import Info from './source/container/pages/Info';
import Home1 from './source/container/pages/Home1';
const home = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
    headerTitle: "Unklab",
    defaultNavigationOptions:{
      headerTitle: 'Unklab News'
    }
  }
)

const home1 = createStackNavigator(
  {
    Home1
  },
  {
    initialRouteName: 'Home1',
    headerTitle: "Unklab",
    defaultNavigationOptions:{
      headerTitle: 'Unklab News'
    }
  }
)

const info = createStackNavigator(
  {
    Info
  },
  {
    initialRouteName: 'Info',
    headerTitle: "Unklab",
    defaultNavigationOptions:{
      headerTitle: 'Unklab News'
    }
  }
)

const BotMenu = createBottomTabNavigator(
  {
    Home: home1,
    News: home,
    Info: info
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(BotMenu);