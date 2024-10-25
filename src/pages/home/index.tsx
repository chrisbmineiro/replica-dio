import { useNavigate } from 'react-router-dom'
import React from 'react';

import Button from "../../components/Button";
import Header from "../../components/Header";
import banner from '../../assets/banner.png'

import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>implemente <br /></TitleHighlight>
                        o seu futuro global agora <br />
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores tutoriais.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
                </div>
                <div>
                    <img src={banner} alt="banner" />
                </div>
            </Container>
        </>
    );
};

export default Home;