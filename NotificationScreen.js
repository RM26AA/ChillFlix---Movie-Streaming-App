import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const NotificationsScreen = ({ navigation }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAppIconBadges, setShowAppIconBadges] = useState(false);
  const [floatingNotifications, setFloatingNotifications] = useState(false);
  const [lockScreenNotifications, setLockScreenNotifications] = useState(false);
  const [allowSound, setAllowSound] = useState(false);
  const [allowVibration, setAllowVibration] = useState(false);
  const [allowLEDLight, setAllowLEDLight] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header with back icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        {/* Empty view for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* Description */}
      <Text style={styles.descriptionText}>
        Receive notifications about TV shows and movies you love. You can easily customise all your notifications settings below.
      </Text>

      {/* Options List */}
      <ScrollView style={styles.optionsList}>
        <OptionRow
          title="Show notifications"
          toggleValue={showNotifications}
          onToggle={() => setShowNotifications(!showNotifications)}
        />
        <OptionRow
          title="Show app icon badges"
          toggleValue={showAppIconBadges}
          onToggle={() => setShowAppIconBadges(!showAppIconBadges)}
        />
        <OptionRow
          title="Floating notifications"
          toggleValue={floatingNotifications}
          onToggle={() => setFloatingNotifications(!floatingNotifications)}
          description="Allow floating notifications"
        />
        <OptionRow
          title="Lock screen notifications"
          toggleValue={lockScreenNotifications}
          onToggle={() => setLockScreenNotifications(!lockScreenNotifications)}
          description="Allow notifications on the Lock screen"
        />
        <OptionRow
          title="Allow sound"
          toggleValue={allowSound}
          onToggle={() => setAllowSound(!allowSound)}
        />
        <OptionRow
          title="Allow vibration"
          toggleValue={allowVibration}
          onToggle={() => setAllowVibration(!allowVibration)}
        />
        <OptionRow
          title="Allow using LED light"
          toggleValue={allowLEDLight}
          onToggle={() => setAllowLEDLight(!allowLEDLight)}
        />
      </ScrollView>
    </View>
  );
};

// Option Row Component (for each toggle option)
const OptionRow = ({ title, toggleValue, onToggle, description }) => (
  <View style={styles.optionBox}>
    <View style={styles.optionContent}>
      <Text style={styles.optionText}>{title}</Text>
      <Switch
        value={toggleValue}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#bd3009' }} // Set track color to red when toggled on
        thumbColor={toggleValue ? '#ffffff' : '#f4f3f4'} // Set thumb color to white when toggled on, light grey when off
      />
    </View>
    {description && <Text style={styles.optionDescription}>{description}</Text>}
  </View>
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
  descriptionText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  optionsList: {
    flex: 1,
  },
  optionBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDescription: {
    color: 'grey',
    fontSize: 12,
    marginTop: 5,
  },
});

export default NotificationsScreen;
