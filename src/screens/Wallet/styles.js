import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const BalanceContainer = styled.View`
    margin: 8px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    font-size: 38px;
    color: #FFF;
    font-weight: 200;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    flex-direction: column;
    color: #FFF;
    font-size: 14px;
`;

export const Actions = styled.View `
    flex-direction: row;
    margin-top: 25px;
`;

export const Action = styled.TouchableOpacity `
     flex-direction: row;
     align-items: center;
     border: 1px rgba(255, 255, 255, .6);
     border-radius: 25px;
     width: 150px;
     height: 45px;
     justify-content: center;
     margin: 0 10px;
`;

export const ActionLabel = styled.Text `
    margin-left: 10px;
    color: #FFF;
`;

export const UseBalance = styled.View`
    background: #1C1C1E;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UsBalanceTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8E8E93;
    text-transform: uppercase;
    font-size: 12px;
`;

export const Card = styled.View`
    background: #1E232A;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;

export const CardInfo = styled.Text`
    font-size: 14px;
    color: rgba(255, 255, 255, .8);
    margin-top: 10px;
`;

export const Img = styled.Image`
   width: 60px;
   height: 60px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const AddLabel = styled.Text`
    color: #0DB060;
    margin-left: 8px;
    font-size: 16px;
    font-weight: bold;
`;

export const CaddingCont = styled.TouchableOpacity`
    
`;

export const CoddingPromo = styled.View`
    align-items: center;
    margin-top: 30px;
    flex-direction: row;
    justify-content: center;
`;

export const Codding = styled.Text`
    color: #0DB060;
    font-size: 14px;
    text-decoration: underline;
    margin-left: 8px;
`;

