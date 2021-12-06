import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CountryDetail } from "../pages/CountryDetail";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/config";
import { NavBar } from "../components/NavBar/NavBar";
import { ErrorNotFoundPage } from "../pages/ErrorNotFoundPage";

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

const Container = styled.main`
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
`;

export const MainRouter = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter>
            <ThemeProvider theme={themes[theme]}>
                <Container>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/country/:id"
                            element={<CountryDetail />}
                        />
                        <Route
                            path="/error/:param"
                            element={<ErrorNotFoundPage />}
                        />

                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};
