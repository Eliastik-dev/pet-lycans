import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/components/NicknameInput";

const NicknameInput = ({ value, onChangeText, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView edges={["left", "right"]} style={styles.container}>
      <Text style={styles.label}>Pseudo</Text>

      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null,
          isFocused && !error ? styles.inputFocused : null,
        ]}
        placeholder="Ex: Péli-du-77"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </SafeAreaView>
  );
};

export default NicknameInput;
