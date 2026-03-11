import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f4f7fb;
  box-sizing: border-box;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 30px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  font-size: 32px;
  text-align: center;
  color: #1f2937;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 14px;
  border: none;
  border-radius: 10px;
  background-color: #3b82f6;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  margin: 20px 0 0;
  text-align: center;
  font-size: 18px;
  color: #dc2626;
  font-weight: 600;
`;

export const EmptyText = styled.p`
  margin: 20px 0 0;
  text-align: center;
  font-size: 18px;
  color: #475569;
  font-weight: 500;
`;

export const UniversitiesContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const UniversityCard = styled.div`
  width: 280px;
  padding: 18px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
`;

export const UniversityName = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
  color: #111827;
`;

export const UniversityText = styled.p`
  margin: 0 0 10px;
  font-size: 15px;
  color: #374151;
`;

export const UniversityLink = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;