import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`

export const Title = styled.Text`
font-size: 40px;
color: ${(props) => props.theme.text1};
`

export const Content = styled.ScrollView`
height: 100%;
width: 100%;
`

export const DayRecipes = styled.View`
height: fit-content;
width: 100%;
`

export const DRTitle = styled.Text`
font-family: 'lexend-Medium';
font-size: 16px;
color: ${(props) => props.theme.text1};
`

export const DRRecipesList = styled.FlatList`
height: 120px;
width: 100%;

margin-top: 12px;
`

export const DRRecipeCard = styled.ImageBackground`
height: 120px;
width: 120px;

justify-content: center;
align-items: center;
display: flex;

border-radius: 12px;
filter: blur(1px);
`

export const DRRecipeName = styled.Text`
font-family: 'lexend-Bold';
font-size: 16px;
color: ${(props) => props.theme.text2};
`
