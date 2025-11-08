import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home';
import { Results } from '../screens/Results';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
     <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen 
       name="Home"
       component={Home}
      />

      <Screen 
       name="Results"
       component={Results}
      />

     </Navigator>
    )
};
