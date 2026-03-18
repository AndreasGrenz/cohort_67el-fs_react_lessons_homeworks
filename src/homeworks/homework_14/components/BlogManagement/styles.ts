import styled from "@emotion/styled";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 700px;
  padding: 30px;
  border-radius: 16px;
  background-color: #d0d8df;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  outline: none;
`;