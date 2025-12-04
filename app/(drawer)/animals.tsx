import { View, StyleSheet } from "react-native";
import { PetCard } from "@/components";

export default function Animals() {
    return (
        <View style={styles.container}>
            <PetCard 
                name="Buddy"
                breed="Golden Retriever"
                ownerName="Sophia Clark"
                imageSource={require("@/assets/images/icon.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
});