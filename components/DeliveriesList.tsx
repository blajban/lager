import { View, Button, FlatList, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { base, list, typography } from "../styles/index";
import deliveryModel from "../models/deliveries";

const myItemSeparator = () => {
    return (
      <View
       style={list.itemSeparator}
      />
    );
};


const ListDeliveries = ({deliveries}) => {
    const isEmpty = Object.keys(deliveries).length === 0;
    if (isEmpty) {
        return (
            <Text>Inga tidigare inleveranser</Text>
        )
    }
    return (
        <FlatList
            data={deliveries}
            renderItem={({item}) => (
                <Text style={list.bigItem}>ID: {item.id}, Produkt-ID: {item.product_id}, Namn: {item.product_name}, Antal: {item.amount}, Datum: {item.delivery_date}, Kommentar: {item.comment}</Text>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={myItemSeparator}
        />
    );
}

export default function DeliveriesList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allDeliveries, setAllDeliveries] = useState([]);

    if (reload) {
        reloadDelivieries();
    }

    async function reloadDelivieries() {
        setAllDeliveries(await deliveryModel.getDeliveries());
    }

    useEffect(() => {
        reloadDelivieries();
    }, []);


    return (
        <View style={base.content}>
            <Button
                title="Skapa ny inleverans"
                color={base.buttonColor}
                onPress={() => {
                    navigation.navigate('Ny inleverans');
                }}
            />
            <Text style={typography.h3}>Tidigare inleveranser</Text>
            <ListDeliveries deliveries={allDeliveries} />
            
        </View>
    );
};
