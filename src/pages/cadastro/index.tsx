import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import React from 'react';

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { Container, Title, Column, ContaText, InfoText, SubtitleLogin, TitleLogin, Wrapper } from './styles'

const Cadastro = () => {
    const navigate = useNavigate()

    const handleClickCreateAccount = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        Aula prática de programação, com a EducaWeb você encontra os melhores tutoriais de programação do mercado.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="Nome completo" type="text" leftIcon={<MdPerson />} name={"icone"} />
                            <Input placeholder="E-mail" type="email" leftIcon={<MdEmail />} name={"email"} />
                            <Input placeholder="Password" type="password" leftIcon={<MdLock />} name={"senha"} />
                            <Button title="Criar minha conta" variant="secondary" onClick={handleClickCreateAccount} type="button" />
                        </form>
                        <Column>
                            <InfoText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</InfoText>
                            <ContaText>Já tenho conta. <button onClick={handleClickCreateAccount}><span>Fazer login</span></button></ContaText>
                        </Column>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export default Cadastro;