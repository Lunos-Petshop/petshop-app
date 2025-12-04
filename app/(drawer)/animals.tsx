import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar, FilterButton } from "../../components";

export default function Animals() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleFilterPress = () => {
        console.log("Filter button pressed");
        // TODO: Implement filter functionality
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <FilterButton onPress={handleFilterPress} />
            </View>
            <Text style={styles.placeholder}>Hello, here is animals</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    placeholder: {
        fontSize: 16,
        color: '#666',
    },
});