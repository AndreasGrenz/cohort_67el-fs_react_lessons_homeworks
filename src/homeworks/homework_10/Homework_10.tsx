// импорт React хуков
import { useState, useEffect } from "react";

// библиотека для HTTP запросов
import axios from "axios";

// наш компонент кнопки
import Button from "components/Button/Button";

// адрес API для случайной шутки
import { RANDOM_JOKE_URL } from "./types";

// стилизованные компоненты
import { PageWrapper, Text, JokeContainer, Card, ErrorText } from "./styles";

function Homework_10() {

  // state для текста шутки
  const [joke, setJoke] = useState<undefined | string>(undefined);

  // state для ошибки
  const [error, setError] = useState<undefined | string>(undefined);

  // state для загрузки
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // функция запроса шутки
  const getJoke = async () => {

    // очищаем предыдущую шутку
    setJoke(undefined);

    // очищаем предыдущую ошибку
    setError(undefined);

    // включаем режим загрузки
    setIsLoading(true);

    try {

      // отправляем GET запрос на API
      const response = await axios.get(RANDOM_JOKE_URL);

      // получаем данные ответа
      const data = response.data;

      // сохраняем шутку в state
      setJoke(`${data.setup} ${data.punchline}`);

    } catch (error: any) {

      // если произошла ошибка — сохраняем её
      setError(error.message);

    } finally {

      // выключаем загрузку (выполняется всегда)
      setIsLoading(false);

    }
  };

  // useEffect выполняется один раз при загрузке компонента
  useEffect(() => {
    getJoke(); // получаем первую шутку
  }, []);

  return (
    <PageWrapper>
      <Card>

        <JokeContainer>

          {/* показываем шутку если она есть */}
          {!!joke && <Text>{joke}</Text>}

          {/* показываем ошибку если она есть */}
          {!!error && <ErrorText>{error}</ErrorText>}

        </JokeContainer>

        {/* кнопка для получения новой шутки */}
        <Button
          disabled={isLoading} // блокируем кнопку во время загрузки
          name="Get new joke"
          onClick={getJoke} // при клике вызываем функцию
        />

      </Card>
    </PageWrapper>
  );
}

// экспорт компонента
export default Homework_10;
