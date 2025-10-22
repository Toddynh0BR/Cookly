import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
     <View style={style.container}>
      <StatusBar       
       backgroundColor="transparent"
       translucent
      />
      <NavigationContainer>
       <AppRoutes/>
      </NavigationContainer>
     </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f15821'
  }
});


