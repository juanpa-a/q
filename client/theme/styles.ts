import { StyleSheet } from "react-native";
import { Palette } from "./palette";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor: Palette.container,
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
        color: Palette.text,
    },
    subtitle: {
        fontSize: 36,
        color: Palette.text,
    },
    cardButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: Palette.accent,
        borderRadius: 5,
    },
    cardButtonText: {
        color: Palette.background,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: Palette.accent,
        borderRadius: 5,
        marginVertical: 5,
    },
    infoContainer: {
        // flex: 1,
        // marginRight: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: Palette.accent,
    },
    cardSubtitle: {
        fontSize: 14,
        marginTop: 5,
        color: Palette.text,
    },
});
