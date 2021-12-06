import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useContext, ComponentPropsWithoutRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props extends ComponentPropsWithoutRef<"input"> {
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
}

const Container = styled.div`
    display: flex;
    color: ${(props) => props.theme.colorText};
    background-color: ${(props) => props.theme.bgElements};
    border-radius: 8px;
    padding: 12px 20px;
    align-items: center;
    gap: 5px;

    @media screen and (min-width: 700px) {
        width: 280px;
    }
`;

const SearchInput = styled.input`
    color: ${(props) => props.theme.colorText};
    width: 100%;
    background-color: inherit;
    border: none;
    padding-left: 10px;

    &:focus {
        border: none;
        outline: none;
    }
`;

export const CustomInputSearch = ({ value, ...rest }: Props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Container>
            <IoIosSearch
                color={
                    theme === "light"
                        ? "hsl(200, 15%, 8%)"
                        : "hsla(0, 0%, 100%, 0.774)"
                }
            />
            <SearchInput
                style={{
                    color:
                        theme === "light"
                            ? "hsl(200, 15%, 8%)"
                            : "hsla(0, 0%, 100%, 0.774)",
                }}
                type="text"
                value={value}
                {...rest}
            />
        </Container>
    );
};
