import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';  // For icons

const API_KEY = 'ADD YOUR KEY';  // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetailsScreen = ({ route, navigation }) => {
  const { movieId } = route.params;  // Get the movie ID from the route params
  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch movie details
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailsResponse = await axios.get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        setMovieDetails(detailsResponse.data);

        // Fetch similar movies
        const similarResponse = await axios.get(
          `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`
        );
        setSimilarMovies(similarResponse.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const {
    title,
    release_date,
    poster_path,
    backdrop_path,
    overview,
    adult,
    vote_average,
  } = movieDetails;

  return (
    <ScrollView style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()} // Navigate back to MainScreen
      >
        <Ionicons name="close" size={30} color="white" style={styles.closeIcon} />
      </TouchableOpacity>

      {/* Banner Image */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }}
        style={styles.bannerImage}
      />
      
      {/* Movie Title */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Year, Age Rating, HD, and 4K */}
      <View style={styles.yearRatingContainer}>
        <Text style={styles.year}>{new Date(release_date).getFullYear()}</Text>
        <Text style={styles.ageRating}>{adult ? '18+' : 'PG-13'}</Text>
        <View style={styles.iconsContainer}>
          <Ionicons name="videocam" size={20} color="white" style={styles.icon} />
          <Text style={styles.iconText}>HD</Text>
          <Ionicons name="tv" size={20} color="white" style={styles.icon} />
          <Text style={styles.iconText}>4K</Text>
        </View>
      </View>

      {/* Play and Download Buttons */}
      <View style={styles.buttonContainer}>
        {/* Play Button */}
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={20} color="white" style={styles.playIcon} />
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
        
        {/* Download Button */}
        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons name="download" size={20} color="white" style={styles.downloadIcon} />
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>

      {/* Movie Description */}
      <Text style={styles.description}>{overview}</Text>

      {/* Action Icons */}
      <View style={styles.actionIcons}>
        <TouchableOpacity style={styles.addToListButton}>
          <Ionicons name="add-circle" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rateButton}>
          <Ionicons name="thumbs-up" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-social" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* More Like This */}
      <Text style={styles.moreLikeThis}>More Like This</Text>
      <FlatList
        data={similarMovies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movieBox}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.movieImage}
            />
            <Text style={styles.movieLabel}>{item.title || item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bannerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  yearRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  year: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  ageRating: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  iconText: {
    color: 'white',
    fontSize: 16,
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  playButton: {
    backgroundColor: 'red',  // Change background to red
    padding: 10,
    borderRadius: 5,
    flex: 0.48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center both icon and text
  },
  playIcon: {
    marginRight: 10,
  },
  playText: {
    textAlign: 'center',
    color: 'white',  // Change text color to white
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    flex: 0.48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center both icon and text
  },
  downloadIcon: {
    marginRight: 10,
  },
  downloadText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  addToListButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  rateButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  shareButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  moreLikeThis: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  movieBox: {
    marginRight: 10,
    width: 120,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
    margin: 10,
  },
  movieLabel: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'red',  // Red background for the close button
    borderRadius: 10,
    padding: 10,
    zIndex: 1,  // Ensure it's on top of other elements
  },
  closeIcon: {
    color: 'white',
  },
});

export default MovieDetailsScreen;




