import * as S from "./styles";

import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/themeProvider';
import { useEffect, useState } from 'react';

import { CaretLeftIcon } from "phosphor-react-native";
import { TouchableOpacity, Alert } from "react-native";

import { ButtonOne } from "../../components/buttonOne";
import { InputOne } from "../../components/inputOne";

export function SetPassword() {
    const navigate = useNavigation();
    const { theme } = useTheme();

    const [loading, setLoading] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    async function handleChangePassword() {
     if (newPassword.trim() === '' || newPassword.length < 6) {
         return Alert.alert("Atenção", "A nova senha deve ter no mínimo 6 caracteres.");
     };

     if (newPassword !== confirmPassword) {
        return Alert.alert("Atenção", "As senhas não coincidem. ");
     };
     setLoading(true);
        // Lógica para alterar a senha

     setLoading(false);
     navigate.navigate('SignIn' as never);
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