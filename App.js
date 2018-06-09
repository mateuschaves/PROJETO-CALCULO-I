import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import  Circle  from './components/circle';

export default createStackNavigator({
  CircleScreen: {
    screen: Circle,
  },
});
