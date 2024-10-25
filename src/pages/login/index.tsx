import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from '../../services/api'

import { MdEmail, MdLock } from "react-icons/md";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";
import { IFormData } from './types';

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>({
    reValidateMode: "onChange",
    mode: "onChange",
  });
  
  const onSubmit = async ( formData: IFormData) => {
    try{
      const { data } = await api.get(`users?email${formData.email}&senha=${formData.password}`)
      if (data.length && data[0].id){
        navigate("/feed");
        return
      }

      alert("Email ou senha invalidos")

    } catch (error) {
      console.log(error)
    }
  };

  const handleClickCreateAccount = (): void => {
    navigate("/cadastro");
  };

  function handleClickSignIn(): void {
    navigate("/feed");
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Aula prática de programação, com a EducaWeb você encontra os
            melhores tutoriais de programação do mercado.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="email"
                errorMessage={errors.email?.message}
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                control={control}
                name="password"
                errorMessage={errors.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>
                <button type="button" onClick={handleClickCreateAccount}>
                  Esqueci minha senha
                </button>
              </EsqueciText>
              <CriarText>
                <button type="button" onClick={handleClickCreateAccount}>
                  Criar conta
                </button>
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
