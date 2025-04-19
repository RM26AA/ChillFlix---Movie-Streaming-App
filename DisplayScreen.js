import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
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

const DisplayScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    // Set selected language and apply styling
    setSelectedLanguage(language === selectedLanguage ? null : language);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageItem,
        item === selectedLanguage && styles.selectedLanguage,
      ]}
      onPress={() => handleLanguageSelect(item)}
    >
      <Text
        style={[
          styles.languageText,
          item === selectedLanguage && styles.selectedLanguageText,
        ]}
      >
        {item}
      </Text>
      {item === selectedLanguage && (
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
        <Text style={styles.headerTitle}>Display</Text>
        {/* Empty view for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* Description Text */}
      <Text style={styles.descriptionText}>
        Change the language of the text you see on ChillFlix. Any change will also apply to the default language for audio and subtitles.
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

export default DisplayScreen;
