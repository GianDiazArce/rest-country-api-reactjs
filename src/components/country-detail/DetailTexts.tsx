import styled from "styled-components";
import { ResultCountryByName } from "../../interfaces/ContriesInterface";
import { CustomButtom } from "../custom/CustomButtom";

interface Props {
    country: ResultCountryByName;
    borderCountries: string[];
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 700px) {
    }
`;

const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 900px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
    }
`;
const PrimaryInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const SecondaryInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    @media screen and (min-width: 700px) {
        margin-top: 0;
    }
`;

const CountryName = styled.h2`
    margin: 5px 0;
    color: ${(props) => props.theme.textColor};
`;

const CountryParagraph = styled.p`
    color: ${(props) => props.theme.textColor};
    margin: 5px 0;
    font-weight: 600;
    & span {
        font-weight: 300;
        opacity: 0.8;
    }
`;

const BorderContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    & div {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        flex-grow: 1;
        margin-top: 10px;
        opacity: 0.8;
    }
`;

export const DetailTexts = ({ country, borderCountries }: Props) => {
    return (
        <Container>
            <CountryName>{country.name}</CountryName>
            <CountryInfo>
                <PrimaryInfo>
                    <CountryParagraph>
                        Native Name: <span>{country.nativeName}</span>
                    </CountryParagraph>
                    <CountryParagraph>
                        Population: <span>{country.population}</span>
                    </CountryParagraph>
                    <CountryParagraph>
                        Region: <span>{country.region}</span>
                    </CountryParagraph>
                    <CountryParagraph>
                        Sub Region: <span>{country.subregion}</span>
                    </CountryParagraph>
                    <CountryParagraph>
                        Capital: <span>{country.capital}</span>
                    </CountryParagraph>
                </PrimaryInfo>
                <SecondaryInfo>
                    <CountryParagraph>
                        Top Level Domain: <span>{country.topLevelDomain}</span>
                    </CountryParagraph>
                    <CountryParagraph>
                        Currencies:{" "}
                        <span>
                            {Object.entries(country.currencies)
                                .map((value) => value[1].name)
                                .join(", ")}
                        </span>
                    </CountryParagraph>
                    <CountryParagraph>
                        Languages:{" "}
                        <span>
                            {Object.entries(country.languages)
                                .map((value) => value[1].name)
                                .join(", ")}
                        </span>
                    </CountryParagraph>
                </SecondaryInfo>
            </CountryInfo>
            <BorderContainer>
                <CountryParagraph>Border Countries:</CountryParagraph>
                <div>
                    {borderCountries.map((border, index) => (
                        <CustomButtom
                            style={{ border: "none", outline: "none" }}
                            key={index}
                        >
                            {border}
                        </CustomButtom>
                    ))}
                </div>
            </BorderContainer>
        </Container>
    );
};
