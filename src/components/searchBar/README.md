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