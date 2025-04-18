import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import { getMovieCategories } from '../api/movieApi';  // Adjust path as needed

export default function HomeScreen2({ navigation }) {
  const [movieCategories, setMovieCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getMovieCategories();
      setMovieCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movieCategories}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            image={item.imgurl}
            onPress={() => navigation.navigate('MovieList', { cat_id: item.id,category: item.title })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
});
