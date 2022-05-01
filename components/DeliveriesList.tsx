import { View, Text, Button } from 'react-native';

import { base, typography } from "../styles/index";

export default function DeliveriesList({ navigation }) {

    // TODO: Fixa listOfDeliveries (lista alla precis som i orderlist)

    return (
        <View style={base.content}>
            <Button
                title="Skapa ny inleverans"
                onPress={() => {
                    navigation.navigate('Ny inleverans');
                }}
            />
        </View>
    );
};
