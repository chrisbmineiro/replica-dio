import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
`;

export const Title =  styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  width: 320px;

  margin-bottom: 20px;
  line-height: 44px;
  font-family: 'Open Suns';
  font-style: normal;
`;

export const TitleHighlight = styled.span`
  color: #E4105D;
`;

export const TextContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #D9D9D9;
  width: 420px;

  margin-bottom: 20px;
  line-height: 22px;
  font-family: 'Open Suns';
  font-style: normal;
`;