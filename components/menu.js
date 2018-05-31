import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Menu extends React.Component {

  // Título da tela.
  static navigationOptions = {
    title: 'Menu Topzera',
  };

  render() {
    return (
      /*
            Olá duds, essa é a tela que tu vai editar * Imagine um coala fofinho aqui *.
      */
      <View style={styles.container}>
            <Text>Olá duds, eu sou uma tela, me deixe bonita =).</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
