// Expo/React
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Components
import Pick from './components/Pick.tsx'
import Home from './components/Home.tsx'

// Style
import styles from "./styles/index.ts";

// Assets
import warehouse from './assets/warehouse.jpg';


/* export default function App() {
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
} */

const Tab = createBottomTabNavigator();

const routeIcons = {
    "Lager": "home",
    "Plock": "list",
  };

export default function App() {
    const [products, setProducts] = useState([]);

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
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = routeIcons[route.name] || "alert";

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
                >
                    <Tab.Screen name="Lager">
                    {() => <Home products={products} setProducts={setProducts} />}
                </Tab.Screen>
                    <Tab.Screen name="Plock" component={Pick} />
                </Tab.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
