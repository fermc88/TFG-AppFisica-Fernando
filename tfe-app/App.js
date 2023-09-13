import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './navigation/drawer';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyDrawer />
      <StatusBar style='light' />
    </NavigationContainer>
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
