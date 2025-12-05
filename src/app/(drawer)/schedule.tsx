import { View, Text, StyleSheet } from "react-native";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <Text>Manage appointments and schedules here</Text>
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
