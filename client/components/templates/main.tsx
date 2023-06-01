import React, { ReactNode } from "react";
import { Wrapper } from "./wrapper";
import { Container } from "./container";

type Props = {
    children: ReactNode;
};

export const Main = ({ children }: Props) => {
    return (
        <Container>
            <Wrapper>{children}</Wrapper>
        </Container>
    );
};
