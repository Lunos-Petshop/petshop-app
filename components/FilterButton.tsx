import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FilterButtonProps {
  onPress?: () => void;
}

export default function FilterButton({ onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="options-outline" size={20} color="#333" style={styles.icon} />
      <Text style={styles.text}>Filter</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});
