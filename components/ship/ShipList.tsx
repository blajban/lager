import { View, Text, Button } from "react-native";
import { base } from "../../styles";

export default function ShipList({ navigation }) {

    return (
        <View style={base.content}>
            <Text>Här ska jag plocka ut alla ordrar som är redo att skickas</Text>
            <Button
                title="En knapp"
                color={base.buttonColor}
                key="0"
                onPress={() => {
                    navigation.navigate('Skicka', {
                        order: {
                            "id": 1,
                            "name": "Erik Sjöberg",
                            "address": "Stortorget",
                            "zip": "12345",
                            "city": "Karlskrona",
                            "country": "Sweden",
                            "status": "Packad",
                            "status_id": 200,
                        }
                    });
                }}
            />
        </View>
    );
};
