import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { Homework08Wrapper, Section, Title } from "./styles";

function Homework_08() {
  return (
    <Homework08Wrapper>
      <Section>
        <Title>Buttons</Title>

        <Button name="Default" />
        <Button isRed name="Red" />
        <Button disabled name="Disabled" />
        <Button isRed disabled name="Red Disabled" />
      </Section>

      <Section>
        <Title>Inputs</Title>

        <Input
          id="input1"
          name="input1"
          label="Default Input"
          placeholder="Type text"
        />

        <Input
          id="input2"
          name="input2"
          label="Disabled Input"
          placeholder="Disabled"
          disabled
        />

        <Input
          id="input3"
          name="input3"
          label="Error Input"
          placeholder="With error"
          error="Some error"
        />
      </Section>
    </Homework08Wrapper>
  );
}

export default Homework_08;
