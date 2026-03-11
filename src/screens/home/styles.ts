import { ClockIcon } from 'phosphor-react-native';
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
padding: 0 12px;
`

export const DRRecipesList = styled.FlatList`
height: 120px;
width: 100%;

margin-top: 12px;
`

export const DRRecipeBack = styled.ImageBackground`
height: 120px;
width: 120px;

justify-content: center;
align-items: center;
display: flex;

filter: blur(1);
`

export const DRRecipeCard = styled.TouchableOpacity`
height: 120px;
width: 120px;

justify-content: center;
align-items: center;
display: flex;

border-radius: 12px;
position: relative;
overflow: hidden;
margin-left: 5px;
margin-right: 5px;
`

export const DRRecipeName = styled.Text`
font-family: 'lexend-Bold';
font-size: 16px;
color: ${(props) => props.theme.text2};
text-align: center;

position: absolute;
`

export const PopularRecipes = styled.View`
height: fit-content;
width: 100%;

margin-top: 45px;
`

export const PRTitle = styled.Text`
font-family: 'lexend-Bold';
font-size: 22px;
color: ${(props) => props.theme.text1};
padding: 0 12px;
`

export const MoreText = styled.Text`
font-family: 'lexend-Bold';
font-size: 12px;
color: ${(props)=> props.theme.main};
padding: 5px 12px 0px;
`

export const PRRecipesList = styled.FlatList`
height: 1750px;
width: 100%;

margin-top: 12px;
`

export const PRRecipe = styled.TouchableOpacity`
height: 211px;
width: 175px;

flex-direction: column;
gap: 12px;
margin-left: 5px;
margin-right: 5px;
`

export const PRImage = styled.ImageBackground`
height: 175px;
width: 175px;

position: relative;
border-radius: 8px;
overflow: hidden;
`

export const PRTime = styled.View`
height: 30px;
width: 92px;

background-color: ${(props)=> props.theme.background};
position: absolute;
bottom: 0;
left: 0;

justify-content: center;
align-items: center;
flex-direction: row;
gap: 5px;

border-radius: 0 8px 0 0;
`

export const ClockI = styled(ClockIcon).attrs({
  size: 14,
})`
  color: ${(props)=> props.theme.text1};
`;

export const PRTimeText = styled.Text`
font-family: 'lexend-Bold';
font-size: 10px;
color: ${(props)=> props.theme.main};
`

export const PRText = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail",
})`
font-size: 'lexend';
color: ${(props)=> props.theme.text1};
font-size: 16px;
width: 145px
`

