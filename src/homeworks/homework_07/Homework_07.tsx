import { useState } from "react";
import Feedback from "components/Feedback/Feedback";
import "./styles.css";


function Homework_07() {
  console.log("Homework_07 render");

  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const onReset = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework_07_wrapper">
      <h2>Feedback</h2>

      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        onReset={onReset}
      />
    </div>
  );
}

export default Homework_07;