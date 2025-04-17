import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';  // Assuming your MovieCard is in components folder


// Sample movies array, can be fetched or updated dynamically if needed
const movies = [
  { title: 'Movie 1', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
     image: 'https://static.toiimg.com/thumb/msid-100627160,width-1070,height-580,imgsize-102336,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' },
  { title: 'Movie 2', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    image: 'https://www.highsnobiety.com/static-assets/dato/1664553844-most-expensive-hollywood-movies-061.jpg' },
  { title: 'Movie 3', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpHwNzDsyZ0p2K1I-W3j1dQkulD2qwuek4w&s' },
  { title: 'Movie 4', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxBWtrGE_DIqJjM2m-77jSxLjegoeAWZDZ3ZDbWRFBo_-uiDI0B-6t1VdR98FJUYFuPw&usqp=CAU' },
  { title: 'Movie 5', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
     image: 'https://photogallery.indiatimes.com/movies/international/maleficent/photo/35618380/Poster-of-Hollywood-dark-fantasy-adventure-film-Maleficent-starring-Angelina-Jolie-.jpg' },
  { title: 'Movie 6', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEizVLc764CpkgcMvIjkvxk-hvKrOwvAxwSbGYdha3BoDeXq8Q_RDknr4HJJbtiIUcFks&usqp=CAU' },
];

export default function MovieListScreen({ route, navigation }) {
  // Get the category from the route params (passed from the previous screen)
  const { category } = route.params;

  // Set the header title dynamically based on the category
  useEffect(() => {
    navigation.setOptions({ title: `${category} Movies` });
  }, [category, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          // Use MovieCard for rendering each movie
          <MovieCard
            title={item.title}
            image={item.image}
            onPress={() => navigation.navigate('VideoPlayer', { title: item.title, videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}  // Use index to ensure uniqueness of keys
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },  // Ensuring the background is dark for movie experience
});
