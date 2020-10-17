import React from 'react';

// por volta de todas as rotas, como browser router
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';

// para navegação em pilha
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OphanageMap" component={OrphanagesMap} />
      </Navigator>
    </NavigationContainer>
  );
}