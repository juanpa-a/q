import { Redirect, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useEffect } from "react";
import { useAuth } from "~/stores/auth";
import { Palette } from "~/theme/palette";

export default () => {
    const { auth } = useAuth();

    if (auth)
        return (
            <Drawer
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: Palette.background,
                        borderBottomWidth: 5,
                    },
                    headerTitleStyle: {
                        color: Palette.text,
                    },

                    drawerContentContainerStyle: {
                        backgroundColor: Palette.background,
                        height: "100%",
                    },
                    drawerLabelStyle: {
                        color: Palette.text,
                    },
                    headerTintColor: Palette.text,
                }}
            >
                <Drawer.Screen name="guest" options={{ title: "Guest" }} />
                <Drawer.Screen name="host" options={{ title: "Host" }} />
            </Drawer>
        );
    else return <Redirect href="sign-in" />;
};
