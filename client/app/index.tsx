import { Redirect } from "expo-router";
import { useAuth } from "~/stores/auth";

export default () => {
    const { auth } = useAuth();
    return auth
        ? <Redirect href="host/qr" />
        : <Redirect href="sign-in" />
};
