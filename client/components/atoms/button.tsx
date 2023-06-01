import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "../../theme/styles";

type ButtonProps = {
    text: string;
    action: (event: GestureResponderEvent) => void;
};

export const Button = ({ text, action }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.cardButton} onPress={action}>
            <Text style={styles.cardButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};
