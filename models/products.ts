import config from "../config/config.json";

interface Product {
    // TODO: Kolla vilka fält vi ska ha här!
}


const products = {
    getProducts: async function getProducts() {
        const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    }

}

export default products;