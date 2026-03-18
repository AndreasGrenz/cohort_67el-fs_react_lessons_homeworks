import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, CompanyCard, Title, Description, ButtonControl, CompanyLink } from "./styles";

function Apple() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // const goToAppleWebSite = () => {
  //   window.open("https://www.apple.com", "_blank");
  // }

  return (
    <PageWrapper>
      <CompanyCard>
        <Title>Apple</Title>
        <Description>
          Apple is a technology company that develops smartphones, laptops,
          tablets and software products.
        </Description>

        <CompanyLink href="https://www.apple.com" target="blank">Apple Website</CompanyLink>

        <ButtonControl>
          <Button onClick={goBack} name="Go back" />
        </ButtonControl>

        {/* <ButtonControl>
            <Button onClick={goToAppleWebSite} name="Visit website" />
        </ButtonControl> */}

      </CompanyCard>
    </PageWrapper>
  );
}

export default Apple;