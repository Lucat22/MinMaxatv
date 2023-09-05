import { statusbar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BiscoitodaSorte from './components/BiscoitodaSorte'

export default function App() {
  return (
    <View style={styles.container}>
      <BiscoitodaSorte />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});