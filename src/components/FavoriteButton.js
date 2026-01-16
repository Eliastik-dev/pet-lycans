import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/components/FavoriteButton';

const FavoriteButton = ({ isFavorite, onToggle }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={onToggle}
      style={[
        styles.container, 
        styles.button, 
        { backgroundColor: isFavorite ? '#ff3b30' : '#007AFF' }
      ]}
    >
      <Text style={styles.text}>
        {isFavorite ? '💔 Retirer des favoris' : '❤️ Ajouter aux favoris'}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;