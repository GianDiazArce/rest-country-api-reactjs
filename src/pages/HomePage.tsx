import styled from "styled-components";
import { CustomInputSearch } from "../components/custom/CustomInputSearch";
import { CustomSelect } from "../components/custom/CustomSelect";
import { regiones } from "../data/data";
import { Contries } from "../components/countries/Contries";
import { useState } from "react";
import { useNavigate } from "react-router";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px 10px;
    color: ${(props) => props.theme.colorText};

    & option:first-child {
        display: none;
    }

    @media (min-width: 700px) {
        padding: 20px 40px;
    }
`;

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const HomePage = () => {
    const [continent, setContinent] = useState<
        "africa" | "americas" | "asia" | "europe" | "oceania" | string
    >("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setContinent(e.target.value.toLowerCase() as any);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/country/${name}`);
    };

    return (
        <Container>
            <ActionContainer>
                <form onSubmit={handleSubmit}>
                    <CustomInputSearch
                        onChange={handleInputChange}
                        value={name}
                        placeholder="Search for a country..."
                    />
                </form>
                <CustomSelect onChange={(e) => handleChange(e)}>
                    {regiones.map((region) => (
                        <option key={region.id} value={region.name}>
                            {region.name}
                        </option>
                    ))}
                </CustomSelect>
            </ActionContainer>
            <Contries region={continent} />
        </Container>
    );
};
