import * as S from "./styles";

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Splash from '../../../assets/splash-icon.png';

export function Home() {
    const [loading, setLoading] = useState(true);//Constante de carregamento
    const navigation = useNavigation();//navegação entre telas

    useEffect(()=> {
     async function CheckLogin(){
      const User = await AsyncStorage.getItem('@cookly:user');

      if (!User) {
       navigation.navigate('SignIn' as never);
      } else {
       setLoading(false);
      }
     };

     CheckLogin();
    },[]);

        
    if (loading){
      return (
       <S.LoadingPage>
        <S.LoadingImage source={Splash}/>
        <ActivityIndicator size="large" color="#fff" />
       </S.LoadingPage>
      )
    }

    return(
     <S.Container>
      <S.Title>Cookly</S.Title>
     </S.Container>
    )
};


