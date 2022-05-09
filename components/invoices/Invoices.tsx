import { Text, View } from "react-native";
import { useState, useEffect } from "react";




import InvoiceModel from "../../models/invoices";
import Invoice from "../../interfaces/invoices";

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


/* 
export default function Invoices (props) {

    const [allInvoices, setAllInvoices] = useState([]);

    async function realoadInvoices() {
        setAllInvoices(await InvoiceModel.getInvoices());
    }

    useEffect(() => {
        realoadInvoices();
    }, []);

    const table = allInvoices.map((invoice: Invoice) => {
        return (
            <DataTable.Row key={invoice.id}>
              <DataTable.Cell numeric>{invoice.order_id}</DataTable.Cell>
              <DataTable.Cell>{invoice.creation_date}</DataTable.Cell>
              <DataTable.Cell> {invoice.due_date}</DataTable.Cell>
            </DataTable.Row>
        );
    });



    console.log(allInvoices);


    return (
        <View style={base.content}>
            <Text>Fakturor!</Text>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title numeric>Ordernummer</DataTable.Title>
                    <DataTable.Title>Skapad</DataTable.Title>
                    <DataTable.Title>Förfaller</DataTable.Title>
                </DataTable.Header>
                {table}
            </DataTable>

            <Logout
                setIsLoggedIn={props.setIsLoggedIn}
            />
        </View>
    );
}; */
/* 
export default function Invoices (props) {

    const animals = [
        { name: "elephant", legs: 4, color: "grey"},
        { name: "kangaroo", legs: 2, color: "brown"},
        { name: "spider", legs: 8, color: "black"},
    ];

    const table = animals.map((animal, index) => {
        return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{animal.name}</DataTable.Cell>
              <DataTable.Cell numeric>{animal.legs}</DataTable.Cell>
              <DataTable.Cell> {animal.color}</DataTable.Cell>
            </DataTable.Row>
        );
    });

    const [allInvoices, setAllInvoices] = useState([]);

    async function realoadInvoices() {
        setAllInvoices(await InvoiceModel.getInvoices());
    }

    useEffect(() => {
        realoadInvoices();
    }, []);


    console.log(allInvoices);


    return (
        <View style={base.content}>
            <Text>Fakturor!</Text>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Animal</DataTable.Title>
                    <DataTable.Title numeric># of legs</DataTable.Title>
                    <DataTable.Title>Color</DataTable.Title>
                </DataTable.Header>
                {table}
            </DataTable>

            <Logout
                setIsLoggedIn={props.setIsLoggedIn}
            />
        </View>
    );
};

 */