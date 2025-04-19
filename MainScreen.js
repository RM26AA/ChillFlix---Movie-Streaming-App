import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';  // For icons

const API_KEY = 'ADD YOUR KEY';  // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

const genres = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 53, name: 'Thriller' },
  { id: 10749, name: 'Romance' },
  { id: 80, name: 'Crime' },
  { id: 16, name: 'Animation' },
  { id: 10751, name: 'Family' },
  { id: 10402, name: 'Music' },
];

const MainScreen = ({ navigation }) => {
  const [movies, setMovies] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Popular Movies');

  // Fetch movies for multiple genres
  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = {};
      try {
        // Fetch popular movies
        const popularMovies = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
        movieData.popular = popularMovies.data.results;

        // Fetch movies for each genre
        for (let genre of genres) {
          const genreMovies = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&language=en-US`
          );
          movieData[genre.name] = genreMovies.data.results;
        }

        setMovies(movieData);
        setFilteredMovies(movieData.popular);  // Initially display popular movies
      } catch (error) {
        console.error('Error fetching movies: ', error);
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = movies[selectedGenre].filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies[selectedGenre]);
    }
  };

  // Render movie item with navigation to MovieDetailsScreen
  const renderMovies = ({ item }) => (
    <TouchableOpacity style={styles.movieBox} onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.movieImage}
      />
      <Text style={styles.movieLabel}>{item.title || item.name}</Text>
    </TouchableOpacity>
  );

  // Render genre rows and other content
  const renderGenreRow = (genreName, movies) => (
    <View style={styles.rowContainer}>
      <Text style={styles.rowTitle}>{genreName}</Text>
      <FlatList
        data={movies}
        renderItem={renderMovies}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
      </View>

      {/* Filter Bar */}
      <View style={styles.filterContainer}>
        {genres.map((genre) => (
          <TouchableOpacity key={genre.id} style={styles.filterButton} onPress={() => { setSelectedGenre(genre.name); setFilteredMovies(movies[genre.name]); }}>
            <Text style={styles.filterText}>{genre.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Movies List */}
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.keys(movies).map((genreName) => (
            <View key={genreName}>
              {renderGenreRow(genreName, movies[genreName])}
            </View>
          ))}
        </ScrollView>
      )}

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <View style={styles.navItems}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={24} color="white" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('NewsScreen')}>
            <Ionicons name="newspaper" size={24} color="white" />
            <Text style={styles.navText}>News & Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ChillScreen')}>
            <Ionicons name="person" size={24} color="white" />
            <Text style={styles.navText}>My ChillFlix</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 60,  // Adjusted for dynamic island
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 25,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    flexWrap: 'wrap',  // Ensure buttons wrap if needed
  },
  filterButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  filterText: {
    color: 'white',
    fontWeight: 'bold',
  },
  rowContainer: {
    marginBottom: 20,
  },
  rowTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
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
  loadingText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  navBar: {
    position: 'absolute',
    bottom: 0, // Raised slightly higher
    left: 0,
    right: 0,
    height: 80,   //60
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Dark background
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //padding: 30,
  },
  navItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default MainScreen;










