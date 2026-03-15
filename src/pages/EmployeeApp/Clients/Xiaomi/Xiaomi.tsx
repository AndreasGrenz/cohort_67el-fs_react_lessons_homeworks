import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  CompanyCard,
  Title,
  Description,
  ButtonControl,
} from "./styles";

import Button from "components/Button/Button";

function Xiaomi() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <CompanyCard>
        <Title>Xiaomi</Title>
        <Description>
          Xiaomi is a technology company known for smartphones, smart home
          devices and affordable consumer electronics.
        </Description>

        <ButtonControl>
          <Button onClick={goBack} name="Go back" />
        </ButtonControl>
      </CompanyCard>
    </PageWrapper>
  );
}

export default Xiaomi;
