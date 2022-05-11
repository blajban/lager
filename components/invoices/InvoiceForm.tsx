import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Invoice from "../../interfaces/invoices";
import { base, typography, form } from '../../styles';

import orderModel from "../../models/orders";
import invoiceModel from "../../models/invoices";

const order_status_packed = 200;
const order_status_shipped = 400;

function OrderDropdown(props) {
    const [allOrders, setAllOrders] = useState([]);
    let orderHash: any = {};

    useEffect(async () => {
        setAllOrders(await orderModel.getOrders());;
    }, []);

    const itemsList = allOrders
        .filter(order => order.status_id === order_status_packed || order.status_id === order_status_shipped)
        .map((order, index) => {
            orderHash[order.id] = order;
            return <Picker.Item key={index} label={order.name} value={order.id} />;
    });

    return (
        <Picker
            selectedValue={props.currentOrder?.id}
            onValueChange={(itemValue) => {
                props.setInvoice({ ...props.invoice, order_id: itemValue });
                props.setCurrentOrder(orderHash[itemValue]);
            }}>
            {itemsList}
        </Picker>
    );
}

export default function InvoiceForm({ navigation, setAllInvoices }) {
    const [invoice, setInvoice] = useState<Partial<Invoice>>({});
    const [currentOrder, setCurrentOrder] = useState({});

    async function addInvoice() {
        let totalPrice = 0;
        for (const item of currentOrder.order_items) {
            totalPrice += item.price * item.amount;
        }

        const date = new Date();
        const due = new Date(Number(date))
        due.setDate(date.getDate() + 30)

        const updatedInvoice = {
            ...invoice,
            total_price: totalPrice,
            creation_date: date.toLocaleDateString('se-SV'),
            due_date: due.toLocaleDateString('se-SV')
        };

        await orderModel.changeOrderStatus(currentOrder, 600);

        await invoiceModel.addInvoice(updatedInvoice);

        setAllInvoices(await invoiceModel.getInvoices());

        navigation.navigate("Fakturor", { reload: true });
    }

    return (
        <ScrollView style={base.content}>

            <Text style={typography.label}>Order</Text>
            <OrderDropdown
                invoice={invoice}
                currentOrder={currentOrder}
                setInvoice={setInvoice}
                setCurrentOrder={setCurrentOrder}
            />

            <Button
                title="Skapa faktura"
                color={base.buttonColor}
                onPress={() => {
                    addInvoice();
                }}
            />
        </ScrollView>
    );
};
