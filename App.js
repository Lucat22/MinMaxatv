import { statusbar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BiscoitodaSorte from './components/BiscoitodaSorte'
import Profile from './components/Profile';

export default function App() {
  return (

      // {/* <MinMax min={10} max={20} />
      // <NumeroAleatorio min={10} max={1000} />
      // <Text style={[styles.text]}>HELLO WORLD</Text>
      // <Botao />
      // <Contador />
      // <DigiteSeuNome /> 
      // <Pai/>={require('./assets/favicon.png')} 
      // {<ComponenteControlado />}
      // {<DigiteSeuNome />}
      // style={{width: 200, height: 200}} />
      // <BiscoitoDaSorte/>
      // <IntroducaoEstilos/>
      // <ParOuImpar/>*/}
      <Profile
      imgUri='https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg'
      genero='Feminino'
      nome='Felicia J Ochoa'
      email='aiyana1980@gmail.com'
      telefone='630-337-6439'
    />

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// text: {
//   fontSize: 25,
//   color: 'white'
// }
// });