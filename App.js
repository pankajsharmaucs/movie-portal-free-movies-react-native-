import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
// import HomeScreen from './screens/HomeScreen';
import MovieListScreen from './screens/MovieListScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import { LogBox } from 'react-native';
import HomeScreen2 from './screens/Home';

// Ignore all logs temporarily for clean output
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
  // Get movie URLs from the app's config (via expo-constants)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            title: 'Free Movies Hub',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen2}
          options={{
            title: 'Free Movies Hub',
            headerStyle: {
              backgroundColor: '#121212',  // Dark background
            },
            headerTintColor: '#fff',       // Back button and title color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTitleAlign: 'center',    // <-- This centers the title
          }}
        />
        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{ title: 'Movies' }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerScreen}
          options={{ title: 'Player' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
