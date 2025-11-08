import * as S from "./styles";

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native';
import { useAuth } from "../../hooks/auth"; 

import { Header } from "../../components/header";

export function Home() {
    const navigation = useNavigation();//navegação entre telas
    const { logout } = useAuth();

    return(
     <S.Container>
      <Header
       asSearchBar={true}
      />
      <TouchableOpacity onPress={() => logout()}>
        <S.Title>Cookly</S.Title>
      </TouchableOpacity>

     </S.Container>
    )
};


