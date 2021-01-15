import React from 'react';
import {Container, Details, Img, Title, Description, SubTitle} from './styles';
import img13 from '../../images/13.png';

export default function Banner() {
 return (
   <Container>
       <Details>
           <Title>Cobre um amigo</Title>
           <Description>Matenha suas parceiras em dia, use o PicPay para fazer uma cobrança.</Description>
           <SubTitle>Cobrar agora</SubTitle>
       </Details>
       <Img
       source={img13}
       />
   </Container>
  );
}