import React from "react";
import Button from '../Button';

import {
    Container,
    Row,
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
                <img src="/src/assets/logo-dio.png" alt="Logo" />
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
                <Menu>Sobre</Menu>
                <Menu>Contato</Menu>
            </Row>
            <Row>
                <img src="/src/assets/logo-dio.png
                " alt="logo da DIO" />
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