import * as S from "./styles";

import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/themeProvider';
import { useEffect, useState } from 'react';
import { api } from "../../services/api";

import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";

import { CaretLeftIcon } from "phosphor-react-native";
import { TouchableOpacity, Alert } from "react-native";

import { ButtonOne } from "../../components/buttonOne";
import { ButtonTwo } from "../../components/buttonTwo";
import { InputOne } from "../../components/inputOne";
import { OtpInput } from "react-native-otp-entry";

export function ForgotPassword() {
    const navigate = useNavigation();
    const { theme } = useTheme();

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [stage, setStage] = useState(1); // 1: Enviar código, 2: Verificar código, 3: Alterar senha
    const [code, setCode] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function handleSendCode() {
     function isEmail(value: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
     };

     if (email.trim() === '' || !isEmail(email)) return Alert.alert("Atenção", "Por favor, insira um email válido.");

     setLoading(true)
     try {
      const Response = await api.post('/user/forgot', { email });
   
      console.log(Response.status);
      setStage(2);
     }catch(error: any) {
      console.error(error)
      Alert.alert('Erro ao enviar código', error.response.data.message);

     }finally {
      setLoading(false)
     }
     
    };

    async function handleVerifyCode() {
     if (code.trim() === '' || code.length < 5) return Alert.alert("Atenção", "Por favor, insira um código válido.");
     
     setLoading(true);
     try {
      const ResponseCheck = await api.post('/user/reset', { code, newPassword: '', check: 'checar', email: '' })

      if (ResponseCheck.status && ResponseCheck.status == 200) return setStage(3);

     } catch(error: any){
      console.error(error)
      Alert.alert('Erro', error.response.data.message)
     } finally{
      setLoading(false)
     }
     
    };

    async function handleChangePassword() {
     if (newPassword.trim() === '' || newPassword.length < 6) {
         return Alert.alert("Atenção", "A nova senha deve ter no mínimo 6 caracteres.");
     };

     if (newPassword !== confirmPassword) {
        return Alert.alert("Atenção", "As senhas não coincidem. ");
     };
     setLoading(true);
     try {
      const Response= await api.post('/user/reset', { code, newPassword, check: 'nao', email });

      if (Response.status && Response.status == 200) {
        Alert.alert('Sucesso!', 'Sua senha foi alterada')
        navigate.navigate('SignIn' as never);
      }
     } catch(error: any) {
       console.error(error)
       return Alert.alert('Erro ao atualizar senha', error.response.data.message)
     } finally {
       setLoading(false);
     } 

     
     navigate.navigate('SignIn' as never);
    };

    async function HandleSignInWith(provider: string) {
      // Implementar autenticação com provedores externos

      navigate.navigate('SetPassword' as never)
    };

    return(
        stage === 1 ?
        <S.Container>
      <S.TitleView>
       <TouchableOpacity onPress={()=> navigate.goBack()}>
        <CaretLeftIcon weight="bold" size={24} color={theme.text1} />
       </TouchableOpacity>

       <S.Title>Esqueceu sua Senha</S.Title>

       <CaretLeftIcon size={24} color={theme.background} />
      </S.TitleView>

      <S.Label>
       Digite seu email cadastrado
      </S.Label>

      <InputOne
       label=''
       placeholder="cookly007@gmail.com"
       bottom={12}
       value={email}
       onChangeText={setEmail}
       autoCapitalize="none"
       keyboardType="email-address"
       autoCorrect={false}
      />

       <TouchableOpacity onPress={() => navigate.navigate('SignIn' as never)}>
        <S.Goback>Voltar para login</S.Goback>
       </TouchableOpacity>

       <ButtonOne 
        text='Enviar'
        loading={loading}
        loadingText="Enviando..."
        onPress={() => handleSendCode()}
        bottom={20}
       />
     
      <S.Divider>
       <S.Line/>
       <S.OrText>ou</S.OrText>
       <S.Line/>
      </S.Divider>

      <S.OtherSignInView>
       <TouchableOpacity onPress={() => HandleSignInWith('google')}>
        <S.SocialIconButton source={Google}/>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => HandleSignInWith('facebook')}>
        <S.SocialIconButton source={Facebook}/>
       </TouchableOpacity>
      </S.OtherSignInView>

         <S.HasAccountText>
          Não tem uma conta?
         </S.HasAccountText>

         <ButtonTwo
          text='Cadastrar-se'
          onPress={() => navigate.navigate('SignUp' as never)}
         />
        </S.Container>
        :
        stage === 2 ?
        <S.Container>
       <S.TitleView>
       <TouchableOpacity onPress={()=> {
        setStage(1);
        setEmail('');
       }}>
        <CaretLeftIcon weight="bold" size={24} color={theme.text1} />
       </TouchableOpacity>

       <S.Title>Verificação</S.Title>

       

       <CaretLeftIcon size={24} color={theme.background} />
       </S.TitleView>

        <S.Label>
        Digite o código enviado para seu email
        </S.Label>

        <OtpInput
        numberOfDigits={5}
        focusColor={theme.main}
        autoFocus
        type="numeric"
        theme={{
          containerStyle: {
            width: "80%",
            justifyContent: "space-between",
          },
          pinCodeContainerStyle: {
            borderColor: "#ccc",
            borderWidth: 2,
            borderRadius: 12,
          },
          pinCodeTextStyle: {
            color: theme.text1,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: 'lexend-Bold',
          },
        }}
         onTextChange={setCode}
        />

        <S.ResendCodeView>
            <S.ResendCodeText>Não recebeu o código?</S.ResendCodeText>
            <TouchableOpacity>
                <S.ResendCodeBold> Reenviar código</S.ResendCodeBold>
            </TouchableOpacity>
        </S.ResendCodeView>

       <ButtonOne 
        text='Enviar código'
        loadingText="Enviando código"
        loading={loading}
        onPress={() => handleVerifyCode()}
        bottom={20}
       />
     

         <S.Divider>
       <S.Line/>
       <S.OrText>ou</S.OrText>
       <S.Line/>
      </S.Divider>

      <S.OtherSignInView>
       <TouchableOpacity onPress={() => HandleSignInWith('google')}>
        <S.SocialIconButton source={Google}/>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => HandleSignInWith('facebook')}>
        <S.SocialIconButton source={Facebook}/>
       </TouchableOpacity>
      </S.OtherSignInView>

         <S.HasAccountText>
          Não tem uma conta?
         </S.HasAccountText>

         <ButtonTwo
          text='Cadastrar-se'
          onPress={() => navigate.navigate('SignUp' as never)}
         />

        </S.Container>
        :
        <S.Container>
         <S.TitleView>
         <CaretLeftIcon size={24} color={theme.background} />
          <S.Title>Nova Senha</S.Title>
         <CaretLeftIcon size={24} color={theme.background} />
         </S.TitleView>

         <InputOne
          label='Nova Senha'
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
          loadingText="Alterando Sua Senha..."
          onPress={() => handleChangePassword()}
         />
        </S.Container>
    )
};