import { View, Text, TextInput, Button } from "react-native";
import { typography, form, base } from "../../styles";

export default function AuthFields({ auth, setAuth, title, submit, navigation }) {
    return (
        <View>
        <Text style={typography.h2}>{title}</Text>
        <Text style={typography.label}>E-post:</Text>
        <TextInput
            style={form.input}
            onChangeText={(content: string) => {
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
                setAuth({...auth, password: content})
            }}
            value={auth?.password}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Button 
            title={title}
            onPress={() => {
                submit();
            }}
        />

        {title == "Logga in" && 
            <Button 
                title="Registrera"
                onPress={() => {
                    navigation.navigate("Register");
                }}
            />
        }

    </View>
    );

};