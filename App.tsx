import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import warehouse from './assets/warehouse.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './components/Stock.tsx'

export default function App() {
  return (
    //<SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={ {color: '#33c', fontSize: 42} }>Open up App.tsx to start working on your app!</Text>
        <Image source={warehouse} style={ {width: 320, height: 240} } />
        <Stock />
        <StatusBar style="auto" />
      </View>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  }
});
