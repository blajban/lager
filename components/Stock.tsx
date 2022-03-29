import { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import config from "../config/config.json";
import styles from "./styles.tsx"

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

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setProducts(result.data));
    }, []);

    //const list = products.map((product, index) => <Text style={styles.p} key={index}>{ product.name } - { product.stock }</Text>);

    return (
        <ItemList products={products} />
    );
}

export default function Stock() {
    return (
        <View style={styles.content}>
            <Text style={styles.h2}>Lagerförteckning</Text>
            <StockList/>
        </View>
    );
}