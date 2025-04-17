import React from 'react';
import { TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';

export default function MovieCard({ title, onPress, image }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={{ borderRadius: 10 }}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 15 },
  image: { height: 200, justifyContent: 'flex-end', padding: 10 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});
