// Разместите на странице Input с label="Country", placeholder="Enter Country for searching uneversities", в который пользователь может
// ввести название страны для посика университетов
// Разместите на странице Button "Get Universities", по клику на которую, отправляется
// GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME
// Используйте для запросов axios
// Если в ответе на запрос пришли нормальные данные(запрос выполнен успешно), то разместите данные в стейте,
//  а затем отобразите на стрнице в виде каточек. Сохраняйте не более 15 обьектов в массиве в стейт
// При повторном нажатии на кнопку "Get Universities", выполните новый GET запрос
// на http://universities.hipolabs.com/search?country=COUNTRY_NAME и получите новые данные, и обновите стейт
// При получении ошибки, положите в отдельный стейт данные об ошибке с сообщением "Some Network Error".
// Отобразите ошибку на странице вместо карточек с университетами
// При получении пустого массива, Отобразите фразу "No Universities by your request" на странице вместо карточек с университетами или ошибки
// Стили на ваше усмотрение, контент тоже на ваше усмотрение
// Все нужно делать в компоненте Lesson_11

import { useState, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";

import {
  PageWrapper,
  Card,
  Title,
  FormContainer,
  Label,
  Input,
  Button,
  UniversitiesContainer,
  UniversityCard,
  UniversityName,
  UniversityText,
  UniversityLink,
  ErrorText,
  EmptyText,
} from "./styles";


function Lesson_11() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const getUniversities = async () => {

    setUniversities([]);
    setError(undefined);
    setIsLoading(true);
    setIsEmpty(false);

    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = response.data;
      if (data.length === 0) {
        setIsEmpty(true);
      } else {
        setUniversities(data.slice(0, 15));
      }
    } catch (error: any) {
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Universities Search</Title>
        <FormContainer>
          <Label>Country</Label>
          <Input
            placeholder="Enter Country for searching uneversities"
            value={country}
            onChange={handleCountryChange}
          />
          <Button disabled={isLoading} onClick={getUniversities}>Get Universities</Button>
        </FormContainer>

        {!!error && <ErrorText>{error}</ErrorText>}
        {!!isEmpty && (<EmptyText>No Universities by your request</EmptyText>)}
        {!!universities.length && 
        (<UniversitiesContainer> {universities.map((university) => (
              <UniversityCard key={v4()}>
                <UniversityName>{university.name}</UniversityName>
                <UniversityText>
                  <b>Country:</b> {university.country}
                </UniversityText>

                <UniversityText>
                  <b>Code:</b> {university.alpha_two_code}
                </UniversityText>

                <UniversityLink
                  href={university.web_pages[0]}
                  target="_blank"
                >
                  Go to website
                </UniversityLink>
              </UniversityCard>
            ))}
          </UniversitiesContainer>
        )}
      </Card>
    </PageWrapper>
  );
}

export default Lesson_11;