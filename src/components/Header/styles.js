import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  
  height: 47px;
  width: 100%;
  max-width: 80%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #565656;
  width: 100%;
  height: 100%;
`;

export const SearchInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #e5e5e5;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #ffff;
`;

export const Input = styled.input`
  border: none;
  color: #ffff;
  flex: 1;
  background: transparent;
`;
