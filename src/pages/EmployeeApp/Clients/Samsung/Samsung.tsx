import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import {
  PageWrapper,
  CompanyCard,
  Title,
  Description,
  ButtonControl,
} from "./styles";

function Samsung() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <CompanyCard>
        <Title>Samsung</Title>
        <Description>
          Samsung is a global company that produces electronics, smartphones,
          TVs, home appliances and other digital devices.
        </Description>
        <ButtonControl>
            <Button onClick={goBack} name="Go back"/>
        </ButtonControl>
      </CompanyCard>
    </PageWrapper>
  );
}

export default Samsung;
