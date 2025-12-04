import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export default function LunosLogo({ size = 'medium', showText = true }: LogoProps) {
  const iconSize = size === 'small' ? 30 : size === 'large' ? 50 : 40;
  const fontSize = size === 'small' ? 16 : size === 'large' ? 28 : 22;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="paw" size={iconSize} color="#6366f1" />
      </View>
      {showText && (
        <Text style={[styles.text, { fontSize }]}>Lunos Petshop</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
});
