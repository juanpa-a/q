import { Text, View } from "react-native";
import { styles } from "~/theme/styles";
import { Palette } from "~/theme/palette";

import AppleButton from "./utils/apple"
import GoogleButton from "./utils/google"

export default function Page() {
    return (
        <View
            style={{
                ...styles.container,
                width: "100%",
            }}
        >
            <View
                style={{
                    ...styles.wrapper,
                    width: "100%",
                }}
            >
                <Text style={{ ...styles.title, textAlign: "center" }}>
                    Sign <Text style={{ color: Palette.accent }}>In</Text>
                </Text>

                <AppleButton />
                <GoogleButton />
            </View>
        </View>
    );
}
