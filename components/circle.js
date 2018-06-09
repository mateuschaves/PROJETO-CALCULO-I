import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Circle extends React.Component {
    // Título da tela.
    static navigationOptions = {
        title: 'Derivadas no círculo',
      };
    // Estado do componente.
    state = {
      circumference: 0,
      radius: 0,
    }
  /*
        SOCORRO DEUUUSS !!!!
        ME LEVA DEUS	!!!!
        CRÊ EM DEUS PAI TODO PODEROSO CRIADOR DO CÉU E DA TERRA !!!!
        FUNCIONA PLS	!!!!
        OH VONTADE DE TOMAR UM TIRO !!!!
  */
  // Equação que vai ser derivada.
  f(r){
      // f(r) = πr² 
      let fr = Math.PI * Math.pow(r,2);
      return fr;
  }
  // Derivando f(r).
  derive(r, h){
    // Validando o valor de r.
    if( !isNaN(r) && isFinite(r)){
       // Equivale ao f( x + h)
      let frh = this.f(parseFloat(r) + h);
      // Equivale ao f(x)
      let fr  = this.f(parseFloat(r)); 
      /*    Calculando a derivada pela definição de limite.
       *    f'(r) = 2πr 
       */
      let slope  = (frh - fr) / h;
      this.setState({
          circumference: slope.toFixed(2),
      });
      // Mostrando o log no console.
      this.show_log(frh, fr, slope, r, h);
    }else{
      let treatment = this.choose_treatment();
      console.log(" ")
      console.log("Não foi possível derivar no ponto x = " + r);
      console.log("O valor informado não é válido !");
      console.log(" ");
      Alert.alert('Não cara, digite um número', 'Como eu vou derivar no ponto '+ r + '? Facilite as coisas meu '+treatment+'.-.');
    }
  }
  //Show log.
  show_log(frh, fr, slope, r, h){
    console.log(" ");
    console.log("Derivando no ponto: x = "+ r);
    console.log("Valor de fx : " + fr);
    console.log("Valor de f(x + h): " + frh);
    console.log("Valor de f'(" + r + "): ", + slope);
    console.log("Valor de h: ", h);
    console.log(" ");
  }
  // Escolhe uma forma de tratamento.
  choose_treatment(){
    // Gerando um número aleatório entre 0 e 26.
    let index = (Math.floor(Math.random()* 25 + 1));
    // Possíveis formas de tratamento.
    let treatment = [
      "consagrado",
      "condensado",
      "condenado",
      "chamuscado",
      "concursado",
      "condecorado",
      "comissionado",
      "calejado", 
      "cutucado", 
      "cuckado", 
      "abenssoado", 
      "desgraçado", 
      "lisonjeado", 
      "alejado", 
      "afetado", 
      "afeminado", 
      "sensualizado", 
      "fuzilado", 
      "adequado", 
      "algemado", 
      "amargurado", 
      "retardado", 
      "reciclado", 
      "coroado", 
      "abestado", 
      "ensaboado"
    ];
    return treatment[index];
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Projeto de aplicação de derivadas aplicado em programação.
        </Text>
        <TextInput
            autoFocus
            autoCapitalize="none"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.boxInput}
            placeholder="Informe o raio da circunferência ! "
            onChangeText={(radius) => this.setState({radius})}
        />
        <Button
          title={"Calcular a circunferência de r = "+ this.state.radius}
          // Chamando a função de derivada com o valor de h muito próximo a 0.
          onPress={() =>  this.derive(this.state.radius, 0.000000001)}
        />
        <Text style={styles.textResult}>
        	Raio : {this.state.radius}
        </Text>
        <Text style={styles.textResult}>
        	Circunferência : {this.state.circumference}
        </Text>
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
  },
  boxInput: {
    alignSelf: 'stretch',
    marginBottom: 25,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
  },
  textResult: {
    textAlign: 'center',
    margin: 5,
  },
  description: {
    textAlign: 'center',
  }
});
