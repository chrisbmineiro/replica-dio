import React from "react";
import Button from '../Button';
import logo from '../../assets/logo-dio.png'
import { IoSearch } from "react-icons/io5";

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
import { useNavigate } from "react-router-dom";
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickCreateAccount = () => {
        navigate('/cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo DIO" />
                    {autenticado ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder="BUSCAR" />
                                <IoSearch size={24} />
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
                            <Button title="Entrar" onClick={handleClickSignIn} />
                            <Button title="Cadastrar" onClick={handleClickCreateAccount} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Header;