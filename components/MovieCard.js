import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default function MovieCard({ title, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={{ borderRadius: 10 }}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 3,      
    borderColor: '#055c2d',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
