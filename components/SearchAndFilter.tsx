import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

interface SearchAndFilterProps {
  onSearch?: (text: string) => void;
  onFilter?: () => void;
}

export default function SearchAndFilter({ onSearch, onFilter }: SearchAndFilterProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    onSearch?.(text);
  };

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchText}
        onChangeText={handleSearchChange}
      />
      <FilterButton onPress={onFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
});
