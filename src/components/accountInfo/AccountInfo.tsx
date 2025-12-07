import { styles } from "@/components/accountInfo/styles";
import { globalStyles } from "@/globalStyles";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface AccountInfoProps {
  name?: string;
  email?: string;
  role?: string;
}

export default function AccountInfo({ 
  name = 'Employee', 
  email = 'employee@lunos.com', 
  role = 'Staff' 
}: AccountInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle" size={60} color={globalStyles.gray5} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

