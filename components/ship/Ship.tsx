import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { base, typography } from '../../styles/index';

import ShipList from './ShipList';
import ShipOrder from './ShipOrder';

const Stack = createNativeStackNavigator();

export default function Ship() {

    return (
        <Stack.Navigator initialRouteName="Redo att skickas" screenOptions={({ route }) => ({
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="Redo att skickas" component={ShipList} />
            <Stack.Screen name="Skicka" component={ShipOrder} />
        </Stack.Navigator>
    );
};
