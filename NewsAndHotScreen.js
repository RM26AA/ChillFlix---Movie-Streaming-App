import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios'; // Import axios for making API requests
import { Ionicons } from '@expo/vector-icons'; // For icons

const API_KEY = 'ADD YOUR KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

const NewsAndHotScreen = ({ navigation }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [remindMe, setRemindMe] = useState({});

  // Fetch upcoming movies from the API
  const fetchUpcomingMovies = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      setUpcomingMovies(response.data.results); // Set the upcoming movies data
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  };

  // Handle remind me button press
  const handleRemindMePress = (movieId) => {
    setRemindMe((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  // Navigate to the Movie Detail screen
  const handleCardPress = (movieId) => {
    navigation.navigate('MovieDetails', { movieId });
  };

  // Fetch movies when the component mounts
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item.id)}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.bannerImage} />
      <View style={styles.cardContent}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieDescription}>{item.overview}</Text>
        <TouchableOpacity
          style={[
            styles.remindMeButton,
            remindMe[item.id] && styles.remindMeButtonSelected,
          ]}
          onPress={() => handleRemindMePress(item.id)}
        >
          <Ionicons
            name={remindMe[item.id] ? 'notifications' : 'notifications-outline'}
            size={24}
            color={remindMe[item.id] ? 'red' : 'white'}
          />
          <Text
            style={[
              styles.remindMeText,
              remindMe[item.id] && styles.remindMeTextSelected,
            ]}
          >
            {remindMe[item.id] ? 'Reminder Set' : 'Remind Me'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>News & Hot</Text>
        {/* Empty view for symmetry */}
        <View style={{ width: 30 }} />
      </View>

      {/* List of upcoming movies */}
      <FlatList
        data={upcomingMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.movieList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 60,  // Adjusted for dynamic island
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  movieList: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  bannerImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDescription: {
    color: 'grey',
    fontSize: 14,
    marginTop: 5,
  },
  remindMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  remindMeButtonSelected: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  remindMeText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  remindMeTextSelected: {
    color: 'red',
  },
});

export default NewsAndHotScreen;


