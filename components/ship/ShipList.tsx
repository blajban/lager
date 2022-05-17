import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { base } from "../../styles";
import Order from "../../interfaces/orders";
import orderModel from "../../models/orders";
import ItemSeparator from "../utility/ItemSeparator";

export default function ShipList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allOrders, setAllOrders] = useState<Order[]>([]);

    if (reload) {
        reloadOrders();
    }

    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }

    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter(order => order.status_id === 200)
        .map((order, index) => {
            return <View><Button
                title={order.id + " " + order.name}
                key={index}
                color={base.buttonColor}
                onPress={() => {
                    navigation.navigate('Skicka', {
                        order: order
                    });
                }}
            />
            <ItemSeparator />
            </View>
        });

    return (
        <View style={base.content}>
                {listOfOrders}
        </View>
    );
};