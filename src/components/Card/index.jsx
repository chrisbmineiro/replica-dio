import React from 'react';
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { FiThumbsUp } from 'react-icons/fi';

export const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://avatars.githubusercontent.com/u/165342064?v=4" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/165342064?v=4" />
                    <div>
                        <h4>Christopher Barros</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h4>
                    <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card;