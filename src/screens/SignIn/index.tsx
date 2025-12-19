import { useState, useEffect } from "react";
import * as S from "./styles";

import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import Icon from "../../assets/orange.png";

import { ButtonOne } from "../../components/buttonOne";
import { InputOne } from "../../components/inputOne";
import { TouchableOpacity, Alert, ActivityIndicator } from "react-native";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "../../hooks/themeProvider";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function SignIn() {
    const navigate = useNavigation();
    const { signIn } = useAuth();
    const { theme } = useTheme();

    const [loading, setLoading] = useState(false);
    const [loadingGoogle, setLGoogle] = useState(false);

    const [identification, setIdentification] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
     GoogleSignin.configure({
      webClientId: '535056287367-2059uffoqm9du16k9f53u86tlv8ea1j6.apps.googleusercontent.com', // o mesmo do Google Cloud
      offlineAccess: true,
     });
    }, []);

    async function HandleSignIn(){
      if (!identification || !password) {
        return Alert.alert("Atenção", "Informe todos os dados para continuar");
      };

      function isEmail(value: string) {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(value);
      };

      setLoading(true)

      try {
       let user

       if(isEmail(identification)) {
        const Response = await api.post('/user/local-signin', {identifier: identification, method: 'email', password});

        user = Response.data.User
       } else {
        const Response = await api.post('/user/local-signin', {identifier: identification, method: 'name', password});

        user = Response.data.User
       }
       
       await signIn({name: user.name, email: user.email, level: user.level || '', img: user.img || ''})
      } catch(error: any) {
         console.error(error)
         Alert.alert('Erro ao fazer login:', error.response.data.message);
      } finally {
        setLoading(false)
      };

    };

    async function HandleSignInWith(provider: string) {
     if (!provider) return;

     if (provider == 'google') {
      setLGoogle(true);
      try {
       const userInfo = await GoogleSignin.signIn();

       const id_token = userInfo.data.idToken;
      
       const tryLogin = await api.post("/user/signin", 
        { id_token, provider }, 
        {
         validateStatus: (status) => 
         {
          return status >= 200 && status < 500; // 404 entra aqui e não dispara catch
         }
        })
      
       if (tryLogin.status == 200) {
         const User = tryLogin.data.User;

         signIn(User.name, User.email, User.level, User.img || '');
       } else {
        navigate.navigate('SetPassword', { id_token, provider });
       }

      } catch (error) {
       console.log('Erro no login:', error);
       Alert.alert('Erro ao fazer login', error.response.data.message)
      } finally {
        setLGoogle(false);
      }

     } else {

     }

     
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
        label="Nome do usuário ou email"
        placeholder="Digite seu nome de usuário ou email"
        bottom={32}
        value={identification}
        onChangeText={setIdentification}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <InputOne
        label="Senha"
        placeholder="Digite sua senha"
        bottom={32}
        password 
        value={password}
        onChangeText={setPassword}
      />

      <ButtonOne
       text="Entrar"
       bottom={12}
       loading={loading}
       loadingText="Entrando..."
       onPress={() => HandleSignIn()}
      />

      <TouchableOpacity onPress={()=> navigate.navigate("ForgotPassword" as never)}>
       <S.ForgottenPasswordText>Esqueceu a senha?</S.ForgottenPasswordText>
      </TouchableOpacity>

      <S.SignUpTextView>
       <S.SignUpText>Não possui uma conta?</S.SignUpText>
       <TouchableOpacity onPress={()=> navigate.navigate('SignUp' as never)}>
        <S.SignUpBoldText> Cadastre-se</S.SignUpBoldText>
       </TouchableOpacity>
      </S.SignUpTextView>

      <S.Divider>
       <S.Line/>
       <S.OrText>ou</S.OrText>
       <S.Line/>
      </S.Divider>

      <S.OtherSignInView>
       <TouchableOpacity onPress={() => HandleSignInWith('google')}>
        { loadingGoogle ? <ActivityIndicator size={35} color={theme.main}/> : <S.SocialIconButton source={Google}/>}
       </TouchableOpacity>

       <TouchableOpacity onPress={() => HandleSignInWith('facebook')}>
        { loadingGoogle ? <ActivityIndicator size={35} color={theme.main}/> : <S.SocialIconButton source={Facebook}/>}
       </TouchableOpacity>
      </S.OtherSignInView>
     </S.Container>   
    )
};