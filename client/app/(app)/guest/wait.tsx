import { Main } from "~/components/templates/main";
import { Text } from "react-native";
import { styles } from "~/theme/styles";
import { Palette } from "~/theme/palette";

export default function Page() {
    return (
        <Main>
            <Text style={styles.title}>
                You are number <Text style={{ color: Palette.accent }}>6</Text>{" "}
                in line.
            </Text>
        </Main>
    );
}
