import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/components/InfoSection';

const InfoSection = ({ title, content }) => {
  if (!content || content.trim() === '') return null;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.label]}>
        {title.toUpperCase()}
      </Text>
      
      <Text style={styles.content}>
        {content}
      </Text>
    </View>
  );
};

export default InfoSection;
