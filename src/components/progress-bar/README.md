# Progress Bar Component

A visual progress indicator component for tracking multi-step processes in the Lunos Petshop ERP system.

## Description

The ProgressBar component displays the current progress through a multi-step process (such as creating, editing, deleting, or updating entities). It shows completed steps with a check mark icon filled with light brown color, highlights the current step with an orange background, and displays upcoming steps in a muted gray style.

## Purpose

This component is designed to guide users through multi-step workflows in the ERP system, providing clear visual feedback about:
- Which steps have been completed
- The current active step
- Remaining steps in the process

## Usage

```tsx
import { ProgressBar } from '@/components/progress-bar';

// Basic usage
const steps = [
  { label: 'Basic Info' },
  { label: 'Plan' },
  { label: 'Behavior' },
];

<ProgressBar 
  steps={steps}
  currentStep={2}
/>
```

### With Navigation

The ProgressBar component is designed to be used alongside Button components for navigation:

```tsx
import { ProgressBar } from '@/components/progress-bar';
import { Button } from '@/components/button';
import { useState } from 'react';

function MyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    { label: 'Basic Info' },
    { label: 'Details' },
    { label: 'Review' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View>
      <ProgressBar steps={steps} currentStep={currentStep} />
      
      <Button 
        title="Previous" 
        variant="outline"
        onPress={handlePrevious}
        disabled={currentStep === 1}
      />
      
      <Button 
        title="Next" 
        variant="primary"
        onPress={handleNext}
        disabled={currentStep === steps.length}
      />
    </View>
  );
}
```

## Props

### `steps` (Step[], required)
An array of step objects. Each step object should have:
- `label` (string): The text to display below the step circle

### `currentStep` (number, required)
The current active step number (1-indexed). For example:
- `currentStep={1}` - First step is active
- `currentStep={2}` - Second step is active
- Steps before the current step are marked as completed with a check icon
- Steps after the current step are shown as upcoming

## Visual States

### Completed Steps
- Circle filled with light brown color (#FFD0A3)
- Check mark (✓) icon displayed
- Label text in brown color
- Connecting line in brown color

### Current Step
- Circle filled with orange color (#FFB074)
- Step number displayed in white
- Label text in dark gray color

### Upcoming Steps
- Circle with gray border and white background
- Step number displayed in gray
- Label text in gray color
- Connecting line in gray color

## Example Scenarios

### Pet Registration Flow
```tsx
const petRegistrationSteps = [
  { label: 'Basic Info' },
  { label: 'Medical History' },
  { label: 'Owner Details' },
  { label: 'Confirmation' },
];

<ProgressBar steps={petRegistrationSteps} currentStep={2} />
```

### Employee Onboarding
```tsx
const onboardingSteps = [
  { label: 'Personal Info' },
  { label: 'Employment Details' },
  { label: 'Documents' },
];

<ProgressBar steps={onboardingSteps} currentStep={1} />
```
