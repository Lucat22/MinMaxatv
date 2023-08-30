import React from 'react';
import MinMax from './components/exercicio1/MinMax';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumeroAleatorio from './components/Exercicio2/NumeroAleatorio';
import Botao from './components/exercicio3/Botao';
import Contador from './components/exercicio3/Contador';
import DigiteSeuNome from './components/exercicio3/DigiteSeuNome';

export default function App() {
  return (
    <View style={styles.container}>
      <DigiteSeuNome></DigiteSeuNome>
      <Botao></Botao>
      <Contador></Contador>
      <MinMax min='20' max='50'/>
      <NumeroAleatorio min={1} max={100}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
