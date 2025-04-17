import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const movieCategories = [
  { title: 'Action', imageUrl: 'https://staticimg.amarujala.com/assets/images/2021/03/15/highest-grossing-film_1615786073.jpeg?w=414&dpr=1.0' },
  { title: 'Comedy', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1zXkonV5t0Q38lxRqEl-e-vKTdIigENUHQ&s' },
  { title: 'Drama', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFVwNGESLT2oYhyss66gXRbOba4b_SKyROQ&s' },
  { title: 'Horror', imageUrl: 'https://cinemasmachar.com/wp-content/uploads/2024/11/Top-10-Scariest-Hollywood-Horror-Movies-of-All-Time.jpg' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {movieCategories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('MovieList', { category: category.title })}
        >
          <ImageBackground source={{ uri: category.imageUrl }} style={styles.cardImage}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.6)', 'transparent']}
              style={styles.cardOverlay}
            >
              <Text style={styles.cardTitle}>{category.title}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    height: 200,
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});
