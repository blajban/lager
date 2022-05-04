import { useState, useEffect } from 'react';
import { View, Button } from "react-native";
import orderModel from "../models/orders";
import { base } from '../styles';

export default function OrderList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

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
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button
                title={order.id + " " + order.name}
                key={index}
                color={base.buttonColor}
                onPress={() => {
                    navigation.navigate('Plocklista', {
                        order: order
                    });
                }}
            />
            
        });

    return (
        <View>
            {listOfOrders}
        </View>
    );
}