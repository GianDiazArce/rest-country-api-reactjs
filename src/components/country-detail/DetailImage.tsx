import styled from "styled-components";
import { ResultCountryByName } from "../../interfaces/ContriesInterface";

interface Props {
    country: ResultCountryByName;
}

const FigureFlag = styled.figure`
    width: 100%;
    max-height: 370px;
    max-width: 420px;

    @media screen and (min-width: 700px) {
        width: 50%;
        margin-top: 10px;
    }

    @media (min-width: 900px) {
        max-width: 500px;
        max-height: 370px;
    }
`;

const FlagImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.8);
`;

export const DetailImage = ({ country }: Props) => {
    return (
        <FigureFlag>
            <FlagImg src={country.flag} alt={country.name.toString()} />
        </FigureFlag>
    );
};
