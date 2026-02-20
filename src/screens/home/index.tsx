import * as S from "./styles";

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { api } from "../../services/api";

import { TouchableOpacity, View } from 'react-native';
import { useAuth } from "../../hooks/auth"; 

import { Header } from "../../components/header";

export function Home() {
    const navigation = useNavigation();//navegação entre telas
    const { logout } = useAuth();

    const [DayRecipes, setDayRecipes] = useState([
      {
        id: 1,
        name: "Frango Assado",
        image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-frango-assado-1.jpg"
      },
      {
        id: 2,
        name: "Bolo de Chocolate",
        image: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-rapido-e-molhadinho-capa.png"
      },
      {
        id: 3,
        name: 'Salada de Frutas',
        image: 'https://www.receiteria.com.br/wp-content/uploads/salada-de-frutas-1.jpg'
      },
      {
        id: 4,
        name: 'Hamburguer Artesanal',
        image: 'https://www.receiteria.com.br/wp-content/uploads/hamburguer-artesanal-facil-e-rapido.jpg'
      },
      {
        id: 5,
        name: 'Pudim de Leite',
        image: 'https://www.receiteria.com.br/wp-content/uploads/pudim-de-leite-condensado-capa.jpeg'
      },
            {
        id: 6,
        name: 'Panqueca Americana',
        image: 'https://www.receiteria.com.br/wp-content/uploads/panqueca-americana.jpeg'
      },
    ]);

    return(
     <S.Container>
      <Header
       asSearchBar={true}
      />
      
      <S.Content>
       <S.DayRecipes>
        <S.DRTitle>
          Receitas do dia
        </S.DRTitle>
        
        <S.DRRecipesList 
         data={DayRecipes}
         horizontal={true}
         keyExtractor={(item: any) => item.id}
         ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          showsHorizontalScrollIndicator={false} 
         renderItem={({item}) => (
          <S.DRRecipeCard source={{uri: item.image}}>

          </S.DRRecipeCard>
         )}
        />
       </S.DayRecipes>
      </S.Content>

     </S.Container>
    )
};


