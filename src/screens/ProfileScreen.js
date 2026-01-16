import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import NicknameInput from '../components/NicknameInput';
import styles from '../styles/ProfileScreen';

const ProfileScreen = () => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadNickname();
  }, []);

  const loadNickname = async () => {
    try {
      const savedNickname = await AsyncStorage.getItem('nickname');
      if (savedNickname) {
        setNickname(savedNickname);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du surnom:', error);
    }
  };

  const saveNickname = async () => {
    const trimmedNickname = nickname.trim();

    if (trimmedNickname === '') {
      setError('Le surnom ne peut pas être vide');
      Alert.alert('Erreur', 'Le surnom ne peut pas être vide');
      return;
    }

    try {
      await AsyncStorage.setItem('nickname', trimmedNickname);
      setError('');
      Alert.alert('Succès', 'Surnom sauvegardé avec succès');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du surnom:', error);
      Alert.alert('Erreur', 'Impossible de sauvegarder le surnom');
    }
  };

  const handleNicknameChange = (text) => {
    setNickname(text);
    setError('');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={styles.title}>Paramètres du profil</Text>
        <NicknameInput
          value={nickname}
          onChangeText={handleNicknameChange}
          error={error}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Sauvegarder"
            onPress={saveNickname}
            color="#007AFF"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Votre surnom sera sauvegardé localement sur votre appareil.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
