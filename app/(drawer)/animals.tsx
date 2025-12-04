import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  price: number;
  image: string;
  description: string;
}

const mockAnimals: Animal[] = [
  {
    id: '1',
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 2,
    price: 500,
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400',
    description: 'Friendly and playful golden retriever',
  },
  {
    id: '2',
    name: 'Luna',
    species: 'Cat',
    breed: 'Siamese',
    age: 1,
    price: 300,
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400',
    description: 'Gentle and affectionate cat',
  },
  {
    id: '3',
    name: 'Max',
    species: 'Dog',
    breed: 'German Shepherd',
    age: 3,
    price: 600,
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400',
    description: 'Loyal and intelligent companion',
  },
  {
    id: '4',
    name: 'Whiskers',
    species: 'Cat',
    breed: 'Persian',
    age: 2,
    price: 400,
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400',
    description: 'Beautiful long-haired Persian cat',
  },
  {
    id: '5',
    name: 'Charlie',
    species: 'Dog',
    breed: 'Beagle',
    age: 1,
    price: 450,
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400',
    description: 'Energetic and curious beagle puppy',
  },
  {
    id: '6',
    name: 'Mittens',
    species: 'Cat',
    breed: 'Maine Coon',
    age: 4,
    price: 500,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
    description: 'Large and friendly Maine Coon',
  },
];

export default function Animals() {
  const renderAnimalCard = ({ item }: { item: Animal }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.breed}>{item.breed}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.details}>
            {item.species} • {item.age} {item.age === 1 ? 'year' : 'years'} old
          </Text>
        </View>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available Animals</Text>
        <Text style={styles.headerSubtitle}>
          Find your perfect companion
        </Text>
      </View>
      <FlatList
        data={mockAnimals}
        renderItem={renderAnimalCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  cardContent: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  breed: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});