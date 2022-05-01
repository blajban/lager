import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DeliveriesList from './DeliveriesList';
import DeliveryForm from './DeliveryForm';

import { base, typography } from '../styles/index'

const Stack = createNativeStackNavigator();

export default function Deliveries() {
    return (
        <Stack.Navigator initialRouteName="Tidigare inleveranser" screenOptions={({ route }) => ({
            contentStyle: base.content,
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="Tidigare inleveranser" component={DeliveriesList} />
            <Stack.Screen name="Ny inleverans" component={DeliveryForm} />
        </Stack.Navigator>
    );
};

