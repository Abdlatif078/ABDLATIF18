import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const cafeData = [
  {
    id: '1',
    name: 'Cafe A',
    image: require('./src/images/cafe.png'),
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Cafe B',
    image: require('./src/images/cafe1.png'),
    rating: 4.2,
  },
  // Tambahkan data cafe lainnya di sini
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cafe Terdekat</Text>
      <FlatList
        data={cafeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cafeItem}>
            <Image source={item.image} style={styles.cafeImage} />
            <Text style={styles.cafeName}>{item.name}</Text>
            <Text style={styles.cafeRating}>Rating: {item.rating}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cafeItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cafeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cafeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cafeRating: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;