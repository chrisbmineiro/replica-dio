import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles'

const Login = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    const handleClickCreateAccount = () => {
        navigate('/cadastro')
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="Email" type="email" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button" />
                        </form>
                        <Row>
                            <EsqueciText>
                                <button type="button" onClick={handleClickCreateAccount}>Esqueci minha senha</button>
                            </EsqueciText>
                            <CriarText>
                                <button type="button" onClick={handleClickCreateAccount}>Criar conta</button>
                            </CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export default Login;