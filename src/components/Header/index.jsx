import React from "react";
import Button from '../Button';

import {
    Container,
    Row,
    // eslint-disable-next-line no-unused-vars
    Column,
    Wrapper,
    Input,
    Menu,
    MenuRight,
    SearchInputContainer,
    UserPicture,
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src="/images/logo.png" alt="Logo" />
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
                <Menu>Sobre</Menu>
                <Menu>Contato</Menu>
            </Row>
            <Row>
                <img src="/images/logo.png" alt="logo da DIO" />
                <SearchInputContainer>
                    <Input placeholder="Pesquisar" />
                </SearchInputContainer>
                <MenuRight>
                    <UserPicture src="/images/user.png" />
                </MenuRight>
            </Row>
        </Container>
    </Wrapper>
  );
};

export default Header;