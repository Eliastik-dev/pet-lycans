import React from 'react';
import { View, Text, Image } from 'react-native';
import InfoSection from './InfoSection';
import FavoriteButton from './FavoriteButton';
import styles from '../styles/components/AnimalDetails';

const AnimalDetails = ({ animal, isFavorite, onToggleFavorite }) => {
  const typeLabel = animal.type === 'pelican' ? 'Pélican' : 'Loup';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
          <Text style={styles.typeValue}>{typeLabel}</Text>
        </View>
        <InfoSection title="Description" content={animal.description} />
        <InfoSection title="Habitat" content={animal.habitat} />
        <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
      </View>
    </View>
  );
};

export default AnimalDetails;
