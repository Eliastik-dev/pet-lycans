import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from '../styles/components/FilterButtons';

const FilterButtons = ({ filterType, onFilterChange }) => {
  const options = [
    { id: 'all', label: 'Tous' },
    { id: 'pelican', label: 'Pélicans' },
    { id: 'wolf', label: 'Loups' },
  ];

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.row}>
        {options.map((opt) => {
          const isActive = filterType === opt.id;
          
          return (
            <TouchableOpacity
              key={opt.id}
              activeOpacity={0.7}
              onPress={() => onFilterChange(opt.id)}
              style={[
                styles.tab,
                isActive && styles.activeTab
              ]}
            >
              <Text style={[
                styles.tabText,
                isActive && styles.activeTabText
              ]}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView> 
  );
};

export default FilterButtons;
