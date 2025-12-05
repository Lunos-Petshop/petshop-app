# PetCard Component

A reusable React Native component for displaying pet information in a card format.

## Features

- Displays pet image with overlay text
- Shows pet name and breed
- Shows owner information
- Responsive design with proper shadows and rounded corners
- TypeScript support with full type definitions

## Usage

```tsx
import { PetCard } from '@/components';

function MyComponent() {
  return (
    <PetCard
      name="Buddy"
      breed="Golden Retriever"
      ownerName="Sophia Clark"
      imageSource={require('@/assets/images/pet.png')}
    />
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | The name of the pet |
| `breed` | `string` | Yes | The breed of the pet |
| `ownerName` | `string` | Yes | The name of the pet's owner |
| `imageSource` | `ImageSourcePropType` | Yes | The image source for the pet photo |

## Styling

The component has a fixed width of 288px and uses the following design tokens:

- Border radius: 16px
- Shadow elevation: 5
- Image height: 280px
- Font sizes: 28px (pet name), 16px (breed), 18px (owner name), 14px (owner label)

## Example in Animals Screen

The component is currently being used in the `app/(drawer)/animals.tsx` screen as a demonstration.
