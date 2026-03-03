import styled from "@emotion/styled";

export const PageWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 100px;
  gap: 20px;
`;

export const Controls = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const NotesList = styled.ul`
  padding-left: 18px;
  display: flex;
  flex-direction: column;
`;

export const NoteItem = styled.li`
  font-size: 20px;
  padding: 12px 16px;
  border-radius: 8px;
`;