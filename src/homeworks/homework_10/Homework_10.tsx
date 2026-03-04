import { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "components/Button/Button";

import { PageWrapper, ContainerFacts, Card, Text, ErrorText } from "./styles";

function Homework_10() {
  const [joke, setJoke] = useState<string[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  const getRandomJoke = async () => {
    try {
      setIsLoading(true);
      setError(undefined);

      const response = await axios.get(RANDOM_JOKE_URL);

      const jokeText: string = `${response.data.setup} — ${response.data.punchline}`;

      setJoke((prevValue: string[]) => {
        return [...prevValue, jokeText];
      });
    } catch (error: any) {
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  const jokes = joke.map((oneJoke: string) => {
    return <Text key={v4()}>{oneJoke}</Text>;
  });

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          {!!joke && jokes}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>

        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </Card>
    </PageWrapper>
  );
}

export default Homework_10;