import { View, Text, StyleSheet } from "react-native";

export default function Races() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Races</Text>
      <Text>Manage pet breeds/races here</Text>
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
