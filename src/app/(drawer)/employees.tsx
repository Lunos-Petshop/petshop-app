import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function Employees() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employees</Text>
      <Text>Manage employees here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalStyles.gray1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
