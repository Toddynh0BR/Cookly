import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import Splash from '../../assets/splash-icon.png';

import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";

const LoadingPage = styled.View`
background-color: #f15821;
flex: 1;

justify-content: center;
align-items: center;
`

const LoadingImage = styled.Image`
height: 200px;
width: 200px;

`

export function Routes(){
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

    // if (loading){
    //  return (
    //   <LoadingPage>
    //    <LoadingImage source={Splash}/>
    //    <ActivityIndicator size="large" color="#fff" />
    //   </LoadingPage>
    //  )
    // };

    return(
     <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <NavigationContainer>
       {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
     </View>
    )
}