import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderList from './OrderList';
import PickList from './PickList';

import { base, typography } from "../styles/index";

const Stack = createNativeStackNavigator();

export default function Pick(props) {
    return (
        <Stack.Navigator initialRouteName="Ordrar redo att plockas" screenOptions={({ route }) => ({
            contentStyle: base.content,
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="Ordrar redo att plockas" component={OrderList} />
            <Stack.Screen name="Plocklista">
                {(screenProps) => <PickList {...screenProps} setProducts={props.setProducts} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
