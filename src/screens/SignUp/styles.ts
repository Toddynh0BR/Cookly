import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;

justify-content: center;
align-items: center;

padding-left: 24px;
padding-right: 24px;
background-color: ${(props)=> props.theme.background};
`

export const Image = styled.Image`
height: 55px;
width: 55px;
`

export const TitleView = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 56px;
margin-top: 15px;
`

export const Title = styled.Text`
font-family: 'lexend-Medium';
color: ${(props)=> props.theme.text1};
font-size: 24px;
`

export const BoldTitle = styled.Text`
font-family: 'lexend-Ebold';
font-size: 24px;
color: ${(props)=> props.theme.main};
`

export const BoldExclamation = styled.Text`
font-family: 'lexend-Bold';
color: ${(props)=> props.theme.text1};
font-size: 24px;
`

export const ForgottenPasswordText = styled.Text`
font-family: 'lexend-Medium';
color: ${(props)=> props.theme.main};
font-size: 14px;


`

export const SignUpTextView = styled.View`
flex-direction: row;
align-items: center;

margin-top: 24px;
`

export const SignUpText = styled.Text`
font-family: 'lexend-Medium';
color: ${(props)=> props.theme.text1};
font-size: 14;
`

export const SignUpBoldText = styled.Text`
font-family: 'lexend-Sbold';
color: ${(props)=> props.theme.main};
font-size: 14px;
`

export const Divider = styled.View`
height: fit-content;
width: 100%;

flex-direction: row;
align-items: center;

margin-top: 24px;
`

export const Line = styled.View`
flex: 1;
height: 1px;

background-color: ${(props)=> props.theme.lines};
`

export const OrText = styled.Text`
font-family: 'lexend-Medium';
color: ${(props)=> props.theme.or};
font-size: 16px;

margin-right: 12px;
margin-left: 12px;

line-height: 16px;
`

export const OtherSignInView = styled.View`
align-items: center;
flex-direction: row;
gap: 20px;

margin-top: 20px;
`

export const SocialIconButton = styled.Image`
height: 35px;
width: 35px;
`