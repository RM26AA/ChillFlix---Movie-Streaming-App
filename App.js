import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import WhoIsWatchingScreen from './screens/WhoIsWatchingScreen';
import MainScreen from './screens/MainScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';  // Import MovieDetailsScreen
import AddProfile from './screens/AddProfile';
import EditProfileScreen from './screens/EditProfileScreen';
import GameHandleScreen from './screens/GameHandleScreen';
import ViewingRestrictions from './screens/ViewingRestrictions';
import ProfileLockScreen from './screens/ProfileLockScreen';
import DisplayScreen from './screens/DisplayScreen';
import AudioScreen from './screens/AudioScreen';
import NewsAndHotScreen from './screens/NewsAndHotScreen';
import MyChillFlixScreen from './screens/MyChillFlixScreen';
import NotificationScreen from './screens/NotificationScreen';
import DownloadScreen from './screens/DownloadScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WhoIsWatching"
          component={WhoIsWatchingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ headerShown: false }}  // Show header for MovieDetailsScreen
        />
        <Stack.Screen
          name="AddProfile"
          component={AddProfile}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="Edit"
          component={EditProfileScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="GameHandle"
          component={GameHandleScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="ViewRestrict"
          component={ViewingRestrictions}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="ProfileLock"
          component={ProfileLockScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="DisplayScreen"
          component={DisplayScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="AudioScreen"
          component={AudioScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="NewsScreen"
          component={NewsAndHotScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="ChillScreen"
          component={MyChillFlixScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="Download"
          component={DownloadScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{ headerShown: false }}  // Show header for add profile screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


