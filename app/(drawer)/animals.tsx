import { View, Text, StyleSheet } from "react-native";
import SearchAndFilter from "../../components/SearchAndFilter";

export default function Animals() {
    const handleSearch = (text: string) => {
        console.log('Search text:', text);
    };

    const handleFilter = () => {
        console.log('Filter button pressed');
    };

    return (
        <View style={styles.container}>
            <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
            <Text style={styles.placeholder}>Hello, here is animals</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    placeholder: {
        padding: 16,
    },
});