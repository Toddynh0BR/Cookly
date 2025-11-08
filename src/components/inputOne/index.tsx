import styled from "styled-components/native";

import { EyeIcon, EyeClosedIcon } from "phosphor-react-native";
import { View } from 'react-native';
import { useState } from "react";
import { useTheme } from '../../hooks/themeProvider'

const InputContainer = styled.View`
height: fit-content;
width: 100%;

align-items: left;
`

const PasswordContainer = styled.View`
height: fit-content;
width: 100%;

justify-content: space-between;
flex-direction: row;
align-items: center;

border-color: ${(props) => props.theme.main};
border-radius: 8px;
border-width: 1px;
`

const EyesButton = styled.TouchableOpacity`
height: 24px;

margin-right: 12px;
margin-left: 8px;
`

const Label = styled.Text`
font-family: 'lexend-Bold';
font-size: 16px;
color: ${(props) => props.theme.text1};

margin-bottom: 12px;
`

const TextInput = styled.TextInput`
flex: 1;
height: 45px;

font-family: 'lexend-Regular';
color: ${(props) => props.theme.text1};
font-size: 14px;

outline: none;
padding-left: 12px;
padding-top: 12px;
`

interface InputOneProps {
 label: string;
 placeholder: string;
 password?: boolean;
 bottom?: number;
}

export function InputOne({ label, placeholder, bottom, password=false, ...rest }: InputOneProps) {
    const [hidePassword, setHidePassword] = useState(false);
    const { theme } = useTheme();

    return(
     <InputContainer>
      { label && <Label>{label}</Label>}
      <PasswordContainer>
        <TextInput placeholderTextColor={theme.or} {...rest} placeholder={placeholder} secureTextEntry={hidePassword}/>
        { password && 
        <EyesButton onPress={() => setHidePassword(!hidePassword)}>
        { hidePassword ?
        <EyeClosedIcon size={24} color={theme.main}/>
        :
         <EyeIcon size={24} color={theme.main}/>
        
         
        }
        </EyesButton>
        }
      </PasswordContainer>
      { bottom && <View style={{ height: bottom }}/> }
     </InputContainer>
    )
}