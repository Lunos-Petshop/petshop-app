import { Button } from "@/components/button";
import { FilterButton } from "@/components/filterButton";
import { PetCard } from "@/components/petcard";
import { SearchBar } from "@/components/searchBar";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../globalStyles";

// Mock data for pets
const mockPets = [
  { id: '1', name: 'Buddy', breed: 'Golden Retriever', ownerName: 'Sophia Clark', imageSource: require('../../../assets/images/icon.png') },
  { id: '2', name: 'Luna', breed: 'Siamese', ownerName: 'Liam Garcia', imageSource: require('../../../assets/images/icon.png') },
  { id: '3', name: 'Max', breed: 'German Shepherd', ownerName: 'Olivia Martinez', imageSource: require('../../../assets/images/icon.png') },
  { id: '4', name: 'Charlie', breed: 'Labrador', ownerName: 'Noah Brown', imageSource: require('../../../assets/images/icon.png') },
  { id: '5', name: 'Bella', breed: 'Persian', ownerName: 'Emma Wilson', imageSource: require('../../../assets/images/icon.png') },
  { id: '6', name: 'Rocky', breed: 'Boxer', ownerName: 'James Taylor', imageSource: require('../../../assets/images/icon.png') },
  { id: '7', name: 'Lucy', breed: 'Poodle', ownerName: 'Isabella Lee', imageSource: require('../../../assets/images/icon.png') },
  { id: '8', name: 'Milo', breed: 'Maine Coon', ownerName: 'William Harris', imageSource: require('../../../assets/images/icon.png') },
  { id: '9', name: 'Daisy', breed: 'Beagle', ownerName: 'Sophia Anderson', imageSource: require('../../../assets/images/icon.png') },
  { id: '10', name: 'Cooper', breed: 'Husky', ownerName: 'Oliver Martin', imageSource: require('../../../assets/images/icon.png') },
  { id: '11', name: 'Sadie', breed: 'Bulldog', ownerName: 'Ava Thompson', imageSource: require('../../../assets/images/icon.png') },
  { id: '12', name: 'Bailey', breed: 'Shih Tzu', ownerName: 'Ethan White', imageSource: require('../../../assets/images/icon.png') },
];

export default function Pets() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter pets based on search query
  const filteredPets = mockPets.filter(pet => 
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.ownerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPets = filteredPets.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddNewPet = () => {
    console.log('Add new pet clicked');
    // TODO: Navigate to add pet screen
  };

  const handleFilter = () => {
    console.log('Filter clicked');
    // TODO: Open filter modal
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>All Pets</Text>
        <Button 
          title="Add New Pet" 
          onPress={handleAddNewPet}
          icon="+"
          variant="primary"
          style={styles.addButton}
        />
      </View>

      {/* Search and Filter Section */}
      <View style={styles.searchSection}>
        <View style={styles.searchBarContainer}>
          <SearchBar 
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search by pet name, breed, or owner..."
          />
        </View>
        <FilterButton onPress={handleFilter} />
      </View>

      {/* Pet Cards Grid */}
      <FlatList
        data={paginatedPets}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <PetCard
              name={item.name}
              breed={item.breed}
              ownerName={item.ownerName}
              imageSource={item.imageSource}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No pets found</Text>
          </View>
        }
      />

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <View style={styles.paginationContainer}>
          <TouchableOpacity
            style={[
              styles.paginationButton,
              currentPage === 1 && styles.paginationButtonDisabled,
            ]}
            onPress={handlePreviousPage}
            disabled={currentPage === 1}
            activeOpacity={0.7}
          >
            <Ionicons
              name="chevron-back"
              size={20}
              color={currentPage === 1 ? globalStyles.gray5 : globalStyles.gray10}
            />
            <Text
              style={[
                styles.paginationButtonText,
                currentPage === 1 && styles.paginationButtonTextDisabled,
              ]}
            >
              Previous
            </Text>
          </TouchableOpacity>

          <View style={styles.pageInfo}>
            <Text style={styles.pageText}>
              Page {currentPage} of {totalPages}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.paginationButton,
              currentPage === totalPages && styles.paginationButtonDisabled,
            ]}
            onPress={handleNextPage}
            disabled={currentPage === totalPages}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.paginationButtonText,
                currentPage === totalPages && styles.paginationButtonTextDisabled,
              ]}
            >
              Next
            </Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={currentPage === totalPages ? globalStyles.gray5 : globalStyles.gray10}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.gray1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: globalStyles.gray10,
  },
  addButton: {
    minWidth: 160,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
    gap: 12,
  },
  searchBarContainer: {
    flex: 1,
  },
  gridContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  cardWrapper: {
    width: '48%',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    color: globalStyles.gray5,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: globalStyles.gray1,
    borderTopWidth: 1,
    borderTopColor: globalStyles.gray3,
  },
  paginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: globalStyles.gray2,
  },
  paginationButtonDisabled: {
    opacity: 0.4,
  },
  paginationButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: globalStyles.gray10,
    marginHorizontal: 6,
  },
  paginationButtonTextDisabled: {
    color: globalStyles.gray5,
  },
  pageInfo: {
    paddingHorizontal: 20,
  },
  pageText: {
    fontSize: 14,
    fontWeight: '600',
    color: globalStyles.gray8,
  },
});
