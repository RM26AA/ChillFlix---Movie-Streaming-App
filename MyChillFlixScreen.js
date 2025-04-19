import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const MyChillFlixScreen = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [menuVisible, setMenuVisible] = useState(false); // To manage the menu visibility

  // Placeholder function for menu items
  const handleMenuPress = () => {
    setMenuVisible(!menuVisible);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Function to handle Account and Help links
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header with back icon, title, and search icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My ChillFlix</Text>
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <Ionicons name="search" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMenuPress}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      {searchVisible && (
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a movie"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#ddd"
        />
      )}

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <Ionicons name="person" size={50} color="white" />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>ROMEOFTW</Text>
      </View>

      {/* Menu Pop-up */}
      {menuVisible && (
        <View style={styles.menuPopup}>
          <TouchableOpacity style={styles.closeMenuButton} onPress={closeMenu}>
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
          <ScrollView style={styles.menuOptions}>
            <MenuItem
              title="Manage Profiles"
              icon="person"
              onPress={() => navigation.navigate('WhoIsWatching')}
            />
            <MenuItem
              title="App Settings"
              icon="settings"
              onPress={() => navigation.navigate('Setting')}
            />
            <MenuItem
              title="Account"
              icon="card"
              onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount')}
            />
            <MenuItem
              title="Help"
              icon="help-circle"
              onPress={() => handleLinkPress('https://help.netflix.com/en')}
            />
            <MenuItem
              title="Sign Out"
              icon="log-out"
              onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FManageDevices')}
            />
          </ScrollView>
          <Text style={styles.versionText}>Version 17.27.0 (5264)</Text>
        </View>
      )}

      {/* Options List */}
      <ScrollView style={styles.optionsList}>
        <OptionCard title="Notifications" icon="notifications" onPress={() => navigation.navigate('Notification')} />
        <OptionCard title="Downloads" icon="download" onPress={() => navigation.navigate('Download')} />
        <OptionCard title="My List" icon="list" onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount')} />
        <OptionCard title="Trailers You've Watched" icon="film" onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount')} />
        <OptionCard title="Continue Watching" icon="play" onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount')} />
        <OptionCard title="Recently Watched" icon="watch" onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount')} />
        <OptionCard title="Go Behind the Scenes" icon="camera" onPress={() => handleLinkPress('https://www.netflix.com/gb/login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount')} />
      </ScrollView>
    </View>
  );
};

// Option Card Component
const OptionCard = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.optionCard} onPress={onPress}>
    <Ionicons name={icon} size={24} color="white" />
    <Text style={styles.optionText}>{title}</Text>
  </TouchableOpacity>
);

// Menu Item Component
const MenuItem = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color="white" />
    <Text style={styles.menuItemText}>{title}</Text>
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
  searchBar: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    backgroundColor: '#ff0000', // Blue background for profile icon
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  optionsList: {
    flex: 1,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  menuPopup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ff0000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    maxHeight: '100%',
    zIndex: 999, // Ensures the menu is on top
  },
  closeMenuButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  menuOptions: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  versionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
  },
});

export default MyChillFlixScreen;


