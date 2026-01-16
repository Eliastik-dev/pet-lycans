import React, { useState, useEffect, useMemo } from 'react';
import { 
  View, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator, 
  Text, 
  RefreshControl 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchAnimals } from '../services/api';
import AnimalCard from '../components/AnimalCard';
import FilterButtons from '../components/FilterButtons';
import styles from '../styles/HomeScreen';

const HomeScreen = ({ navigation }) => {
  const [filterType, setFilterType] = useState('all');
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const getAnimalsData = async (silent = false) => {
    if (!silent) setIsLoading(true);
    try {
      const data = await fetchAnimals();
      setAnimals(data);
      setError(null);
    } catch (err) {
      setError('Oups, impossible de récupérer les animaux.');
      console.warn('API Error:', err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    getAnimalsData();
  }, []);

  const filteredAnimals = useMemo(() => {
    return filterType === 'all' 
      ? animals 
      : animals.filter(a => a.type === filterType);
  }, [animals, filterType]);

  const onRefresh = () => {
    setIsRefreshing(true);
    getAnimalsData(true);
  };

  if (isLoading && !isRefreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#007AFF" />
        <Text style={{ marginTop: 12, color: '#999' }}>On arrive...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FilterButtons
        filterType={filterType}
        onFilterChange={setFilterType}
      />

      <FlatList
        data={filteredAnimals}
        renderItem={({ item }) => (
          <AnimalCard
            animal={item}
            onPress={() => navigation.navigate('Details', { animal: item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          !isLoading && <Text style={{ textAlign: 'center', marginTop: 20 }}>Aucun animal trouvé 🐾</Text>
        }
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonWrapper} 
          onPress={() => navigation.navigate('Favorites')}
        >
          <Text style={{ color: '#007AFF', fontWeight: '600' }}>⭐ Favoris</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonWrapper} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={{ color: '#007AFF', fontWeight: '600' }}>👤 Mon Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;