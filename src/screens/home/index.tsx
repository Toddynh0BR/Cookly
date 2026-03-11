import * as S from "./styles";

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { api } from "../../services/api";

import { TouchableOpacity, View } from 'react-native';
import { useAuth } from "../../hooks/auth"; 

import { Header } from "../../components/header";

import { HeartIcon } from 'phosphor-react-native';

export function Home() {
    const navigation = useNavigation();//navegação entre telas
    const { logout } = useAuth();

    const [DayRecipes, setDayRecipes] = useState([
      {
        id: 1,
        name: "Frango Assado",
        img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-frango-assado-1.jpg"
      },
      {
        id: 2,
        name: "Bolo de Chocolate",
        img: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-rapido-e-molhadinho-capa.png"
      },
      {
        id: 3,
        name: 'Salada de Frutas',
        img: 'https://www.receiteria.com.br/wp-content/uploads/salada-de-frutas-1.jpg'
      },
      {
        id: 4,
        name: 'Hamburguer Artesanal',
        img: 'https://www.receiteria.com.br/wp-content/uploads/hamburguer-artesanal-facil-e-rapido.jpg'
      },
      {
        id: 5,
        name: 'Pudim de Leite',
        img: 'https://www.receiteria.com.br/wp-content/uploads/pudim-de-leite-condensado-capa.jpeg'
      },
            {
        id: 6,
        name: 'Panqueca Americana',
        img: 'https://www.receiteria.com.br/wp-content/uploads/panqueca-americana.jpeg'
      },
    ]);

    const [PopularRecipes, setPopularRecipes] = useState([
      {
        id: 1,
        name: "Frango Assado",
        img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-frango-assado-1.jpg",
        time: '140-180min'
      },
      {
        id: 2,
        name: "Bolo de Chocolate",
        img: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-rapido-e-molhadinho-capa.png",
        time: '140-180min'
      },
      {
        id: 3,
        name: 'Salada de Frutas',
        img: 'https://www.receiteria.com.br/wp-content/uploads/salada-de-frutas-1.jpg',
        time: '140-180min'
      },
      {
        id: 4,
        name: 'Hamburguer Artesanal',
        img: 'https://www.receiteria.com.br/wp-content/uploads/hamburguer-artesanal-facil-e-rapido.jpg',
        time: '140-180min'
      },
      {
        id: 5,
        name: 'Pudim de Leite',
        img: 'https://www.receiteria.com.br/wp-content/uploads/pudim-de-leite-condensado-capa.jpeg',
        time: '140-180min'
      },
            {
        id: 6,
        name: 'Panqueca Americana',
        img: 'https://www.receiteria.com.br/wp-content/uploads/panqueca-americana.jpeg',
        time: '140-180min'
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
          showsHorizontalScrollIndicator={false} 
         renderItem={({item}) => (
          <S.DRRecipeCard>
           <S.DRRecipeBack source={{uri: item.img}}>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#f15821', opacity: .2}}></View>
           </S.DRRecipeBack>

            <S.DRRecipeName>
             {item.name}
            </S.DRRecipeName>
          </S.DRRecipeCard>
         )}
        />
       </S.DayRecipes>

       <S.PopularRecipes>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
         <S.PRTitle>
          Receitas Populares
         </S.PRTitle>

         <TouchableOpacity>
          <S.MoreText>
           Ver todos
          </S.MoreText>
         </TouchableOpacity>
        </View>

        <S.PRRecipesList 
         data={PopularRecipes}
         horizontal={true}
         keyExtractor={(item: any) => item.id}
         showsHorizontalScrollIndicator={false} 
         renderItem={({item})=> (
          <S.PRRecipe> 
           <S.PRImage source={{uri: item.img}} resizeMode="cover">
            <S.PRTime>
             <S.ClockI/>
             <S.PRTimeText>
              {item.time}
             </S.PRTimeText>
            </S.PRTime>
           </S.PRImage>
          
           <View style={{ height: 24, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <S.PRText>
              {item.name}
            </S.PRText>
            <HeartIcon size={24} color="#f15821" weight="fill"/>
           </View>
          </S.PRRecipe>
         )}
        />
       </S.PopularRecipes>
      </S.Content>

     </S.Container>
    )
};


