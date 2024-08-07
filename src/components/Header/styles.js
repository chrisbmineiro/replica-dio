import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 47px;
  width: 100%;
  max-width: 90%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #151515;
  width: 100%;
  height: 47px;
`;

export const SearchInputContainer = styled.div`
  width: 275px;
  height: 30px;
  background: #2D2D37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
`;

export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #FFFFFF;
`;

export const Input = styled.input`
  border: 0;
  color: #FFFFFF;
  flex: 1;
  background: transparent;

  &::placeholder {
    color: #FFFFFF;
  }
`;
