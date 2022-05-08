import { Text, View } from "react-native";
import Logout from "./auth/Logout";
import { DataTable } from "react-native-paper";
import { base } from "../styles/index";

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
