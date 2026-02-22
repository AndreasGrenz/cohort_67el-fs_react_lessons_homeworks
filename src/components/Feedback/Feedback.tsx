import Button from "components/Button/Button";
import "./styles.css";
import { type FeedbackProps } from "./types";

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  onReset,
}: FeedbackProps) {
  console.log("Feedback render");

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="button-with-count-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>

        <div className="button-with-count-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>

      <Button name="Reset Results" onClick={onReset} />
    </div>
  );
}

export default Feedback;