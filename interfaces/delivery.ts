export default interface Delivery {
    id: number,
    product_id: number,
    product_name: string,
    amount: number,
    delivery_date: Date,
    comment: string,
    api_key: string
};