// Expo/React
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Components
import Pick from './components/Pick'
import Home from './components/Home'

// Style
import { base, typography } from "./styles/index";




const Tab = createBottomTabNavigator();

const routeIcons = {
    "Lager": "home",
    "Plock": "list",
  };

export default function App() {
    // used to lift state up
    const [products, setProducts] = useState([]);

    // load fonts, if fonts not loaded return apploading
    let [fontsLoaded] = useFonts({
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    // main view
    return (
        <SafeAreaView style={base.container}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = routeIcons[route.name as keyof object] || "alert";

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                        header: ({ navigation, route, options }) => {
                          
                            return <View style={base.header}><Text style={typography.h1}> {route.name} </Text></View>;
                        }
                    })}
                    >
                    <Tab.Screen name="Lager">
                        {() => <Home products={products} setProducts={setProducts} />}
                    </Tab.Screen>
                    <Tab.Screen name="Plock">
                            {() => <Pick setProducts={setProducts} />}
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
