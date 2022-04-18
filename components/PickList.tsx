import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
import productModel from "../models/products";
import { base, typography } from "../styles/index";

export default function PickList({ route, navigation, setProducts }) {
    const { order } = route.params;

    async function pick() {
        await orderModel.pickOrder(order);

        setProducts(await productModel.getProducts());
        navigation.navigate("Ordrar", { reload: true });

        return true;
    }

    const orderItemsList = order.order_items.map((item, index) => {
        return <Text
                style={typography.p}
                key={index}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    const stock = orderModel.orderInStock(order);
    const missingStockItemsList = stock.items.map((item, index) => {
        return <Text
                style={typography.p}
                key={index}
                >
                    {item}
            </Text>;
    });

    if (!stock.inStock) {
        return (
            <View style={base.content}>
                <Text>{order.name}</Text>
                <Text>{order.address}</Text>
                <Text>{order.zip} {order.city}</Text>
    
                <Text style={typography.h2}>Produkter:</Text>
    
                {orderItemsList}

                <Text style={typography.h2}>Saknas i lager:</Text>
                
                {missingStockItemsList}

            </View>
        )
    }

    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.address}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text style={typography.h2}>Produkter:</Text>

            {orderItemsList}

            <Button title="Plocka order" onPress={pick} />
        </View>
    )
};