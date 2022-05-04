import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DeliveriesList from './DeliveriesList';
import DeliveryForm from './DeliveryForm';

import { base, typography } from '../styles/index'

const Stack = createNativeStackNavigator();

export default function Deliveries(props) {
    return (
        <Stack.Navigator initialRouteName="Hantera inleveranser" screenOptions={({ route }) => ({
            contentStyle: base.content,
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="Hantera inleveranser" component={DeliveriesList} />
            {/*<Stack.Screen name="Ny inleverans" component={DeliveryForm} />*/}

            <Stack.Screen name="Ny inleverans">
                {(screenProps) => <DeliveryForm {...screenProps} setProducts={props.setProducts} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

