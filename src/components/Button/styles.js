import styled, {css} from "styled-components";

export const ButtonContainer = styled.div `
  border-radius: 22px;
  position: relative;
  width: 100%;
  min-width: 120px;

  padding: 2px 12px;
  color: white;
  background-color: #565656;

  ${({variant}) => variant !== "primary" && css `
    min-width: 167px;
    height: 33px;

    background-color: #E41050;
    
    $::after {
      content: "";
      position: absolute;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
      border: 2px solid #E41050;
    }
  `}
`;