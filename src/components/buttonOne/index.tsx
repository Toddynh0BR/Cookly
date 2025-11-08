import styled from "styled-components/native";

import { View } from "react-native";

const Container = styled.View`
height: fit-content;
width: 100%;
`

const Button = styled.TouchableOpacity<{ disabledOpacity?: boolean }>`
height: 45px;
width: 100%;

opacity: ${({ disabledOpacity }) => (disabledOpacity ? 0.6 : 1)};
background-color: ${(props)=> props.theme.main};
border-radius: 42px;

justify-content: center;
align-items: center;
`

const ButtonText = styled.Text`
font-family: 'lexend-Bold';
font-size: 16px;
color: ${(props)=> props.theme.background};
`

interface ButtonOneProps {
 text: string;
 loadingText?: string;
 bottom?: number;
 loading?: boolean;
 onPress: () => void;
}

export function ButtonOne({ text, bottom, loadingText='Carregando...', loading=false, onPress, ...rest }: ButtonOneProps) {
    return(
     <Container>
      <Button disabledOpacity={loading} disabled={loading} {...rest} onPress={onPress}>
       <ButtonText>{ loading ? loadingText : text}</ButtonText>   
      </Button>

      { bottom && <View style={{ height: bottom }}/> }
     </Container>
    )
}