import React from 'react';
import {Wrapper, Header, HeaderContainer, Title} from './styles';

export default function Wallet(){
    return (
        <Wrapper>
            <Header colors={['#52E78C', '#1AB563']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                </HeaderContainer>
            </Header>
        </Wrapper>
    );
}