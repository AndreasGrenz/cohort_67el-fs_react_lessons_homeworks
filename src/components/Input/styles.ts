import styled from "@emotion/styled";

interface InputStyleProps {
  disabled?: boolean;
  error?: string;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const StyledInput = styled.input<InputStyleProps>`
  height: 50px;
  padding: 12px;
  border-radius: 4px;
  outline: none;

  border: 1px solid
    ${({ error }) => (error ? "red" : "#3f3f3f")};

  background-color: ${({ disabled }) =>
    disabled ? "#e0e0e0" : "white"};

  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "text"};

  &:disabled {
    pointer-events: none;
  }

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;