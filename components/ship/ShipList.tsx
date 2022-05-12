import { View, Text, Button } from "react-native";
import { base } from "../../styles";

export default function ShipList({ navigation }) {

    return (
        <View style={base.content}>
            <Text>Här ska jag plocka ut alla ordrar som är redo att skickas</Text>
            <Button
                title="En knapp"
                key="0"
                onPress={() => {
                    navigation.navigate('Order');
                }}
            />
        </View>
    );
};
