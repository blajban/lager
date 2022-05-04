import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { base, typography } from "../../styles/index";
import Login from "./Login";
import Register from "./Register";

const Stack = createNativeStackNavigator();

export default function Auth(props) {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
            contentStyle: base.content,
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="Login">
                {(screenProps) => <Login {...screenProps} setIsLoggedIn={props.setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};