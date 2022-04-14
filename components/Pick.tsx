import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderList from './OrderList';
import PickList from './PickList';

const Stack = createNativeStackNavigator();

export default function Pick(props) {
    return (
        <Stack.Navigator initialRouteName="Ordrar">
            <Stack.Screen name="Ordrar" component={OrderList} />
            <Stack.Screen name="Plocklista">
                {(screenProps) => <PickList {...screenProps} setProducts={props.setProducts} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
