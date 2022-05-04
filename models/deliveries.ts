import config from "../config/config.json";

import Delivery from "../interfaces/delivery"

const deliveries = {
    addDelivery: async function addDelivery(delivery: Partial<Delivery>) {
        delivery.api_key = config.api_key;

        await fetch(
            `${config.base_url}/deliveries`, {
                body: JSON.stringify(delivery),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST'
            }
        );
    
        console.log("adding delivery!");

    },
    getDeliveries: async function getDeliveries(): Promise<Delivery[]> {
        const response = await fetch(`${config.base_url}/deliveries?api_key=${config.api_key}`);
        const result = await response.json();
    
        return result.data;
    }
}

export default deliveries;