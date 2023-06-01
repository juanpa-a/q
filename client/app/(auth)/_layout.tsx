import { Redirect, Stack } from "expo-router";
import { useAuth } from "~/stores/auth";

export default () => {
    const { auth } = useAuth();

    if (!auth)
        return (
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        );
    else return <Redirect href="host/qr" />;
};
