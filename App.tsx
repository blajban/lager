import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import warehouse from './assets/warehouse.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './components/Stock.tsx';
import styles from "./components/styles.tsx";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function App() {
    let [fontsLoaded] = useFonts({
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <Text style={styles.h1}>Infinity Warehouses</Text>
                <Image source={warehouse} style={styles.fullwidthImg} />
                <Stock />
                <Text style={styles.p}>Erik Sjöberg 2022</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
