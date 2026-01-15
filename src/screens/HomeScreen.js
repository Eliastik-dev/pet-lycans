import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>🐺 Bienvenue sur Pet-Lycans 🐦‍🔥</Text>
      
      <View style={styles.menu}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.menuText}>Détails 📝</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Favorites')}>
          <Text style={styles.menuText}>Mes Favoris ❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.menuText}>Mon Profil 👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  menu: {
    gap: 15,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuText: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default HomeScreen;
