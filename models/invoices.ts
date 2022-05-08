import config from "../config/config.json";
import Invoice from "../interfaces/invoices";

const invoices = {
    getInvoices: async function getInvoices(): Promise<Invoice[]> {
        const response = await fetch(`${config.base_url}/invoices?api_key=${config.api_key}`);
        const result = await response.json();
    
        return result.data;
    }
}

export default invoices;