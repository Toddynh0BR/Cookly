import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from '../../hooks/themeProvider';
import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { GearIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import Icon from "../../assets/orange.png";

const Container = styled.View`
width: 100%;

padding-right: 12px;
padding-left: 12px;

margin-bottom: 24px;
`

const HeaderTop = styled.View`
height: 44px;

flex-direction: row;
align-items: center;
padding-right: 8px;
`

const IconImage = styled.Image`
height: 24px;
width: 24px;
`

const TitleView = styled.TouchableOpacity`
justify-content: center;
align-items: left;
flex: 1;

margin-left: 12px;
`

const Title = styled.Text`
font-family: 'lexend-Ebold';
font-size: 20px;
color: ${(props)=> props.theme.main};


`

const InputView = styled.View`
height: 45px;
width: 100%;

flex-direction: row;
align-items: center;

margin-top: 12px;

background-color: ${(props)=> props.theme.search};
border-radius: 45px;
padding-left: 16px;
`

const Input = styled.TextInput`
flex: 1;
height: 100%;

background-color: none;
border: none;

font-family: 'lexend-Medium';
color: ${(props)=> props.theme.text1};

`

const IconView = styled.TouchableOpacity`
height: 45px;
width: 45px;

margin-left: 12px;

background-color: ${(props)=> props.theme.main};
border-radius: 45px;

justify-content: center;
align-items: center;
`

interface HeaderProps {
 asSearchBar: Boolean
}

export function Header({ asSearchBar=true, ...rest }: HeaderProps) {
       const navigate = useNavigation();
       const { theme } = useTheme();

       const [query, setQuery] = useState('');

       async function HandleSearch() {
        if (query.trim() == '') return;

       navigate.navigate('Results', { query: query })
       };

       return (
        <Container>
         <HeaderTop>
          <IconImage
           source={Icon}
          />

          <TitleView onPress={()=> navigate.navigate('Home' as never)}>
           <Title>
            Cookly
           </Title>
          </TitleView>

          <TouchableOpacity onPress={()=> navigate.navigate('Config' as never)}>
           <GearIcon weight="bold" size={30} color={theme.text1}/>
          </TouchableOpacity>
         </HeaderTop>

         { asSearchBar ? 
          <InputView>
           <Input 
            {...rest}
            value={query}
            onChangeText={setQuery}
            placeholder="Pesquisar receitas" 
            placeholderTextColor={theme.or} 
           />

           <IconView onPress={()=> HandleSearch()}>
             <MagnifyingGlassIcon size={24} color={theme.background}/>
           </IconView>
          </InputView>
         :
          null
         }
        </Container>
       )
}