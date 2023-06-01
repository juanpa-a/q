import { Tabs } from "expo-router";
import { Palette } from "~/theme/palette";

export default () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Palette.background,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: Palette.accent,
                    title: "Manage",
                }}
                name="manage"
            />
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: Palette.accent,
                    title: "QR"
                }}
                name="qr"
            />
        </Tabs>
    );
};
