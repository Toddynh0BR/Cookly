import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;


align-items: center;

padding-top: 50px;
padding-left: 24px;
padding-right: 24px;
background-color: ${(props)=> props.theme.background};
`

export const TitleView = styled.View`
width: 100%;

justify-content: space-between;
flex-direction: row;
align-items: center;

margin-bottom: 100px;
`

export const Title = styled.Text`
font-family: 'lexend-Sbold';
color: ${(props)=> props.theme.text1};
font-size: 18px;
`

export const Label = styled.Text`
font-family: 'lexend-Bold';
font-size: 16px;
color: ${(props)=> props.theme.text1};

margin-bottom: 12px;
`

export const Goback = styled.Text`
font-family: 'lexend-Medium';
color: ${(props)=> props.theme.or};
font-size: 16px;

margin-bottom: 30px;
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

export const HasAccountText = styled.Text`
font-family: 'lexend-Regular';
color: ${(props)=> props.theme.or};
font-size: 14px;

margin-top: 40px;
margin-bottom: 16px;
`

export const ResendCodeView = styled.View`
flex-direction: row;
align-items: center;

margin-top: 12px;
margin-bottom: 30px;
`

export const ResendCodeText = styled.Text`
font-family: 'lexend-Medium';
color: ${(props)=> props.theme.or};
font-size: 14px;
`

export const ResendCodeBold = styled.Text`
font-family: 'lexend-Sbold';
color: ${(props)=> props.theme.main};
font-size: 14px;
`