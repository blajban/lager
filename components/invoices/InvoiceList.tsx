import { View, Button, Text, ScrollView } from 'react-native';
import { useEffect } from 'react';
import { base, typography } from "../../styles/index";
import InvoiceModel from "../../models/invoices";
import Invoice from "../../interfaces/invoices";
import { DataTable } from "react-native-paper";
import Logout from "../auth/Logout";

import { table as Table } from "../../styles/index" ;



export default function InvoiceList({ route, navigation, allInvoices, setAllInvoices, setIsLoggedIn }) {
    const { reload } = route.params || false;

    if (reload) {
        reloadInvoices();
        route.params = false; 
    }

    async function reloadInvoices() {
        setAllInvoices(await InvoiceModel.getInvoices());
    }

    useEffect(() => {
        reloadInvoices();
    }, []);

    const table = allInvoices.map((invoice: Invoice) => {
        return (
            <DataTable.Row key={invoice.id}>
                <DataTable.Cell textStyle={Table.tableText}>{invoice.name}</DataTable.Cell>
                <DataTable.Cell textStyle={Table.tableText}>{invoice.due_date}</DataTable.Cell>
                <DataTable.Cell numeric textStyle={Table.tableText}>{invoice.total_price}</DataTable.Cell>
            </DataTable.Row>
        );
    });

    return (
        <ScrollView style={base.content}>
            <Button
                title="Skapa faktura"
                color={base.buttonColor}
                onPress={() => {
                    navigation.navigate('Skapa faktura');
                }}
            />
            <Text style={typography.h3}>Fakturor</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title textStyle={Table.headText}>Kund</DataTable.Title>
                    <DataTable.Title textStyle={Table.headText}>Förfaller</DataTable.Title>
                    <DataTable.Title numeric textStyle={Table.headText}>Pris</DataTable.Title>
                </DataTable.Header>
                {table}
            </DataTable>
            
            <Logout
                setIsLoggedIn={setIsLoggedIn}
            />
        </ScrollView>
    );
};



