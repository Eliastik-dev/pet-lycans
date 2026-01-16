import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import InfoSection from './InfoSection';
import FavoriteButton from './FavoriteButton';
import styles from '../styles/components/AnimalDetails';

const AnimalDetails = ({ animal, isFavorite, onToggleFavorite }) => {
  const labels = {
    pelican: 'Pélican',
    wolf: 'Loup'
  };

  if (!animal) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {animal.imageUrl && (
            <Image 
              source={{ uri: animal.imageUrl }} 
              style={styles.image}
              resizeMode="cover"
            />
          )}
        <Text style={styles.name}>{animal.name}</Text>
        <View style={styles.typeContainer}>
          <Text style={styles.typeLabel}>Type:</Text>
          <Text style={styles.typeValue}>{labels[animal.type]}</Text>
        </View>
        <InfoSection title="Description" content={animal.description} />
        <InfoSection title="Habitat" content={animal.habitat} />
        <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimalDetails;
