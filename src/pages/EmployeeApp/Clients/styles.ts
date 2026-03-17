import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  color: white;
`;

export const ClientsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ClientCard = styled.div`
  min-width: 180px;
  padding: 25px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClientLink = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: rgba(0, 10, 66, 0.9);

  &:hover {
    text-decoration: underline;
  }
`;