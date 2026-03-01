import Button from "components/Button/Button";
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCount,
  Count,
} from "./styles";

import { type FeedbackProps } from "./types";

function Feedback({
  like,
  dislike,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCount>
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </ButtonWithCount>
        <ButtonWithCount>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCount>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
