import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import {
  PageWrapper,
  CompanyCard,
  Title,
  Description,
  ButtonControl,
  CompanyLink
} from "./styles";

function Samsung() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // const goToSamsungWebSite = () => {
  //   window.open("https://www.samsung.com", "_blank");
  // }

  return (
    <PageWrapper>
      <CompanyCard>
        <Title>Samsung</Title>
        <Description>
          Samsung is a global company that produces electronics, smartphones,
          TVs, home appliances and other digital devices.
        </Description>

        <CompanyLink href="www.samsung.com" target="blank">Samsung Website</CompanyLink>

        <ButtonControl>
            <Button onClick={goBack} name="Go back"/>
        </ButtonControl>

         {/* <ButtonControl>
            <Button onClick={goToSamsungWebSite} name="Visit website" />
        </ButtonControl> */}
      </CompanyCard>
    </PageWrapper>
  );
}

export default Samsung;
