import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import MovieCard from '../components/MovieCard';
import { getMoviesByCategory } from '../api/moviesList';

export default function MovieListScreen({ route, navigation }) {
  const { category, cat_id } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);  // State for loading

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);  // Start loading
      const data = await getMoviesByCategory(cat_id);
      setMovies(data);
      setLoading(false);  // Stop loading once data is fetched
    }

    navigation.setOptions({ title: `${category} Movies` });
    fetchMovies();
  }, [category, cat_id, navigation]);

  return (
    <View style={styles.container}>
      {loading ? (  // Show loader if loading state is true
        <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieCard
              title={item.movie_name}
              image={item.image}
              onPress={() =>
                navigation.navigate('VideoPlayer', {
                  title: item.title,
                  videoUrl: item.videoUrl,
                })
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ padding: 10 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  loader: {
    flex: 1, // Ensure it fills the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});
