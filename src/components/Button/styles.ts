import styled, {css} from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled> `
  border-radius: 22px;
  border: none;
  position: relative;
  width: 100%;
  min-width: 120px;
  padding: 2px 12px;
  color: #FFFFFF;
  text-align: center;
  font-size: 18px;
  background: #565656;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  ${({variant}) => variant !== "primary" && css `
    min-width: 167px;
    height: 33px;
    background: #E4105D;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
    
    $::after {
      content: "";
      position: absolute;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
      border: 1px solid #E4105D;
    }
  `}

  
`;