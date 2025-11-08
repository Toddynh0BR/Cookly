import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

import { ThemeProvider } from './src/hooks/themeProvider';
import { AuthProvider } from "./src/hooks/auth";//provedor de acesso ao app

import { View, StyleSheet, Image, ActivityIndicator, useColorScheme } from 'react-native';
import { useTheme } from './src/hooks/themeProvider';
import { Routes } from './src/routes';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'lexend-Ebold': require('./assets/fonts/Lexend-ExtraBold.ttf'),
    'lexend-Regular': require('./assets/fonts/Lexend-Regular.ttf'),
    'lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
    'lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'lexend-Sbold': require('./assets/fonts/Lexend-SemiBold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [theme, setTheme] = useState(null);
   const colorScheme = useColorScheme();

  useEffect(() => {
    async function SearchTheme() {
      const Theme = await AsyncStorage.getItem('selectedTheme');

      if (Theme == null) {
        AsyncStorage.setItem('selectedTheme', colorScheme)
      };

      setTheme(Theme);
    };
   
    const loadResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); 
        await fetchFonts(); 
      } catch (error) {
        console.warn(error); 
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync(); 
      }
    };

    SearchTheme();
    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null; 
  };

  if (theme == null) {
    return null
  };

  return (
   <SafeAreaView style={{flex: 1, backgroundColor: theme === 'light' ? '#f2f2f2' : '#1A1A1A'}}>
     <ThemeProvider>
      <StatusBar       
       backgroundColor="transparent"
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
     </ThemeProvider>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


