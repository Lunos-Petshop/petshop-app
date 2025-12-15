import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export interface ContactInfoCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

export function ContactInfoCard({ icon, title, subtitle }: ContactInfoCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
