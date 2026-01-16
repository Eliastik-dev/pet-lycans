import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator, Text, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import styles from './src/styles/App';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const colorScheme = useColorScheme();

  const tips = useMemo(
    () => [
      'Astuce: Ajoutez vos lycans favoris pour les retrouver rapidement.',
      'Conseil: Balayez pour voir plus de détails sur chaque profil.',
      'Info: Activez le mode sombre pour reposer vos yeux la nuit.',
      'Hint: Appuyez longtemps pour ouvrir les options avancées.',
    ],
    []
  );

  const tip = useMemo(() => tips[Math.floor(Math.random() * tips.length)], [tips]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      {isLoading ? (
        <SafeAreaView style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
          <ActivityIndicator size="large" color="#6C63FF" />
          <Text style={{ marginTop: 12, fontSize: 16, color: '#666' }}>Chargement… Préparez vos lycans 🐺</Text>
          <Text style={{ marginTop: 6, fontSize: 13, color: '#888' }}>{tip}</Text>
        </SafeAreaView>
      ) : (
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerTintColor: colorScheme === 'dark' ? '#fff' : '#222',
              headerShadowVisible: false,
              animation: 'fade',
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Accueil' }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{ title: 'Détails du lycan' }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: 'Mon profil' }}
            />
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{ title: 'Favoris' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
};

export default App;
