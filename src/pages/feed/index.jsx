import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Header from "../../components/Header";

import { Container } from './styles';

const Feed = () => {
    return (
        <>
            <Header />
            <Container>
                <Card />
                <UserInfo percentual={30} nome="Pepete" imagem="https://avatars.githubusercontent.com/u/165342064?v=4" />
            </Container>
        </>
    );
};

export default Feed;