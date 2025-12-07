import { LinearGradient } from 'expo-linear-gradient';
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
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.imageDarkOverlay}
        />
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


