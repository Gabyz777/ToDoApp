import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Abra o App.js e comece a trabalhar no seu app!</Text>
      <View style={styles.corVerm}></View>
      <View style={styles.corVer}></View>
      <View style={styles.corAzul}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center ',
    alignItems: 'center',
    flexDirection: 'row'
  },
  corVerm: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  corVer: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  corAzul: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});