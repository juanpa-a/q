import { Text } from "react-native";
import { styles } from "../../theme/styles";

type Props = {
    text: string;
};

export const Subtitle = ({ text }: Props) => {
    return <Text style={styles.subtitle}>{text}</Text>;
};
