import { useState } from "react";

import Feedback from "components/Feedback/Feedback";

import { Homework07pagewrapper } from "./styles"

function Homewwork_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <Homework07pagewrapper>
      <Feedback
        onDislike={onDislike}
        onLike={onLike}
        like={like}
        dislike={dislike}
        resetResults={resetResults}
      />
    </Homework07pagewrapper>
  );
}

export default Homewwork_07;
