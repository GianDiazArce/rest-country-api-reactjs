import { useEffect, useState } from "react";
import styled from "styled-components";
import { CountryCard } from "./CountryCard";
import { countryApi } from "../../api/countryApi";
import { ContriesResponse } from "../../interfaces/ContriesInterface";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 50px;
    padding: 10px 30px;
    overflow: hidden;
    justify-content: space-between;

    @media (min-width: 900px) {
        padding: 10px 0;
    }
`;

interface Props {
    region: string;
}

export const Contries = ({ region }: Props) => {
    const [countries, setCountries] = useState<ContriesResponse[]>();

    useEffect(() => {
        const loadCountries = async () => {
            if (region.length === 0) {
                const resp = await countryApi.get<ContriesResponse[]>(
                    "https://restcountries.com/v2/all"
                );
                setCountries(resp.data);
            } else {
                const resp = await countryApi.get<ContriesResponse[]>(
                    `https://restcountries.com/v2/region/${region}`
                );
                setCountries(resp.data);
            }
        };
        loadCountries();
    }, [region]);

    return (
        <Container>
            {countries?.map((country, index) => (
                <CountryCard key={index} country={country} />
            ))}
        </Container>
    );
};
