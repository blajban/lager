import { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { base, typography, list } from "../styles/index";
import ItemSeparator from './utility/ItemSeparator';

import productModel from "../models/products";



const ItemList = ({products}) => {
    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <Text style={list.item}>{item.name} - {item.stock}</Text>
            )}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ItemSeparator}
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

