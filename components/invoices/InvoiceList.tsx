import { View, Button, Text } from 'react-native';
import { useEffect } from 'react';
import { base, typography } from "../../styles/index";
import InvoiceModel from "../../models/invoices";
import Invoice from "../../interfaces/invoices";
import { DataTable } from "react-native-paper";
import Logout from "../auth/Logout";



export default function InvoiceList({ route, navigation, allInvoices, setAllInvoices, setIsLoggedIn }) {
    const { reload } = route.params || false;

    if (reload) {
        reloadInvoices();
    }

    async function reloadInvoices() {
        setAllInvoices(await InvoiceModel.getInvoices());
    }

    useEffect(() => {
        reloadInvoices();
    }, []);
/* 
    if (allInvoices == null) {
        return (
            <View style={base.content}>
                <Button
                    title="Skapa faktura"
                    color={base.buttonColor}
                    onPress={() => {
                        navigation.navigate('Skapa faktura');
                    }}
                />
                <Text style={typography.h3}>Inga fakturor</Text>
                
                <Logout
                    setIsLoggedIn={setIsLoggedIn}
                />
            </View>
        );
    }
 */
    const table = allInvoices.map((invoice: Invoice) => {
        return (
            <DataTable.Row key={invoice.id}>
                <DataTable.Cell numeric>{invoice.order_id}</DataTable.Cell>
                <DataTable.Cell>{invoice.creation_date}</DataTable.Cell>
                <DataTable.Cell> {invoice.due_date}</DataTable.Cell>
            </DataTable.Row>
        );
    });



    return (
        <View style={base.content}>
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
                    <DataTable.Title numeric>Ordernummer</DataTable.Title>
                    <DataTable.Title>Skapad</DataTable.Title>
                    <DataTable.Title>Förfaller</DataTable.Title>
                </DataTable.Header>
                {table}
            </DataTable>
            
            <Logout
                setIsLoggedIn={setIsLoggedIn}
            />
        </View>
    );
};



