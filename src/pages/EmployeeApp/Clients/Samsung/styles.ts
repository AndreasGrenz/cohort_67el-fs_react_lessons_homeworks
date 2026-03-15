import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const CompanyCard = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  text-align: center;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 20px;
  text-align: center;
`;

export const ButtonControl = styled.div`
  display: flex;
  justify-content: center;
`;