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
      headerTitle: 'Tes'
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
    home,
    info,
    home1
  },
  {
    initialRouteName: 'home'
  }
)

export default createAppContainer(BotMenu);