import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import  Circle  from './components/circle';
import  Menu  from './components/menu';
  /*
      Olá Duds, tu vai editar esse arquivo.
      Tudo dentro da função return vai ser renderizado e transformado em telas bonitinhas * imagine um coala aqui *.
  */
export default createStackNavigator({
  MenuScreen: {
    screen: Menu,
  },
});
