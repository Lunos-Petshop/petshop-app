# Contact Info Card Component

A simple and elegant info card component designed to display user-friendly contact information with an icon and text.

## Description

The ContactInfoCard component provides a clean, consistent way to display contact information throughout the Lunos Petshop app. It features an icon on the left side with a title and subtitle text on the right, making it perfect for displaying addresses, phone numbers, email addresses, or other contact details.

## Purpose

The principal goal of this component is to display contact information in a visually appealing and easily scannable format. It can be used for:
- Business address information
- Phone and email contact details
- Social media links
- Operating hours
- Any other contact-related information

## Usage

```tsx
import { ContactInfoCard } from '@/components/contact-info-card';

// Address card
<ContactInfoCard 
  icon="📍" 
  title="Address" 
  subtitle="123 Maple Street, Anytown, CA 91234"
/>

// Phone card
<ContactInfoCard 
  icon="📞" 
  title="Phone" 
  subtitle="+1 (555) 123-4567"
/>

// Email card
<ContactInfoCard 
  icon="✉️" 
  title="Email" 
  subtitle="info@lunospetshop.com"
/>

// Hours card
<ContactInfoCard 
  icon="🕐" 
  title="Business Hours" 
  subtitle="Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
/>
```

## Props

- `icon` (string, required): The icon character to display on the left side (e.g., "📍", "📞", "✉️")
- `title` (string, required): The title/label for the contact information (e.g., "Address", "Phone")
- `subtitle` (string, required): The actual contact information to display (e.g., the address, phone number, etc.)

## Design

The component features:
- Light gray background (#F5F7FA) for subtle contrast
- Orange/brown icon color matching the app's theme
- Clear typography hierarchy with bold title and regular subtitle
- Rounded corners (12px border radius) for a modern look
- Proper spacing and padding for visual comfort
- Responsive layout that adapts to different text lengths
