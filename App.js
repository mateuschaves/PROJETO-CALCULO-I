import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
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
  f(x){
      // f(x) = πx² 
      let fx = Math.PI * Math.pow(x,2);
      return fx;
  }
  // Derivando fx.
  derive(x, h){
    // Gerando um número aleatório entre 0 e 26.
    let index = (Math.floor(Math.random()* 25 + 1));
    // Possíveis formas de tratamento.
    let treatment = ["consagrado", "condensado", "condenado", "chamuscado", "concursado", "condecorado", "comissionado", "calejado", "cutucado", "cuckado", "abenssoado", "desgraçado", "lisonjeado", "alejado", "afetado", "afeminado", "sensualizado", "fuzilado", "adequado", "algemado", "amargurado", "retardado", "reciclado", "coroado", "abestado", "ensaboado"];
    // Validando o valor de x.
    if( !isNaN(x) && isFinite(x)){
      let fxh = this.f(parseFloat(x) + h);
      let fx  = this.f(parseFloat(x));
      // f'(x) = 2πx 
      let slope  = (fxh - fx) / h;
      this.setState({
          circumference: slope.toFixed(2),
      });
      // Mostrando o log no console.
      this.show_log(fxh, fx, slope, x, h);
    }else{
      Alert.alert('Não cara, digite um número', 'Como eu vou derivar no ponto '+ x + '? Facilite as coisas meu '+treatment[index]+'.-.');
    }
  }
  //Show log.
  show_log(fxh, fx, slope, x, h){
    console.log(" ");
    console.log("Valor de fx : " + fx);
    console.log("Valor de f(x + h): " + fxh);
    console.log("Valor da f'(" + x + "): ", + slope);
    console.log("Valor de h: ", h);
    console.log(" ");
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
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
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
