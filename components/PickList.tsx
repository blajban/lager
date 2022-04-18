import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
import productModel from "../models/products";
import { base, typography, list } from "../styles/index";

export default function PickList({ route, navigation, setProducts }) {
    const { order } = route.params;

    async function pick() {
        await orderModel.pickOrder(order);

        setProducts(await productModel.getProducts());
        navigation.navigate("Ordrar redo att plockas", { reload: true });

        return true;
    }

    const orderItemsList = order.order_items.map((item, index) => {
        return <Text
                style={list.simple_item}
                key={index}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    const stock = orderModel.orderInStock(order);
    const missingStockItemsList = stock.items.map((item, index) => {
        return <Text
                style={list.simple_item}
                key={index}
                >
                    {item}
            </Text>;
    });

    if (!stock.inStock) {
        return (
            <View style={base.content}>
                <Text style={typography.address}>{order.name}</Text>
                <Text style={typography.address}>{order.address}</Text>
                <Text style={typography.address}>{order.zip} {order.city}</Text>
    
                <Text style={typography.h3}>Produkter:</Text>
    
                {orderItemsList}

                <Text style={typography.h3}>Saknas i lager:</Text>
                
                {missingStockItemsList}

            </View>
        )
    }

    return (
        <View>
            <Text style={typography.address}>{order.name}</Text>
            <Text style={typography.address}>{order.address}</Text>
            <Text style={typography.address}>{order.zip} {order.city}</Text>

            <Text style={typography.h3}>Produkter:</Text>

            {orderItemsList}

            <Button title="Plocka order" color={base.buttonColor} onPress={pick} />
        </View>
    )
};