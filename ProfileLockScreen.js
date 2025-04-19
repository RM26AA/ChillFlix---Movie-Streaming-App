import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const ProfileLockScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  // Handle Save action
  const handleSave = () => {
    Alert.alert('Profile Lock Saved', `Your PIN: ${pin}`);
    navigation.goBack(); // Close screen after save
  };

  return (
    <View style={styles.container}>
      {/* Header with Cancel and Save buttons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Lock</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Lock Icon */}
      <View style={styles.lockIconContainer}>
        <View style={styles.lockIcon}>
          <Ionicons name="lock-closed" size={40} color="white" />
        </View>
      </View>

      {/* Create Profile Lock Text */}
      <Text style={styles.createLockText}>Create a profile lock</Text>

      {/* Description Text */}
      <Text style={styles.descriptionText}>
        Make this profile private by adding a 4-digit PIN that will need to be entered to access it.
      </Text>

      {/* PIN Input Text Box */}
      <TextInput
        style={styles.pinInput}
        placeholder="Enter 4-digit PIN"
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        maxLength={4}  // Limit input to 4 digits
        placeholderTextColor="#ddd"
      />

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
  saveText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lockIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lockIcon: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 50, // Circular shape for the lock icon container
  },
  createLockText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  pinInput: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileLockScreen;
