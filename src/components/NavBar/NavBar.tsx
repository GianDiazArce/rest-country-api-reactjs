import styled from "styled-components";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Nav = styled.nav`
    display: flex;
    padding: 25px 10px;
    padding-left: 14px;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgElements};
    width: 100%;
    @media (min-width: 900px) {
        padding: 25px 40px;
    }
`;
const NavTitle = styled.h1`
    font-size: 18px;
    color: inherit;
    font-weight: 800;
`;

const NavTheme = styled.div`
    display: flex;
    align-items: center;
    color: inherit;
`;

const ToggleThemeButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px 8px;
    gap: 4px;
    color: inherit;
    font-weight: 600;

    &:active {
        background-color: #0000001f;
    }
`;

export const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Nav>
            <NavTitle>Where in the world?</NavTitle>
            <NavTheme>
                {theme === "light" ? (
                    <ToggleThemeButton
                        onClick={() => {
                            toggleTheme(theme);
                        }}
                    >
                        <IoIosMoon /> Dark Mode
                    </ToggleThemeButton>
                ) : (
                    <ToggleThemeButton
                        onClick={() => {
                            toggleTheme(theme);
                        }}
                    >
                        <IoIosSunny />
                        Light Mode
                    </ToggleThemeButton>
                )}
            </NavTheme>
        </Nav>
    );
};
