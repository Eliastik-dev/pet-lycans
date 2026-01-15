import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/components/NicknameInput';

const NicknameInput = ({ value, onChangeText, error }) => {
  const inputStyle = error ? [styles.input, styles.inputError] : styles.input;
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Surnom</Text>
      <TextInput
        style={inputStyle}
        placeholder="Entrez votre surnom"
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default NicknameInput;
