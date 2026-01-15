import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/components/AnimalCard';

const AnimalCard = ({ animal, onPress }) => {
  const typeLabel = animal.type === 'pelican' ? 'Pélican' : 'Loup';
  
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {animal.imageUrl && (
        <Image 
          source={{ uri: animal.imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Text style={styles.name}>{animal.name}</Text>
      <Text style={styles.type}>{typeLabel}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {animal.description}
      </Text>
    </TouchableOpacity>
  );
};

export default AnimalCard;
