import { View, Text, TextInput, Button } from "react-native";
import { typography, form, base } from "../../styles";
import AuthModel from "../../models/auth";

export default function Logout({ setIsLoggedIn }) {
    
    async function doLogout() {
        await AuthModel.logout();
        setIsLoggedIn(false);
    }

    return (
        <Button
            title="Logga ut"
            onPress={() => {
                doLogout();
            }}
        />
    );


};
