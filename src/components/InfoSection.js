import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/components/InfoSection';

const InfoSection = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default InfoSection;
