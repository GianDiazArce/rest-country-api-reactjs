import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface Props extends ComponentPropsWithoutRef<"button"> {
}

const ButtonBack = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px 20px;

    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

    background-color: ${(props) => props.theme.bgElements};
    border-color: ${(props) => props.theme.bgElements};

    color: ${(props) => props.theme.textColor};

    font-weight: 300;
`;

export const CustomButtom = ({ children, ...rest }: Props) => {
    return <ButtonBack {...rest}>{children}</ButtonBack>;
};
