import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

export interface PetCardProps {
  name: string;
  breed: string;
  ownerName: string;
  imageSource: ImageSourcePropType;
}

export default function PetCard({ name, breed, ownerName, imageSource }: PetCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
        <View style={styles.petInfoOverlay}>
          <Text style={styles.petName}>{name}</Text>
          <Text style={styles.petBreed}>{breed}</Text>
        </View>
      </View>
      <View style={styles.ownerSection}>
        <Text style={styles.ownerLabel}>Owner</Text>
        <Text style={styles.ownerName}>{ownerName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 288,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  petInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    justifyContent: 'flex-end',
  },
  petName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  petBreed: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  ownerSection: {
    padding: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  ownerLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9E9E9E',
    marginBottom: 4,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
  },
});
