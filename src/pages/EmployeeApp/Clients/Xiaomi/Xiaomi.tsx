import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  CompanyCard,
  Title,
  Description,
  ButtonControl,
  CompanyLink
} from "./styles";

import Button from "components/Button/Button";

function Xiaomi() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  //  const goToXiaomiWebSite = () => {
  //   window.open("https://www.xiaomi.com", "_blank");
  // }

  return (
    <PageWrapper>
      <CompanyCard>
        <Title>Xiaomi</Title>
        <Description>
          Xiaomi is a technology company known for smartphones, smart home
          devices and affordable consumer electronics.
        </Description>

        <CompanyLink href="www.xiaomi.com" target="blank">Xiaomi Website</CompanyLink>

        <ButtonControl>
          <Button onClick={goBack} name="Go back" />
        </ButtonControl>

         {/* <ButtonControl>
            <Button onClick={goToXiaomiWebSite} name="Visit website" />
        </ButtonControl> */}

      </CompanyCard>
    </PageWrapper>
  );
}

export default Xiaomi;
