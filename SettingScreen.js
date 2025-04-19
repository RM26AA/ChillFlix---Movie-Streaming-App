import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Alert, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const AppSettingsScreen = ({ navigation }) => {
  const [mobileDataUsage, setMobileDataUsage] = useState('Automatic');
  const [wifiOnly, setWifiOnly] = useState(false);
  const [videoQuality, setVideoQuality] = useState('Standard');

  const handleDeleteDownloads = () => {
    Alert.alert('Delete All Downloads', 'Are you sure you want to delete all downloads?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => console.log('Downloads deleted') },
    ]);
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with close (X) icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>App Settings</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Video Playback */}
      <Text style={styles.sectionTitle}>Video Playback</Text>
      <Text style={[styles.optionTitle, { fontWeight: 'normal' }]}>Mobile Data Usage</Text>

      {/* Mobile Data Usage Box */}
      <View style={styles.optionBox}>
        <OptionItem 
          title="Automatic"
          isSelected={mobileDataUsage === 'Automatic'}
          onPress={() => setMobileDataUsage('Automatic')}
        />
        <OptionItem 
          title="Wi-Fi Only"
          isSelected={mobileDataUsage === 'Wi-Fi Only'}
          onPress={() => setMobileDataUsage('Wi-Fi Only')}
        />
        <OptionItem 
          title="Save Data"
          isSelected={mobileDataUsage === 'Save Data'}
          onPress={() => setMobileDataUsage('Save Data')}
        />
        <OptionItem 
          title="Maximum Data"
          isSelected={mobileDataUsage === 'Maximum Data'}
          onPress={() => setMobileDataUsage('Maximum Data')}
        />
        <Text style={styles.optionSelectedText}>Selected: {mobileDataUsage}</Text>
      </View>

      {/* Downloads Section */}
      <Text style={styles.sectionTitle}>Downloads</Text>
      <View style={styles.optionBox}>
        <Text style={styles.optionTitle}>Wi-Fi Only</Text>
        <Switch 
          value={wifiOnly} 
          onValueChange={setWifiOnly}
          trackColor={{ false: '#767577', true: '#bd3009' }} // Red color when on
          thumbColor={wifiOnly ? '#ffffff' : '#f4f3f4'} // White thumb when on, gray when off
        />
      </View>

      <View style={styles.optionBox}>
        <Text style={styles.optionTitle}>Video Quality</Text>
        <View style={styles.optionItem}>
          <Text style={styles.optionText}>Standard</Text>
          <Switch 
            value={videoQuality === 'Higher'} 
            onValueChange={() => setVideoQuality(videoQuality === 'Higher' ? 'Standard' : 'Higher')}
            trackColor={{ false: '#767577', true: '#bd3009' }} // Red color when on
            thumbColor={videoQuality === 'Higher' ? '#ffffff' : '#f4f3f4'} // White thumb when on, gray when off
          />
        </View>
        <Text style={styles.optionSelectedText}>Selected: {videoQuality}</Text>
      </View>

      {/* Delete All Downloads */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteDownloads}>
        <Text style={styles.deleteButtonText}>Delete All Downloads</Text>
      </TouchableOpacity>

      {/* iPhone Storage */}
      <Text style={styles.sectionTitle}>iPhone</Text>
      <View style={styles.storageBarContainer}>
        <Text style={styles.storageText}>Storage used: 25%</Text>
        <View style={styles.storageBarBackground}>
          <View style={[styles.storageBar, { width: '25%' }]} />
        </View>
      </View>

      {/* About Section */}
      <Text style={styles.sectionTitle}>About</Text>
      <View style={styles.optionBox}>
        <TouchableOpacity style={styles.optionItem} onPress={() => handleLinkPress('https://help.netflix.com/en/node/306')}>
          <Ionicons name="speedometer" size={24} color="white" />
          <Text style={styles.optionText}>Internet Speed Test</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.optionItem} onPress={() => handleLinkPress('https://help.netflix.com/en/node/100628')}>
          <Ionicons name="shield" size={24} color="white" />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.optionItem} onPress={() => handleLinkPress('https://help.netflix.com/en/node/126831')}>
          <Ionicons name="cash" size={24} color="white" />
          <Text style={styles.optionText}>Advert Choices</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Option Item Component
const OptionItem = ({ title, isSelected, onPress }) => (
  <TouchableOpacity style={[styles.optionItem, isSelected && styles.selectedOption]} onPress={onPress}>
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 60, // Adjusted for dynamic island
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  optionBox: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  optionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#bd3009', // Highlight selected option with red color
  },
  optionText: {
    color: 'white',
    fontSize: 14,
  },
  optionSelectedText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#bd3009',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storageBarContainer: {
    marginBottom: 20,
  },
  storageText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  storageBarBackground: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  storageBar: {
    height: '100%',
    backgroundColor: '#bd3009',
    borderRadius: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginVertical: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  },
});

export default AppSettingsScreen;


