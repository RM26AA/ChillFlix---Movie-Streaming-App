import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const AddProfileScreen = ({ navigation }) => {
  const [profileName, setProfileName] = useState('');
  const [isChildrenProfile, setIsChildrenProfile] = useState(false);

  // Handle Save action
  const handleSave = () => {
    Alert.alert('Profile Saved', `Profile name: ${profileName}`);
    navigation.goBack(); // Close screen after save
  };

  return (
    <View style={styles.container}>
      {/* Header with Cancel and Save buttons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Profile</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Icon and Edit Button */}
      <View style={styles.profileContainer}>
        <View style={styles.profileIcon}>
          <Ionicons name="person" size={50} color="white" />
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Name Text Box */}
      <TextInput
        style={styles.profileNameInput}
        placeholder="Profile name"
        value={profileName}
        onChangeText={setProfileName}
        placeholderTextColor="#ddd"  // Placeholder text color for better visibility
      />

      {/* Children's Profile Label */}
      <Text style={styles.childrenProfileLabel}>Children’s Profile</Text>

      {/* Toggle Switch */}
      <View style={styles.toggleContainer}>
        <Switch
          value={isChildrenProfile}
          onValueChange={setIsChildrenProfile}
          trackColor={{ false: '#767577', true: '#bd3009' }}
          thumbColor={isChildrenProfile ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      {/* Description Text */}
      <Text style={styles.descriptionText}>Made for children 12 and under, but parents have all the control.</Text>
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
  cancelText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  saveText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    backgroundColor: 'red',
    padding: 30,
    borderRadius: 10,
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  profileNameInput: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    fontSize: 16, // Adjusted font size to be more readable
  },
  childrenProfileLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  descriptionText: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AddProfileScreen;



