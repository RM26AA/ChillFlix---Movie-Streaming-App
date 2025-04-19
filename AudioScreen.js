import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const languages = [
  'Arabic',
  'Chinese',
  'Dutch',
  'English',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Korean',
  'Portuguese',
  'Russian',
  'Spanish',
  'Turkish',
  'Hindi',
];

const AudioAndSubtitlesScreen = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageSelect = (language) => {
    // Toggle the selection of a language
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(item => item !== language)); // Deselect
    } else {
      setSelectedLanguages([...selectedLanguages, language]); // Select
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageItem,
        selectedLanguages.includes(item) && styles.selectedLanguage,
      ]}
      onPress={() => handleLanguageSelect(item)}
    >
      <Text
        style={[
          styles.languageText,
          selectedLanguages.includes(item) && styles.selectedLanguageText,
        ]}
      >
        {item}
      </Text>
      {selectedLanguages.includes(item) && (
        <Ionicons name="checkmark" size={20} color="red" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with Cancel button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Audio & Subtitles</Text>
        {/* Empty view for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* Description Text */}
      <Text style={styles.descriptionText}>
        Choosing the languages you watch TV programmes and films in helps us set up your audio and subtitles for a better viewing experience.
      </Text>

      {/* Language List */}
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        style={styles.languageList}
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
  descriptionText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  languageList: {
    flex: 1,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  languageText: {
    color: 'white',
    fontSize: 16,
  },
  selectedLanguage: {
    backgroundColor: '#333',
  },
  selectedLanguageText: {
    color: 'red',
  },
});

export default AudioAndSubtitlesScreen;
