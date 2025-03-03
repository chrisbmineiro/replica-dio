import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 60px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title =  styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  font-family: 'Open Sans';
  font-style: normal;
`;

export const TitleLogin =  styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 44px;
  font-family: 'Open Sans';
  font-style: normal;
`;

export const SubtitleLogin =  styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 35px;
  line-height: 25px;
  font-family: 'Open Sans';
  font-style: normal;
`;
export const InfoText =  styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  font-family: 'Open Sans';
  font-style: normal;
  color: #FFFFFF;
  margin-top: 27px;
  margin-bottom: 11px;
`;
export const ContaText =  styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  font-family: 'Open Sans';
  font-style: normal;
  color: #FFFFFF;

  button {
    background: transparent;
    border: none;
    color: #23DD7A;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    font-family: 'Open Sans';
    font-style: normal;
    cursor: pointer;
  }
`;

