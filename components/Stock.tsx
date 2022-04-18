import { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { base, typography, list } from "../styles/index";

import productModel from "../models/products";


const myItemSeparator = () => {
    return (
      <View
       style={list.itemSeparator}
      />
    );
};


const ItemList = ({products}) => {
    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <Text style={list.item}>{item.name} - {item.stock}</Text>
            )}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={myItemSeparator}
        />
    );
}

export default function Stock({products, setProducts}) {
    useEffect(async () => {
        setProducts(await productModel.getProducts());
      }, []);

    return (
        <View style={base.content}>
            <Text style={typography.h2}>Lagerförteckning</Text>
            <ItemList products={products} />
        </View>
    );
}

