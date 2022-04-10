import { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from "../styles/index"

import productModel from "../models/products";


const myItemSeparator = () => {
    return (
      <View
       style={styles.itemSeparator}
      />
    );
};


const ItemList = ({products}) => {
    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <Text style={styles.item}>{item.name} - {item.stock}</Text>
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
        <View style={styles.content}>
            <Text style={styles.h2}>Lagerförteckning</Text>
            <ItemList products={products} />
        </View>
    );
}

