import React from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/components/FilterButtons';

const FilterButtons = ({ filterType, onFilterChange }) => {
  const handleAllPress = () => onFilterChange('all');
  const handlePelicanPress = () => onFilterChange('pelican');
  const handleWolfPress = () => onFilterChange('wolf');

  return (
    <View style={styles.container}>
      <Button
        title="Tous"
        onPress={handleAllPress}
        color={filterType === 'all' ? '#007AFF' : '#ccc'}
      />
      <Button
        title="Pélicans"
        onPress={handlePelicanPress}
        color={filterType === 'pelican' ? '#007AFF' : '#ccc'}
      />
      <Button
        title="Loups"
        onPress={handleWolfPress}
        color={filterType === 'wolf' ? '#007AFF' : '#ccc'}
      />
    </View>
  );
};

export default FilterButtons;
