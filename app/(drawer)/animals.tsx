import { View, StyleSheet, Text, Alert } from "react-native";
import { Button } from "@/components";

export default function Animals() {
    const handleAddPet = () => {
        Alert.alert("Add New Pet", "Button clicked!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animals</Text>
            <Button 
                title="Add New Pet" 
                icon="+" 
                onPress={handleAddPet}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        gap: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});