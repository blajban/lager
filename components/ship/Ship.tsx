import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { base, typography } from '../../styles/index';

import ShipList from './ShipList';
import ShipOrder from './ShipOrder';

const Stack = createNativeStackNavigator();

export default function Ship() {

    return (
        <Stack.Navigator initialRouteName="List" screenOptions={({ route }) => ({
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="List" component={ShipList} />
            <Stack.Screen name="Order" component={ShipOrder} />
        </Stack.Navigator>
    );
};
