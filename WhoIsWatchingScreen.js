import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from '../styles/WhoIsWatchingStyles';  // Import styles from the new file

const WhoIsWatchingScreen = ({ navigation }) => {
  // Function to handle profile selection
  const handleProfileSelect = (profileName) => {
    // Navigate to the main screen when a profile is clicked
    console.log(`${profileName} profile clicked`);  // Log to check if the function is working
    navigation.navigate('MainScreen');  // Navigate to MainScreen
  };

  return (
    <View style={styles.container}>
      {/* Title & Edit Button */}
      <View style={styles.header}>
        <Text style={styles.title}>Who's Watching?</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Edit')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Boxes */}
      <View style={styles.profilesContainer}>
        <View style={styles.row}>
          {/* Clickable Profile Boxes */}
          <TouchableOpacity style={styles.profileBox} onPress={() => handleProfileSelect('Mum')}>
            <Image source={require('../assets/mum1.jpg')} style={styles.profileImage} />
            <Text style={styles.profileLabel}>Mum</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileBox} onPress={() => handleProfileSelect('Romeo')}>
            <Image source={require('../assets/romeo1.PNG')} style={styles.profileImage} />
            <Text style={styles.profileLabel}>Romeo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.profileBox} onPress={() => handleProfileSelect('AJ')}>
            <Image source={require('../assets/aj1.jpg')} style={styles.profileImage} />
            <Text style={styles.profileLabel}>AJ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileBox} onPress={() => handleProfileSelect('Children')}>
            <Image source={require('../assets/child1.jpg')} style={styles.profileImage} />
            <Text style={styles.profileLabel}>Children</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add Profile Box */}
      <TouchableOpacity style={styles.addProfileBox} onPress={() => navigation.navigate('AddProfile')}>
        <MaterialCommunityIcons name="plus" size={40} color="gray" />
        <Text style={styles.addProfileText}>Add Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WhoIsWatchingScreen;




