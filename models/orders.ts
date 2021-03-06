import config from "../config/config.json";
import productModel from "./products"
import Order from "../interfaces/orders";


const orders = {
    getOrders: async function getOrders(): Promise<Order[]> {
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    pickOrder: async function pickOrder(order: Partial<Order>) {
        await this.changeOrderStatus(order, 200)

        await this.updateStock(order.order_items);

    },
    changeOrderStatus: async function changeOrderStatus(order: Partial<Order>, status: number) {
        order.api_key = config.api_key;
        order.status_id = status;
        await fetch(
            `${config.base_url}/orders`, {
                body: JSON.stringify(order),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            }
        );

        console.log("updating order status!");
        
    },
    updateStock: async function updateStock(order_items: OrderItem[]) {
        for (const item of order_items) {
            const updated_product = {
                id: item.product_id,
                article_number: item.article_number,
                name: item.name,
                description: item.description,
                specifiers: item.specifiers,
                stock: item.stock - item.amount,
                location: item.location,
                price: item.price
            };
            productModel.updateProduct(updated_product);
        }
    },
    orderInStock: function orderInStock(order: Partial<Order>) {
        const stock = {
            inStock: true,
            items: []
        };

        for (const item of order.order_items) {
            if (item.amount <= item.stock) {
                continue
            }

            stock.inStock = false;
            stock.items.push(item.name);
        }

        return stock;
    }
};

export default orders;