import { useParams, useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";
import { AllCountriesNamesAndAlphaCode } from "../interfaces/ContriesInterface";
import { countryApi } from "../api/countryApi";
import { CustomButtom } from "../components/custom/CustomButtom";
import { DetailsComponent } from "../components/country-detail/DetailComponent";
import { ResultCountryByName } from "../interfaces/ContriesInterface";

const Container = styled.div`
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    @media screen and (min-width: 700px) {
        padding: 30px 50px;
    }
`;

export const CountryDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [country, setCountry] = useState<ResultCountryByName>(
        location.state ? location.state.country : []
    );
    const [borderCountries, setBorderCountries] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getBordersNames = async (country: ResultCountryByName) => {
        if (country.borders) {
            const resp = await countryApi.get<AllCountriesNamesAndAlphaCode[]>(
                `https://restcountries.com/v2/all?fields=alpha3Code,name`
            );
            const arr = [];
            for (let i = 0; i < country.borders.length; i++) {
                arr.push(
                    resp.data
                        .filter(
                            (data) => data.alpha3Code === country.borders[i]
                        )
                        .map((data) => data.name)
                        .join()
                );
            }
            setBorderCountries(arr);
        }
    };

    useEffect(() => {
        if (location.state) {
            getBordersNames(location.state.country).then(() =>
                setIsLoading(false)
            );
        } else {
            const loadCountry = async (name: string) => {
                const resp = await countryApi.get<ResultCountryByName[]>(
                    `https://restcountries.com/v2/name/${name}`
                );
                setCountry(resp.data[0] as any);
                setIsLoading(false);
                await getBordersNames(resp.data[0] as any);
            };
            loadCountry(params.id || "usa")
                .then(() => setIsLoading(false))
                .catch((e) => {
                    navigate(`/error/${params.id}`);
                });
        }
    }, [location.state, navigate, params.id]);

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container>
                <CustomButtom
                    style={{ margin: "20px 0" }}
                    onClick={() => navigate("/")}
                >
                    <HiArrowNarrowLeft size="18px" />
                    Back
                </CustomButtom>
                <DetailsComponent
                    country={country}
                    borderCountries={borderCountries}
                />
            </Container>
        );
    }
};
