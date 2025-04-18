import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

const VideoPlayerScreen = ({ route }) => {
  const { title, videoUrl } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Cleanup function to reset state when the component is unmounted
    return () => {
      setLoading(false);
      setError(false);
    };
  }, []);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = (err) => {
    setLoading(false);
    setError(true);
    console.log('Video error:', err);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {loading && (
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      )}
      {error ? (
        <Text style={styles.errorText}>Failed to load video. Please try again later.</Text>
      ) : (
        <Video
          source={{ uri: videoUrl }} // Pass the video URL
          style={styles.videoPlayer}
          controls={true} // Add controls for play/pause, volume, etc.
          resizeMode="contain" // Optional: Change how the video fits into the screen
          onLoad={handleLoad}
          onError={handleError}
          onLoadStart={() => setLoading(true)} // Set loading true when the video starts loading
          onEnd={() => setLoading(false)} // Set loading false when the video ends
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  videoPlayer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2, // Adjust the height as needed
  },
  loader: {
    position: 'absolute', // Position loader on top of the video
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
    marginTop: 10,
  },
});

export default VideoPlayerScreen;
