import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // For icons

const ViewingRestrictionsScreen = ({ navigation }) => {
  const [isMaturityRatingEnabled, setIsMaturityRatingEnabled] = useState(false);
  const [isBlockTitlesEnabled, setIsBlockTitlesEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header with Cancel button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Viewing Restrictions</Text>
        {/* Empty view for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* Maturity Rating Box */}
      <View style={styles.restrictionBox}>
        <View style={styles.restrictionContent}>
          <Ionicons name="shield" size={24} color="white" style={styles.icon} />
          <Text style={styles.restrictionText}>Maturity Rating</Text>
        </View>
        <Text style={styles.restrictionValue}>18 and below</Text>  {/* Text placed below the title */}
        <Switch
          value={isMaturityRatingEnabled}
          onValueChange={setIsMaturityRatingEnabled}
          trackColor={{ false: '#767577', true: '#bd3009' }}
          thumbColor={isMaturityRatingEnabled ? '#ffffff' : '#f4f3f4'}
        />
      </View>

      {/* Block Titles Box */}
      <View style={styles.restrictionBox}>
        <View style={styles.restrictionContent}>
          <Ionicons name="lock-closed" size={24} color="white" style={styles.icon} />
          <Text style={styles.restrictionText}>Block Titles</Text>
        </View>
        <Text style={styles.restrictionValue}>No titles blocked</Text>  {/* Text placed below the title */}
        <Switch
          value={isBlockTitlesEnabled}
          onValueChange={setIsBlockTitlesEnabled}
          trackColor={{ false: '#767577', true: '#bd3009' }}
          thumbColor={isBlockTitlesEnabled ? '#ffffff' : '#f4f3f4'}
        />
      </View>
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
  restrictionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  restrictionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  restrictionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restrictionValue: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,  // Ensures the text appears below the title
  },
});

export default ViewingRestrictionsScreen;

