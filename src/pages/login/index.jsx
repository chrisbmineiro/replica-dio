import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles'

const Login = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/feed')
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
                        <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                        <form>
                            <Input placeholder="Email" type="email" />
                            <Input placeholder="Senha" type="password" />
                            <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button" />
                        </form>
                        <Row>
                            <CriarText>
                                Não tem uma conta? Crie uma conta
                            </CriarText>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export default Login;