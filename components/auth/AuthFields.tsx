import { View, Text, TextInput, Button } from "react-native";
import { showMessage } from "react-native-flash-message";
import { typography, form, base } from "../../styles";

export default function AuthFields({ auth, setAuth, title, submit, navigation }) {

    function validateEmail(text: string) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!text.match(pattern)) {
            showMessage({
                message: "Icke giltig e-postadress",
                description: "Ange en giltig e-postadress, till exempel zzz@zzz.se",
                type: "warning"
                }
            );
        }
    }

    function validatePassword(text: string) {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!\.-]).{4,}$/

        if (!text.match(pattern)) {
            showMessage({
                message: "Icke giltigt lösenord",
                description: "Lösenordet måste innehålla min 4 tecken, små och stora bokstäver, siffror och ett specialtecken",
                type: "warning"
                }
            );
        }
    }

    return (
        <View>
        <Text style={typography.h2}>{title}</Text>
        <Text style={typography.label}>E-post:</Text>
        <TextInput
            style={form.input}
            onChangeText={(content: string) => {
                validateEmail(content);
                setAuth({...auth, email: content})
            }}
            value={auth?.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Text style={typography.label}>Lösenord</Text>
        <TextInput
            style={form.input} 
            onChangeText={(content: string) => {
                validatePassword(content);
                setAuth({...auth, password: content})

            }}
            value={auth?.password}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Button 
            title={title}
            color={base.buttonColor}
            onPress={() => {
                submit();
                setAuth();
            }}
        />

        {title == "Logga in" && 
            <Button 
                title="Registrera"
                color={base.buttonColor}
                onPress={() => {
                    navigation.navigate("Register");
                }}
            />
        }

    </View>
    );

};