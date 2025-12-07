# Components

This directory contains reusable UI components for the Lunos Petshop application.

## Available Components

### SearchBar

A search input component with an icon for filtering pets or other content.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | Yes | - | The current value of the search input |
| `onChangeText` | `(text: string) => void` | Yes | - | Callback function called when the text changes |
| `placeholder` | `string` | No | `"Search by pet name, race, or owner..."` | Placeholder text for the input |

#### Usage

```tsx
import { SearchBar } from '../../components';
import { useState } from 'react';

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchBar
      value={searchQuery}
      onChangeText={setSearchQuery}
      placeholder="Search pets..." // optional
    />
  );
}
```

#### Styling

- Background: `#F5F5F5` (light gray)
- Border radius: `8px`
- Icon: Ionicons `search` (size: 20, color: `#999`)
- Font size: `14px`

---

### FilterButton

A touchable button component for triggering filter functionality.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onPress` | `() => void` | Yes | Callback function called when the button is pressed |

#### Usage

```tsx
import { FilterButton } from '../../components';

function MyComponent() {
  const handleFilterPress = () => {
    console.log("Filter button pressed");
    // Implement your filter logic here
  };

  return (
    <FilterButton onPress={handleFilterPress} />
  );
}
```

#### Styling

- Background: `#F5F5F5` (light gray)
- Border radius: `8px`
- Icon: Ionicons `options-outline` (size: 20, color: `#333`)
- Text: "Filter" (font size: `14px`, font weight: `500`)

---

## Combined Usage Example

Here's how to use both components together, as demonstrated in the Animals page:

```tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
      {/* Your other content */}
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
});
```

## Import Methods

You can import components individually or together:

```tsx
// Import specific components
import { SearchBar } from '../../components';
import { FilterButton } from '../../components';

// Import multiple components
import { SearchBar, FilterButton } from '../../components';
```

## Dependencies

These components require the following packages:
- `react-native` (View, TextInput, TouchableOpacity, Text, StyleSheet)
- `@expo/vector-icons` (Ionicons)

Make sure these dependencies are installed in your project.

## Design Notes

Both components use consistent styling:
- Same background color (`#F5F5F5`)
- Same border radius (`8px`)
- Similar padding for visual consistency
- Designed to be used together in a horizontal layout

The SearchBar uses `flex: 1` to take up available space, while the FilterButton has a fixed width based on its content.
