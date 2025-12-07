import { globalStyles } from '@/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface FilterButtonProps {
  onPress: () => void;
}

export function FilterButton({ onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="options-outline" size={20} color={globalStyles.gray10} />
      <Text style={styles.text}>Filter</Text>
    </TouchableOpacity>
  );
}


