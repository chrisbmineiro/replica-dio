import React from "react";
import Button from '../Button';
import logo from '../../assets/logo-dio.png'

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

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo DIO" />
                {autenticado ? (
                    <>
                        <SearchInputContainer>
                            <Input placeholder="Buscar..." />
                        </SearchInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/165342064?v=4" />
                ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  );
};

export default Header;