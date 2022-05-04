import Auth from "../../interfaces/auth";
import { useState } from "react";
import authModel from "../../models/auth";
import AuthFields from "./AuthFields";

export default function Login({ navigation, setIsLoggedIn }) {
    const [auth, setAuth] = useState<Partial<Auth>>({});

    async function doLogin() {
        if (auth.email && auth.password) {
            const result = await authModel.loggedIn(auth.email, auth.password);
            setIsLoggedIn(true);
        }
    }
};