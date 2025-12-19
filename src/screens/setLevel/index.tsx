import * as S from "./styles";

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../../hooks/themeProvider';
import { useEffect, useState } from 'react';
import { api } from "../../services/api";

import { CaretLeftIcon } from "phosphor-react-native";
import { TouchableOpacity, Alert } from "react-native";

import { InputSelect } from "../../components/inputSelect";
import { ButtonOne } from "../../components/buttonOne";

import { useAuth } from "../../hooks/auth";

export function SetLevel() {
    const navigate = useNavigation();
    const { theme } = useTheme();
    const { signIn } = useAuth();
    const route = useRoute();

    const { name, email, password, provider, id_token } = route.params as 
    { name: string, email: string, password: string, provider: string, id_token: string };
    const [loading, setLoading] = useState(false);

    const [level, setLevel] = useState('');

    async function handleSignup() {
     if (!level) return
     setLoading(true);
      
     if (!provider) {
           try {
      const Response = await api.post('/user/local-signup', { name, email, password, level, check: '' });

      signIn(name, email, level, '');
     }catch(error: any) {
       console.error(error)
       Alert.alert('Erro', error.response.data.message)
     } finally {
      setLoading(false);
     }
     }else {
      try {
       const Response = await api.post('/user/signup', { id_token, provider, password, level });

       const User = Response.data.User;

      signIn(User.name, User.email, User.level, User.img);
     }catch(error: any) {
       console.error(error)
       Alert.alert('Erro', error.response.data.message)
     } finally {
      setLoading(false);
     }
     }

    };

    const data = [
    { label: "Iniciante", value: "Iniciante" },
    { label: "Intermediário", value: "Intermediário" },
    { label: "Avançado", value: "Avançado" },
    { label: "Master Chef", value: "Master Chef" },
    ];

    return(
 <S.Container>
         <S.TitleView>
         <CaretLeftIcon size={24} color={theme.background} />
          <S.Title>Qual seu nível na cozinha</S.Title>
         <CaretLeftIcon size={24} color={theme.background} />
         </S.TitleView>

<InputSelect
 label="Selecione seu nível"
 data={data}
 bottom={28}
 value={level}
 onChange={item => {setLevel(item.value)}}
/>

         <ButtonOne
          text="Confirmar"
          loading={loading}
          loadingText="Criando usuário..."
          onPress={() => handleSignup()}
         />
        </S.Container>
  )
};