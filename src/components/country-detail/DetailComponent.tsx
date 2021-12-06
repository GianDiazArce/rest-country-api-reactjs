import styled from "styled-components";
import { DetailImage } from "./DetailImage";
import { DetailTexts } from "./DetailTexts";
import { ResultCountryByName } from "../../interfaces/ContriesInterface";

interface Props {
    country: ResultCountryByName;
    borderCountries: string[];
}

const DetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 700px) {
        flex-direction: row;
        gap: 20px;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media screen and (min-width: 900px) {
        justify-content: space-evenly;
        gap: 2em;
    }
`;

export const DetailsComponent = ({ country, borderCountries }: Props) => {
    if (country) {
        return (
            <DetailContainer>
                <DetailImage country={country} />
                <DetailTexts
                    country={country}
                    borderCountries={borderCountries}
                />
            </DetailContainer>
        );
    } else {
        return <></>;
    }
};
