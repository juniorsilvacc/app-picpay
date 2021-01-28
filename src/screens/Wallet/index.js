import React, {useState} from 'react';
import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons';
import {Switch} from 'react-native';

import {
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title, 
    BalanceContainer, 
    Value, 
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UsBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardInfo,
    CardTitle,
    Img,
    AddButton,
    AddLabel,
    CaddingCont,
    CoddingPromo,
    Codding
} from './styles';

import creditCard from '../../images/credit-card.png'

export default function Wallet(){

    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance (){
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header 
            colors={useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}
            
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>

                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={24} color="#FFF" />
                        </EyeButton>

                    </BalanceContainer>

                        <Info>
                            Seu saldo está rendendo 100% do CDI
                        </Info>
                    
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#FFF" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#FFF" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>

                </HeaderContainer>
            </Header>

            <UseBalance>
                <UsBalanceTitle>
                    Usar saldo ao pagar
                </UsBalanceTitle>

                <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
                
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de pagamento
                </PaymentMethodsTitle>
            </PaymentMethods>

            <Card>
                <CardBody>
                    <CardDetails>
                        <CardTitle>
                            Cadastre seu cartão de crédito
                        </CardTitle>
                        <CardInfo>
                            Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                        </CardInfo>
                    </CardDetails>

                    <Img source={creditCard} resizeMode="contain" />
                </CardBody>

                <AddButton>
                    <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                    <AddLabel>
                        Adicionar cartão de crédito
                    </AddLabel>
                </AddButton>
            </Card>

            <CaddingCont>
                <CoddingPromo>
                    <MaterialCommunityIcons name="ticket-outline" size={24} color="#0DB060" />
                    <Codding>
                        Usar código promocional
                    </Codding>
                </CoddingPromo>
            </CaddingCont>
            

        </Wrapper>
    );
}