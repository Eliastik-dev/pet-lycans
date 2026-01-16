import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AnimalDetails from '../components/AnimalDetails';
import styles from '../styles/DetailsScreen';

const DetailsScreen = ({ route }) => {
  const { animal } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkFavStatus = async () => {
      try {
        const rawData = await AsyncStorage.getItem('favorites');
        if (rawData) {
          const favs = JSON.parse(rawData);
          setIsFavorite(favs.includes(animal.id));
        }
      } catch (err) {
        console.warn("Petit souci au chargement des favoris", err);
      } finally {
        setLoading(false);
      }
    };

    checkFavStatus();
  }, [animal.id]);

  const handleToggleFav = async () => {
    const nextState = !isFavorite;
    setIsFavorite(nextState);

    try {
      const rawData = await AsyncStorage.getItem('favorites');
      let favs = rawData ? JSON.parse(rawData) : [];

      if (nextState) {
        favs = [...new Set([...favs, animal.id])];
      } else {
        favs = favs.filter(id => id !== animal.id);
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favs));
      
    } catch (err) {
      setIsFavorite(!nextState);
      Alert.alert('Oups', 'Impossible de mettre à jour tes favoris.');
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <AnimalDetails
        animal={animal}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFav}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;