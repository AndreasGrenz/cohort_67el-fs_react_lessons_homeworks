import Message from "../Message/Message";

import { CardWrapper, UserName } from "./styles";

function Card() {
  return (
    <CardWrapper>
      <UserName>Андреас Гренц</UserName>
      <Message />
    </CardWrapper>
  );
}

export default Card;