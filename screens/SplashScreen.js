import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Home'), 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <LinearGradient
      colors={['#85FFBD', '#FFFB7D']}  // light violet to deep violet
      style={styles.container}
    >
      <View style={styles.container}>
        <Animatable.Image
          animation="swing"
          iterationCount="infinite"
          duration={1000}
          source={require('../assets/icon.png')}
          style={styles.logo}
        />
      </View>
    </LinearGradient>


  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 150, height: 150 },
});
