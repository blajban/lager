// Expo/React
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Components
import Pick from './components/Pick'
import Home from './components/Home'
import Deliveries from './components/Deliveries';
import Auth from "./components/auth/Auth";
import Invoices from './components/invoices/Invoices';
import Ship from './components/ship/Ship';

// Style
import { base, typography } from "./styles/index";

// Models
import authModel from "./models/auth";




const Tab = createBottomTabNavigator();

const routeIcons = {
    "Lager": "home",
    "Plock": "list",
    "Inleveranser": "file-tray",
    "Faktura": "logo-bitcoin",
    "Logga in": "lock-closed",
    "Ordrar": "map"
};


export default function App() {
    // used to lift state up
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    useEffect(async () => {
        setIsLoggedIn(await authModel.loggedIn());
    }, []);

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
                        contentStyle: base.content,
                        headerStyle: base.header,
                        headerTitleStyle: typography.h1
                    })}
                    >
                    <Tab.Screen name="Lager">
                        {() => <Home products={products} setProducts={setProducts} />}
                    </Tab.Screen>
                    <Tab.Screen name="Plock">
                            {() => <Pick setProducts={setProducts} />}
                    </Tab.Screen>
                    <Tab.Screen name="Inleveranser">
                            {() => <Deliveries setProducts={setProducts} />}
                    </Tab.Screen>
                    <Tab.Screen name="Ordrar" component={Ship} />
                    {isLoggedIn ?
                        <Tab.Screen name="Faktura">
                                {() => <Invoices setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen> :
                        <Tab.Screen name="Logga in">
                                {() => <Auth setIsLoggedIn={setIsLoggedIn} />}
                        </Tab.Screen>
                    }
                </Tab.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
