import React from 'react';
import {createAppContainer,createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from './source/container/pages/Home';
import Info from './source/container/pages/Info';
const Router = createStackNavigator(
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

const Router2 = createStackNavigator(
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
    Router,
    Router2
  },
  {
    initialRouteName: 'Router'
  }
)

export default createAppContainer(BotMenu);