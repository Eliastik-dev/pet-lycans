import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/components/AnimalCard";

const AnimalCard = ({ animal, onPress }) => {

  return (
    <SafeAreaView>
      <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.8}
      >
        <Image 
          source={{ uri: animal.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.name}>{animal.name}</Text>
        <Text style={styles.type}>{animal?.type === 'pelican' ? 'Pélican' : 'Loup'}</Text>
        {animal?.description && (
          <Text style={styles.description} numberOfLines={2}>
            {animal.description}
          </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AnimalCard;
