import { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvoiceList from './InvoiceList';
import InvoiceForm from './InvoiceForm';
import { base, typography } from '../../styles/index';

const Stack = createNativeStackNavigator();

export default function Invoices(props) {
    const [allInvoices, setAllInvoices] = useState([]);

    return (
        <Stack.Navigator initialRouteName="Fakturor" screenOptions={({ route }) => ({
            contentStyle: base.content,
            headerStyle: base.header,
            headerTitleStyle: typography.h2
        })}>
            <Stack.Screen name="Fakturor">
                {(screenProps) => <InvoiceList {...screenProps} allInvoices={allInvoices} setAllInvoices={setAllInvoices} setIsLoggedIn={props.setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Skapa faktura">
                {(screenProps) => <InvoiceForm {...screenProps} setAllInvoices={setAllInvoices} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
