import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './App/navigation/StackNavigator';
import { BasketContext } from './Context';


export default function App() {
  return (
      <BasketContext>
      <StatusBar backgroundColor='white' />
      <StackNavigator/>
      </BasketContext>
  
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
