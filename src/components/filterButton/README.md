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