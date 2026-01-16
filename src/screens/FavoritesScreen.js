import React, { useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchAnimals } from '../services/api';
import AnimalCard from '../components/AnimalCard';
import styles from '../styles/FavoritesScreen';

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [allAnimals, setAllAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  // On recharge les données à chaque fois que l'écran est affiché
  useFocusEffect(
    useCallback(() => {
      loadFavoritesAndAnimals();
    }, [])
  );

  const loadFavoritesAndAnimals = async () => {
    setLoading(true);
    try {
      const [favsJson, animalsData] = await Promise.all([
        AsyncStorage.getItem('favorites'),
        fetchAnimals()
      ]);

      const parsedFavs = favsJson ? JSON.parse(favsJson) : [];
      setFavorites(parsedFavs);
      setAllAnimals(animalsData);
    } catch (err) {
      console.warn('Erreur lors du chargement des favoris:', err);
    } finally {
      setLoading(false);
    }
  };

  const favoriteAnimals = allAnimals.filter(animal =>
    favorites.includes(animal.id)
  );

  const handleAnimalPress = (animal) => {
    navigation.navigate('Details', { animal });
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={favoriteAnimals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AnimalCard
            animal={item}
            onPress={() => handleAnimalPress(item)}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emoji}>💔</Text>
            <Text style={styles.emptyTitle}>Aucun favori pour le moment</Text>
            <Text style={styles.emptyText}>
              Explorez la liste des animaux et ajoutez-en quelques-uns à votre collection !
            </Text>
            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.exploreButtonText}>Explorer les animaux</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
