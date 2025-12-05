import { View, Text, StyleSheet } from "react-native";

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text>Manage services offered here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
