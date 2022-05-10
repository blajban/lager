import config from "../config/config.json";
import Invoice from "../interfaces/invoices";
import storage from "./storage";

const invoices = {
    getInvoices: async function getInvoices(): Promise<Invoice[]> {
        const token = await storage.readToken();
        const response = await fetch(
            `${config.base_url}/invoices?api_key=${config.api_key}`, {
            headers: {
                'x-access-token': token.token
              },
            });
        const result = await response.json();
    
        return result.data;
    },
    addInvoice: async function addInvoice(invoice: Partial<Invoice>) {
        invoice.api_key = config.api_key;

        const token = await storage.readToken();

        await fetch(
            `${config.base_url}/invoices`, {
                body: JSON.stringify(invoice),
                headers: {
                    'content-type': 'application/json',
                    'x-access-token': token.token
                },
                method: 'POST'
            }
        );
    },
}

export default invoices;