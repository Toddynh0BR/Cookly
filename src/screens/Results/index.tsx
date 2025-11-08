import * as S from './styles';

import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '../../components/header';

export function Results() {
    const route = useRoute();
    const { query } = route.params as { query: string };

    return(
     <S.Container>
      <Header
       asSearchBar={true}
      />
     </S.Container>
    )
}