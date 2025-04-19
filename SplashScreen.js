import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import styles from '../styles/SplashScreenStyles';  // Import styles from the new file

const SplashScreen = ({ navigation }) => {
  // Shared values for animation
  const scale = useSharedValue(0);  // Start scale at 0
  const opacity = useSharedValue(0);  // Start opacity at 0

  useEffect(() => {
    // Animate the logo
    scale.value = withTiming(1, { duration: 1500, easing: Easing.ease });  // Scale up to 1 over 1.5 seconds
    opacity.value = withTiming(1, { duration: 1500, easing: Easing.ease });  // Fade in the logo

    // Navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('WhoIsWatching');  // Navigate to the "Who's Watching?" screen
    }, 3000);  // Keep the animation for 3 seconds

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);

  }, [navigation]);  // Adding navigation as a dependency to avoid any stale closures

  // Animated styles
  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.splashContainer}>
      {/* Animated Logo */}
      <Animated.View style={animatedLogoStyle}>
        <Image
          source={require('../assets/CHILL1.png')} // Replace with your actual logo path
          style={styles.splashLogo}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;


