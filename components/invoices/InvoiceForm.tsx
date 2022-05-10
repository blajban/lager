import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, ScrollView, Text, TextInput, Button, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Invoice from "../../interfaces/invoices";
import { base, typography, form } from '../../styles';

import orderModel from "../../models/orders";
import invoiceModel from "../../models/invoices";


/* function DateDropDown(props) {
    const [dropDownDate, setDropDownDate] = useState<Date>(new Date());
    const [show, setShow] = useState<Boolean>(false);

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <View>
            {Platform.OS === "android" && (
                <Button onPress={showDatePicker} title="Visa datumväljare" />
            )}
            {(show || Platform.OS === "ios") && (
                <DateTimePicker
                    onChange={(event, date) => {
                        setDropDownDate(date);

                        props.setDelivery({
                            ...props.delivery,
                            delivery_date: date.toLocaleDateString('se-SV'),
                        });

                        setShow(false);
                    }}
                    value={dropDownDate}
                />
            )}
        </View>
    );
}
 */
function OrderDropdown(props) {
    const [allOrders, setAllOrders] = useState([]);
    let orderHash: any = {};

    useEffect(async () => {
        setAllOrders(await orderModel.getOrders());;
    }, []);

    const itemsList = allOrders.map((order, index) => {
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
            <Text style={typography.label}>TEST</Text>
            <TextInput
                style={form.input}
                onChangeText={(content: string) => {
                    setInvoice({ ...invoice, total_price: parseInt(content) })
                }}
                value={invoice?.total_price?.toString()}
                keyboardType="numeric"
            />

            <Text style={typography.label}>Produkt</Text>
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




/* 

return (
    <ScrollView style={base.content}>
        <Text style={typography.label}>Leveransdatum</Text>
        <DateDropDown
            setDelivery={setDelivery}
        />

        <Text style={typography.label}>Antal</Text>
        <TextInput
            style={form.input}
            onChangeText={(content: string) => {
                setDelivery({ ...delivery, amount: parseInt(content) })
            }}
            value={delivery?.amount?.toString()}
            keyboardType="numeric"
        />

        <Text style={typography.label}>Produkt</Text>
        <ProductDropDown
            delivery={delivery}
            setDelivery={setDelivery}
            setCurrentProduct={setCurrentProduct}
        />

        <Text style={typography.label}>Kommentar</Text>
        <TextInput
            style={form.input}
            onChangeText={(content: string) => {
                
                setDelivery({ ...delivery, comment: content })
            }}
            value={delivery?.comment}
        />

        <Button
            title="Gör inleverans"
            color={base.buttonColor}
            onPress={() => {
                addDelivery();
            }}
        />
    </ScrollView>
); */