import { useNavigate } from "react-router";
import styled from "styled-components";
import { ContriesResponse } from '../../interfaces/ContriesInterface';

interface Props {
    country?: ContriesResponse;
}

const Container = styled.div`
    background-color: ${(props) => props.theme.bgElements};
    height: auto;
    cursor: pointer;
    width: 100%;
`;

const CountryImg = styled.img`
    display: flex;
    object-fit: cover;
    width: 100%;
`;

const CardBody = styled.div`
    color: ${(props) => props.theme.textColor};
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
`;

const CardTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 20px;
`;

const CardParagraph = styled.p`
    font-weight: 600;

    & span {
        font-weight: 300;
        opacity: 0.8;
    }
`;

export const CountryCard = ({ country }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/country/" + country?.name.toLowerCase(), {
            state: {
                country,
            },
        });
    };

    return (
        <Container onClick={handleClick}>
            <CountryImg src={country?.flags.svg} alt={country?.name} />
            <CardBody>
                <CardTitle>{country?.name}</CardTitle>
                <CardParagraph>
                    Population: <span>{country?.population}</span>
                </CardParagraph>
                <CardParagraph>
                    Region: <span>{country?.region}</span>
                </CardParagraph>
                <CardParagraph>
                    Capital: <span>{country?.capital}</span>
                </CardParagraph>
            </CardBody>
        </Container>
    );
};
