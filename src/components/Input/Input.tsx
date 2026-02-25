import {InputWrapper,InputLabel,StyledInput,ErrorText,} from "./styles";

import type { InputProps } from "./types";

function Input({
  id,
  name,
  label,
  placeholder,
  type = "text",
  disabled,
  error,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />

      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;
