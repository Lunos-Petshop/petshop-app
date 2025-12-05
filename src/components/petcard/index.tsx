import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { styles } from './styles';

export interface PetCardProps {
  name: string;
  breed: string;
  ownerName: string;
  imageSource: ImageSourcePropType;
}

export function PetCard({ name, breed, ownerName, imageSource }: PetCardProps) {
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


