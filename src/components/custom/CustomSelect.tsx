import styled from "styled-components";

interface Props {
    children?: JSX.Element | JSX.Element[];
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    value?: string | number | readonly string[] | undefined;
}

const Select = styled.select`
    background-color: ${(props) => props.theme.bgElements};
    color: ${(props) => props.theme.textColor};
    opacity: 0.8;
    padding: 10px 15px;
    border: 0px;
    outline: 0px;
    scroll-behavior: smooth;
    width: 200px;

    border-radius: 2px;
`;

export const CustomSelect = ({ children, ...rest }: Props) => {
    return (
        <Select {...rest}>
            <option>Filter by Region</option>
            {children}
        </Select>
    );
};
