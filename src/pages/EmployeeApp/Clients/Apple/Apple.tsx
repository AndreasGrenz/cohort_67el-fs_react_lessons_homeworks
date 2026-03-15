import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, CompanyCard, Title, Description, ButtonControl } from "./styles";

function Apple() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <CompanyCard>
        <Title>Apple</Title>
        <Description>
          Apple is a technology company that develops smartphones, laptops,
          tablets and software products.
        </Description>

        <ButtonControl>
          <Button onClick={goBack} name="Go back" />
        </ButtonControl>
      </CompanyCard>
    </PageWrapper>
  );
}

export default Apple;