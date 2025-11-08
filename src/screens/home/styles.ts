import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`

export const Title = styled.Text`
font-size: 40px;
color: ${(props) => props.theme.text1};
`