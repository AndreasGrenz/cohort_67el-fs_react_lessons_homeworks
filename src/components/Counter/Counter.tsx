import Button from "components/Button/Button";
import { CounterProps } from "./types";
import { Counterwrapper, Buttoncontrol, Count } from "./styles";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    < Counterwrapper>
      <Buttoncontrol>
        <Button name="-" onClick={onMinus} />
      </Buttoncontrol>

      <Count>{count}</Count>
      
      <Buttoncontrol>
        <Button name="+" onClick={onPlus} />
      </Buttoncontrol>
    </ Counterwrapper>
  );
}

export default Counter;

