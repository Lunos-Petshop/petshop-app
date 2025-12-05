# Components

This directory contains reusable UI components for the Lunos Petshop app.

## Button Component

A flexible, customizable button component with multiple variants.

### Usage

```tsx
import { Button } from '@/components';

// Primary button with icon
<Button 
  title="Add New Pet" 
  icon="+" 
  onPress={handleAddPet}
/>

// Secondary button
<Button 
  title="Cancel" 
  variant="secondary"
  onPress={handleCancel}
/>

// Outline button
<Button 
  title="Learn More" 
  variant="outline"
  onPress={handleLearnMore}
/>

// Disabled button
<Button 
  title="Submit" 
  disabled={true}
  onPress={handleSubmit}
/>
```

### Props

- `title` (string, required): The text displayed on the button
- `onPress` (function, required): Callback function when button is pressed
- `icon` (string, optional): Icon character to display before the title (e.g., "+", "×", "→")
- `variant` ('primary' | 'secondary' | 'outline', optional): Button style variant (default: 'primary')
- `disabled` (boolean, optional): Whether the button is disabled (default: false)
- `style` (ViewStyle, optional): Custom styles for the button container
- `textStyle` (TextStyle, optional): Custom styles for the button text

### Variants

- **Primary**: Orange background (#FFD4A3) with black text - used for main actions
- **Secondary**: Gray background with black text - used for secondary actions
- **Outline**: Transparent background with orange border - used for tertiary actions
