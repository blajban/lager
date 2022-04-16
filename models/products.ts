import { ListItem } from "react-native-elements";
import config from "../config/config.json";
import orderModel from "./orders";

interface Product {
        id: number,
        article_number: string,
        name: string,
        description: string,
        specifiers: object,
        stock: number,
        location: string,
        price: number
}


const products = {
    getProducts: async function getProducts(): Promise<Product[]> {
        const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    updateProduct: async function updateProduct(product: Product) {
        product.api_key = config.api_key;
        await fetch(
            `${config.base_url}/products`, {
                body: JSON.stringify(product),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            }
        );

        console.log("updating product!");
    }

}

export default products;