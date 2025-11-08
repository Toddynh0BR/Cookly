import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../themes';
import { useColorScheme } from 'react-native'

const ThemeContext = createContext();

interface ThemeProps {
  children: any
}

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(themes.Light);
  const userTheme = useColorScheme();
  
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('selectedTheme');

      if (savedTheme == null) {
        setTheme(theme[userTheme]);
      };
      if (savedTheme && themes[savedTheme]) {
        setTheme(themes[savedTheme]);
      };
    };
    loadTheme();
  }, []);

  const changeTheme = async (selectedTheme: any) => {
    if (themes[selectedTheme]) {
      setTheme(themes[selectedTheme]);
      await AsyncStorage.setItem('selectedTheme', selectedTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


