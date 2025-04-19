import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // For icons

const GameHandleScreen = ({ navigation }) => {
  const [gameHandle, setGameHandle] = useState('');

  // Handle Save action
  const handleSave = () => {
    Alert.alert('Game Handle Saved', `Your game handle: ${gameHandle}`);
    navigation.goBack(); // Close screen after save
  };

  // Handle Learn More action (redirect to a link)
  const handleLearnMore = () => {
    // Replace with your actual URL link
    Linking.openURL('https://help.netflix.com/en/node/126159');
  };

  return (
    <View style={styles.container}>
      {/* Header with Cancel button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create a Game Handle</Text>
        {/* Empty view for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* Game Image */}
      <Image
        source={require('../assets/game3.png')}  // Replace with your actual image URL
        style={styles.gameImage}
      />

      {/* Description Text */}
      <Text style={styles.descriptionText}>
        This unique name is how your gameplay will appear to others across ChillFlix games.
      </Text>
      <Text style={styles.descriptionText}>
        You can change your game handle anytime.
      </Text>

      {/* Game Handle TextBox */}
      <TextInput
        style={styles.gameHandleInput}
        placeholder="Game handle"
        value={gameHandle}
        onChangeText={setGameHandle}
        placeholderTextColor="#aaa"
      />

      {/* Text for input rules */}
      <Text style={styles.inputRuleText}>
        Only use letters and numbers, please.
      </Text>

      {/* Learn More button */}
      <TouchableOpacity style={styles.learnMoreButton} onPress={handleLearnMore}>
        <Text style={styles.learnMoreText}>Learn more</Text>
      </TouchableOpacity>

      {/* Cancel button */}
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 20,
    paddingTop: 60,  // Adjusted for dynamic island
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  gameImage: {
    width: '100%',
    //height: '90%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  gameHandleInput: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    fontSize: 16,
  },
  inputRuleText: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  learnMoreButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  learnMoreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameHandleScreen;
