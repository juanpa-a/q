import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "~/theme/styles";
import { useEffect, useState } from "react";
import { ANDROID_CLIENT_ID, EXPO_CLIENT_ID } from "~/constants";
import * as Google from "expo-auth-session/providers/google";
import { useAuth } from "~/stores/auth";

export default () => {
    // Google
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: ANDROID_CLIENT_ID,
        expoClientId: EXPO_CLIENT_ID,
    });

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication!.accessToken);
            getUserInfo();
        }
    }, [response, token]);

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            const user = await response.json();
            setUserInfo("user");
        } catch (error) {
            // Add your own error handler here
        }
    };

    const { toggle } = useAuth()

    return (
        <TouchableOpacity
            style={{ ...styles.cardButton, width: "100%" }}
            // onPress={async () => {
                // const res = await promptAsync();
                // console.log(res);
                
            // }}
            onPress={toggle}
        >
            <View style={{ padding: 3 }}>
                <Text
                    style={{
                        ...styles.cardButtonText,
                        fontSize: 14,
                        color: "white",
                    }}
                >
                    <FontAwesome
                        name="google"
                        size={12}
                        color="white"
                        style={{
                            padding: 4,
                            marginRight: 4,
                        }}
                    />{" "}
                    Sign in with Google
                </Text>
            </View>
        </TouchableOpacity>
    );
};
