import React from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/components/FavoriteButton';

const FavoriteButton = ({ isFavorite, onToggle }) => {
  return (
    <View style={styles.container}>
      <Button
        title={isFavorite ? 'Retirer des favoris' : 'Marquer comme favori'}
        onPress={onToggle}
        color={isFavorite ? '#ff3b30' : '#007AFF'}
      />
    </View>
  );
};

export default FavoriteButton;