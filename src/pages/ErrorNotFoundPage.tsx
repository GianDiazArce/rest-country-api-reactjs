import styled from "styled-components";
import { CustomInputSearch } from "../components/custom/CustomInputSearch";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { CustomButtom } from "../components/custom/CustomButtom";

import { HiArrowNarrowLeft } from "react-icons/hi";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    & p {
        color: ${(props) => props.theme.textColor};
    }
`;

export const ErrorNotFoundPage = () => {
    const [name, setName] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            navigate(`/country/${name}`);
        }
    };

    return (
        <Container>
            <p>
                Country: <strong>{params.param}</strong> not found... try again
            </p>
            <CustomInputSearch
                onKeyPress={handleKeyPress}
                onChange={handleInputChange}
                value={name}
                placeholder="Search for a country..."
            />
            <CustomButtom onClick={() => navigate("/")}>
                <HiArrowNarrowLeft />
                Back
            </CustomButtom>
        </Container>
    );
};
