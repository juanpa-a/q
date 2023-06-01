import QRCode from "react-native-qrcode-svg";
import { Main } from "~/components/templates/main";
import { Palette } from "~/theme/palette";
import { Text } from "react-native";
import { styles } from "~/theme/styles";
import { useAuth } from "~/stores/auth";

export default () => {
    const { userId } = useAuth();

    return (
        <Main>
            <Text style={{ ...styles.title, textAlign: "center" }}>
                scan <Text style={{ color: Palette.accent }}>me</Text>
            </Text>
            <QRCode
                value={`q-app://enqueue/${userId}`}
                size={250}
                backgroundColor={Palette.container}
                color={Palette.accent}
            />
        </Main>
    );
};
