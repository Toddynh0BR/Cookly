import * as S from "./styles";

import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import Icon from "../../assets/orange.png";

import { ButtonOne } from "../../components/buttonOne";
import { InputOne } from "../../components/inputOne";
import { TouchableOpacity, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { useState } from "react";

export function SignUp() {
    const navigate = useNavigation();

    const [loading, setLoading] = useState(false);

    const [password, setPassword] = useState('');
    const [email, setEmail]= useState('')
    const [name, setName] = useState('');
    
    function isEmail(value: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };

    async function HandleSignup() {
     if (!password.trim() || !email.trim() || !name.trim()) return Alert.alert('Atenção!', 'Preencha todos os campos.');
     if (!isEmail(email)) return Alert.alert('Atenção!', 'Digite um email válido');
     if (password.trim().length < 6) return Alert.alert('Atenção!', 'Senha deve ter no mínimo 6 caracteres');
     setLoading(true);
     try {
      const Response = await api.post('/user/local-signup', { name, email, password, level: '', check: 'checar'});

      if (Response.data.message == 'OK') {
             navigate.navigate('setLevel', { name: name, email: email, password: password });
      };
     }catch(error: any) {
      console.error(error)
      Alert.alert('Erro', error.response.data.message)
     } finally {
      setLoading(false)
     }
    };

    async function HandleSignInWith(provider: string) {
      // Implementar autenticação com provedores externos

      navigate.navigate('SetPassword' as never)
    };

    return(
     <S.Container>
      <S.Image source={Icon} />
      <S.TitleView>
       <S.Title>Bem vindo ao</S.Title>
       <S.BoldTitle> Cookly</S.BoldTitle>  
       <S.BoldExclamation>!</S.BoldExclamation>
      </S.TitleView>
 
      <InputOne
        label="Nome do usuário"
        placeholder="Digite seu nome de usuário"
        bottom={32}
        onChangeText={setName}
        value={name}
      />

      <InputOne
        label="Email"
        placeholder="Digite seu email"
        bottom={32}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
      />

      <InputOne
        label="Senha"
        placeholder="Digite sua senha"
        bottom={32}
        autoCorrect={false}
        password
        autoComplete='off'
        onChangeText={setPassword}
        value={password}
      />

      <ButtonOne
       text="Cadastrar"
       bottom={12}
       loading={loading}
       loadingText='Cadastrando...'
       onPress={() => HandleSignup()}
      />

      <S.SignUpTextView>
       <S.SignUpText>Já possui uma conta?</S.SignUpText>
       <TouchableOpacity onPress={()=> navigate.navigate('SignIn' as never)}>
        <S.SignUpBoldText> Entrar</S.SignUpBoldText>
       </TouchableOpacity>
      </S.SignUpTextView>

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
     </S.Container>   
    )
};