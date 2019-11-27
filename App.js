import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './source/container/pages/Home'
const router = createStackNavigator(
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

export default createAppContainer(router);