import { useState } from 'react';
import { ScrollView, Text, TextInput, Button } from "react-native";
import { base, typography, form } from '../styles';

import Delivery from '../interfaces/delivery';

export default function DeliveryForm({ navigation }) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});

    function addDelivery() {
        // TODO
        console.log(delivery)
    }

    return (
        <ScrollView style={base.content}>
            <Text style={typography.label}>Kommentar</Text>
            <TextInput
                style={form.input}
                onChangeText={(content: string) => {
                    
                    setDelivery({ ...delivery, comment: content })
                }}
                value={delivery?.comment}
            />

        <Text style={typography.label}>Antal</Text>
        <TextInput
            style={form.input}
            onChangeText={(content: string) => {
                setDelivery({ ...delivery, amount: parseInt(content) })
            }}
            value={delivery?.amount?.toString()}
            keyboardType="numeric"
        />

            <Button
                title="Gör inleverans"
                onPress={() => {
                    addDelivery();
                }}
            />
        </ScrollView>
    );
};