import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
  // importando fontes do google fonts
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  // a aplicação só é carregada quando as fontes forem carregadas
  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
