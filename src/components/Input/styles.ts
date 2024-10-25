import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  height: 30px;
  max-width: 275px;
  width: 100%;
  border-bottom: 1px solid #3B3450;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  color: #8647AD;
`;

export const InputText = styled.input`
  border: 0;
  height: 30px;
  background-color: transparent;
  color: #FFFFFF;
  flex: 1;
`;

export const ErrorText = styled.p`
  color: #E83F5B;
  font-size: 14px;
`;