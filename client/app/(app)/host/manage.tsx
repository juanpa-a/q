import { ScrollView } from "react-native-gesture-handler";
import { Container } from "~/components/templates/container";
import { Wrapper } from "~/components/templates/wrapper";
import { ReservationCard } from "~/components/cards/reservation";
import { QueueService } from "~/services/queue";
import { Text } from "react-native";
import { styles } from "~/theme/styles";
import { Palette } from "~/theme/palette";

export default () => {
    const { queue } = QueueService();

    return (
        <Container>
            {queue.length ? (
                <ScrollView style={{ width: "100%" }}>
                    {queue.map((r, i) => (
                        <ReservationCard index={i} reservation={r} />
                    ))}
                </ScrollView>
            ) : (
                <Wrapper>
                    <Text style={{ ...styles.title }}>
                        <Text style={{ color: Palette.accent }}>Queue</Text> is
                        empty...
                    </Text>
                </Wrapper>
            )}
        </Container>
    );
};
