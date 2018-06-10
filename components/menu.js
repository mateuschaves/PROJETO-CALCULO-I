import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Menu2 extends React.Component {
    // Título da tela.
    static navigationOptions = {
        title: 'Projeto de cálculo',
      };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={(styles.container)}>
          <Button
            onPress={ () => navigate('CircleScreen')}
            title = "Derivação do círculo"
          />
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