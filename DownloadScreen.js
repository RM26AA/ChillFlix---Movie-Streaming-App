import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const DownloadsScreen = ({ navigation }) => {
  const handleDownloadLink = () => {
    // Open the provided link for downloads
    Linking.openURL('https://help.netflix.com/en/node/54816'); // Replace with the actual link you provide
  };

  return (
    <View style={styles.container}>
      {/* Header with back icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Downloads</Text>
        {/* Empty space for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* Download Icon */}
      <View style={styles.downloadIconContainer}>
        <Ionicons name="download" size={60} color="white" style={styles.downloadIcon} />
      </View>

      {/* Text */}
      <Text style={styles.mainText}>Never be without ChillFlix</Text>
      <Text style={styles.descriptionText}>
        Download programmes and films so you'll never be without something to watch - even when you're offline.
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadLink}>
        <Text style={styles.downloadButtonText}>See what you can download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 60, // Adjusted for dynamic island
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  downloadIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  downloadIcon: {
    backgroundColor: '#555', // Grey circle for the icon
    padding: 20,
    borderRadius: 50,
  },
  mainText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  downloadButton: {
    backgroundColor: '#bd3009', // Red color for the button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DownloadsScreen;
