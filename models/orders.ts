import config from "../config/config.json";
import products from "./products"

interface OrderItem {
    // TODO: Kolla vilka fält vi ska ha här!
}

interface Order {
    id: number,
    name: string,
    address: string,
    zip: number,
    city: string,
    country: string,
    status: string,
    status_id: number,
    order_items: Array<OrderItem>,
}

const orders = {
    getOrders: async function getOrders(): Promise<Order[]> {
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    pickOrder: async function pickOrder(order: Partial<Order>) {
        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad

        // TODO: 
        // if button pressed change order status to 'Packad'
        // when status changes the stock also need to change
        // can compare to order

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