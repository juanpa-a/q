import { View, Text } from "react-native";
import { styles } from "~/theme/styles";
import { Button } from "../atoms/button";

type ReservationCardProps = {
    index: number;
    reservation: {
        Name: string;
        PartySize: number;
    };
};

export const ReservationCard = ({
    index,
    reservation,
}: ReservationCardProps) => {
    return (
        <View key={index} style={styles.card}>
            <View>
                <Text style={styles.cardTitle}>{reservation.Name}</Text>
                <Text style={styles.cardSubtitle}>{reservation.PartySize}</Text>
            </View>
            <View>
                {index === 0 && <Button text="Pass" action={() => {}} />}
            </View>
        </View>
    );
};
