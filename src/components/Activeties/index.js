import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import {
    Container, 
    Header, 
    Title, 
    ViewTitle, 
    OptionTitle,
    TitleAll, 
    TitleMy, 
    Card, 
    CardHeader, 
    Description,
    Avatar,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Datails,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
 } from './styles';

import avatar from '../../images/avatar.png';

export default function Activeties() {
 return (
   <Container>
       <Header>
           <Title>Atividades</Title>

           <ViewTitle>
               <OptionTitle>
                    <TitleAll>Todos</TitleAll>
               </OptionTitle>

               <OptionTitle>
                    <TitleMy>Minhas</TitleMy>
               </OptionTitle>
           </ViewTitle>
       </Header>

       <Card>
           <CardHeader>
               <Avatar 
                source={avatar}
               />
               <Description>
                    <Bold>Você</Bold> pagou a <Bold>@juniorsilva.eng</Bold>
               </Description>
           </CardHeader>

            <CardBody>
                <UserName>Mohammed Wiz</UserName>
            </CardBody>

            <CardFooter>
                <Datails>
                    <Value>R$ 200.000,00</Value>
                    <Divider />
                    <Feather name="lock" size={14} color='#FFF' />
                    <Date>há 2 anos</Date>
                </Datails>

                <Actions>
                    <Option>
                        <MaterialCommunityIcons name="comment-outline" size={14} color='#FFF' />
                        <OptionLabel>0</OptionLabel>
                    </Option>

                    <Option>
                        <AntDesign name="hearto" size={14} color='#FFF' />
                        <OptionLabel>0</OptionLabel>
                    </Option>
                </Actions>
            </CardFooter>

       </Card>
   </Container>
  );
}