import React, { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "../../theme/styles";
// import { styles } from "~theme/styles.ts";

type Props = {
    children: ReactNode;
};

export const Wrapper = ({ children }: Props) => {
    return <View style={styles.wrapper}>{children}</View>;
};
