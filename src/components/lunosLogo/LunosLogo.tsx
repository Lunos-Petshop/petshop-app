import { styles } from '@/components/lunosLogo/styles';
import { globalStyles } from '@/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

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
        <Ionicons name="paw" size={iconSize} color={globalStyles.brown3} />
      </View>
      {showText && (
        <Text style={[styles.text, { fontSize }]}>Lunos Petshop</Text>
      )}
    </View>
  );
}

