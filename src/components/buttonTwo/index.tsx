import styled from "styled-components/native";

import { View } from "react-native";

const Container = styled.View`
height: fit-content;
width: 100%;
`

const Button = styled.TouchableOpacity`
height: 45px;
width: 100%;

background-color: ${(props)=> props.theme.background};
border-color: ${(props)=> props.theme.main};
border-radius: 42px;
border-width: 1px;

justify-content: center;
align-items: center;
`

const ButtonText = styled.Text`
font-family: 'lexend-Bold';
font-size: 16px;
color: ${(props)=> props.theme.main};
`

interface ButtonTwoProps {
 text: string;
 bottom?: number;
 onPress: () => void;
}

export function ButtonTwo({ text, bottom, onPress, ...rest }: ButtonTwoProps) {
    return(
     <Container>
      <Button {...rest} onPress={onPress}>
       <ButtonText>{text}</ButtonText>   
      </Button>

      { bottom && <View style={{ height: bottom }}/> }
     </Container>
    )
}