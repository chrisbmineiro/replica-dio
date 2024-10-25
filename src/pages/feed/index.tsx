import React from 'react';
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Header from "../../components/Header";

import { Container, Title, TitleHighlight, Column } from './styles';

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight>Ranking da semana</TitleHighlight>
                    <UserInfo percentual={50} nome="Severina Barros" imagem="https://avatars.githubusercontent.com/u/165342064?v=4" />
                    <UserInfo percentual={40} nome="Manoel Junior" imagem="https://avatars.githubusercontent.com/u/165342064?v=4" />
                    <UserInfo percentual={30} nome="Christopher Barros" imagem="https://avatars.githubusercontent.com/u/165342064?v=4" />
                    <UserInfo percentual={80} nome="Pepete" imagem="https://avatars.githubusercontent.com/u/165342064?v=4" />
                </Column>
            </Container>
        </>
    );
};

export default Feed;