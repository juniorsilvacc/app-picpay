import React from 'react';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import {Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance} from './styles';

import Suggestions from '../../components/Suggestions';
import Activeties from '../../components/Activeties';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home(){
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10C86E" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 200.000,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10C86E" />
                </Header> 
               

                <Suggestions />

                <Activeties />

               <Tips />

               <Banner />

            </Container>
        </Wrapper>
    );
}