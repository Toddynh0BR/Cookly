import * as S from "./styles";

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../../hooks/themeProvider';
import { useEffect, useState } from 'react';

import { CaretLeftIcon } from "phosphor-react-native";
import { TouchableOpacity, Alert } from "react-native";

import { ButtonOne } from "../../components/buttonOne";
import { InputOne } from "../../components/inputOne";

export function SetPassword() {
    const navigate = useNavigation();
    const { theme } = useTheme();
    const route = useRoute();
    
    const { id_token, provider } = route.params as { id_token: string, provider: string };
    const [loading, setLoading] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    async function handleChangePassword() {
     setLoading(true);

     if (!id_token || !provider) return Alert.alert('Erro', 'Informações necessarias não foram fornecidas!');

      try {
        if (newPassword.trim() === '' || newPassword.length < 6) {
         return Alert.alert("Atenção", "A senha deve ter no mínimo 6 caracteres.");
        };

        if (newPassword !== confirmPassword) {
         return Alert.alert("Atenção", "As senhas não coincidem. ");
        };

       navigate.navigate('setLevel', { name: '', email: '', password: newPassword.toString(), provider, id_token });
        
      } catch (error: any) {
        console.error(error)
        Alert.alert('Erro ao definir senha', error.response.data.message || error.message);
      } finally{
         setLoading(false);
      };
    
    };

    return(
 <S.Container>
         <S.TitleView>
         <CaretLeftIcon size={24} color={theme.background} />
          <S.Title>Criar Senha</S.Title>
         <CaretLeftIcon size={24} color={theme.background} />
         </S.TitleView>

         <InputOne
          label='Crie sua Senha'
          placeholder="Deve ter no mínimo 6 caracteres"
          bottom={12}
          value={newPassword}
          onChangeText={setNewPassword}
          autoCorrect={false}
          autoComplete='off'
          password
         />

         <InputOne
          label='Confirme sua Senha'
          placeholder="******"
          bottom={50}
          password
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCorrect={false}
          autoComplete='off'
         />

         <ButtonOne
          text="Confirmar"
          loading={loading}
          loadingText="Criando Sua Senha..."
          onPress={() => handleChangePassword()}
         />
        </S.Container>
  )
};