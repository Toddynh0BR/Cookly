import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;


align-items: center;

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

