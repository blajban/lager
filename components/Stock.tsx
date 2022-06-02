import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { base, typography, list } from "../styles/index";
import productModel from "../models/products";
import StockList from './StockList';





export default function Stock({products, setProducts}) {
    useEffect(async () => {
        setProducts(await productModel.getProducts());
      }, []);

    return (
        <View style={base.content}>
            <Text style={typography.h2}>Lagerförteckning</Text>
            <StockList products={products} />
        </View>
    );
}

