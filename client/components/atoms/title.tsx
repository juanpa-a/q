import { Text } from "react-native";
import { styles } from "../../theme/styles";

type Props = {
    text: string;
};

export const Title = ({ text }: Props) => {
    return <Text style={styles.title}>{text}</Text>;
};
