import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const EditProfileScreen = ({ navigation }) => {
  const [profileName, setProfileName] = useState('ROMEOFTW');
  const [isAutoplayNext, setIsAutoplayNext] = useState(true);
  const [isAutoplayPreviews, setIsAutoplayPreviews] = useState(true);

  const handleSave = () => {
    Alert.alert('Profile Saved', `Profile name: ${profileName}`);
  };

  return (
    <View style={styles.container}>
      {/* Header with profile edit icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Image and Edit Icon */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <Ionicons name="person" size={50} color="white" />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Name */}
        <TextInput
          style={styles.profileNameInput}
          value={profileName}
          onChangeText={setProfileName}
        />
      </View>

      {/* Settings with clickable boxes */}
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingBox} onPress={() => navigation.navigate('GameHandle')}>
          <Ionicons name="game-controller" size={20} color="white" style={styles.icon} />
          <Text style={styles.settingText}>Game Handle</Text>
          <Text style={styles.settingValue}>Create your game handle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingBox} onPress={() => navigation.navigate('ViewRestrict')}>
          <Ionicons name="warning" size={20} color="white" style={styles.icon} />
          <Text style={styles.settingText}>Viewing Restrictions</Text>
          <Text style={styles.settingValue}>No restrictions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingBox} onPress={() => navigation.navigate('ProfileLock')}>
          <Ionicons name="lock-closed" size={20} color="white" style={styles.icon} />
          <Text style={styles.settingText}>Profile Lock</Text>
          <Text style={styles.settingValue}>Add a 4-digit PIN to this profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingBox} onPress={() => navigation.navigate('DisplayScreen')}>
          <Ionicons name="language" size={20} color="white" style={styles.icon} />
          <Text style={styles.settingText}>Display Language</Text>
          <Text style={styles.settingValue}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingBox} onPress={() => navigation.navigate('AudioScreen')}>
          <Ionicons name="musical-notes" size={20} color="white" style={styles.icon} />
          <Text style={styles.settingText}>Audio & Subtitles</Text>
          <Text style={styles.settingValue}>English (UK)</Text>
        </TouchableOpacity>
      </View>

      {/* Toggle Settings */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Autoplay next episode</Text>
        <Switch
          value={isAutoplayNext}
          onValueChange={setIsAutoplayNext}
          trackColor={{ false: '#767577', true: '#bd3009' }}
          thumbColor={isAutoplayNext ? '#ffffff' : '#f4f3f4'}
        />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Autoplay previews</Text>
        <Switch
          value={isAutoplayPreviews}
          onValueChange={setIsAutoplayPreviews}
          trackColor={{ false: '#767577', true: '#bd3009' }}
          thumbColor={isAutoplayPreviews ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Changes made here apply to all devices.</Text>
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
  profileImage: {
    backgroundColor: 'red',
    padding: 30,
    borderRadius: 10,
    position: 'relative',
  },
  editIcon: {
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
  },
  settingsContainer: {
    marginBottom: 20,
  },
  settingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  settingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingValue: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 'auto',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleText: {
    color: 'white',
    fontSize: 16,
  },
  footerText: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default EditProfileScreen;

