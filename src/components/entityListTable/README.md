# EntityListTable Component

A reusable React Native component for displaying entity data in a table format with pagination support.

## Features

- **Generic and Reusable**: Works with any entity type by accepting configurable columns and data
- **Responsive Table Layout**: Horizontal scroll support for tables with many columns
- **Pagination**: Built-in pagination with "Previous" and "Next" buttons and page enumeration
- **Action Buttons**: Optional edit and delete actions for each row
- **Alternating Row Colors**: Better visual separation between rows
- **TypeScript Support**: Full type definitions for type-safe usage

## Purpose

This component was created to provide a consistent way to display lists of entities (pets, owners, employees, etc.) across the petshop application. It handles common table functionality like pagination and row actions, reducing code duplication and ensuring a uniform user experience.

## Usage

### Basic Usage

```tsx
import { EntityListTable } from '@/components/entityListTable';

function PetsScreen() {
  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'size', label: 'Porte' },
    { key: 'species', label: 'Espécie' },
    { key: 'furType', label: 'Tipo de Pelo' },
  ];

  const data = [
    { id: 1, name: 'Golden Retriever', size: 'Grande', species: 'Cachorro', furType: 'Longo' },
    { id: 2, name: 'Siamês', size: 'Médio', species: 'Gato', furType: 'Curto' },
    { id: 3, name: 'Poodle', size: 'Pequeno', species: 'Cachorro', furType: 'Cacheado' },
    // ... more data
  ];

  return (
    <EntityListTable
      columns={columns}
      data={data}
    />
  );
}
```

### With Actions

```tsx
import { EntityListTable } from '@/components/entityListTable';

function PetsScreen() {
  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'size', label: 'Porte' },
    { key: 'species', label: 'Espécie' },
    { key: 'furType', label: 'Tipo de Pelo' },
  ];

  const data = [
    { id: 1, name: 'Golden Retriever', size: 'Grande', species: 'Cachorro', furType: 'Longo' },
    { id: 2, name: 'Siamês', size: 'Médio', species: 'Gato', furType: 'Curto' },
  ];

  const handleEdit = (row) => {
    console.log('Edit:', row);
    // Navigate to edit screen or open modal
  };

  const handleDelete = (row) => {
    console.log('Delete:', row);
    // Show confirmation dialog and delete
  };

  return (
    <EntityListTable
      columns={columns}
      data={data}
      onEdit={handleEdit}
      onDelete={handleDelete}
      itemsPerPage={5}
    />
  );
}
```

### Custom Pagination

```tsx
<EntityListTable
  columns={columns}
  data={largeDataset}
  itemsPerPage={15}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `columns` | `TableColumn[]` | Yes | - | Array of column definitions with `key` and `label` |
| `data` | `TableRow[]` | Yes | - | Array of data rows to display. Each row must have an `id` field |
| `onEdit` | `(row: TableRow) => void` | No | - | Callback when edit button is clicked |
| `onDelete` | `(row: TableRow) => void` | No | - | Callback when delete button is clicked |
| `itemsPerPage` | `number` | No | `10` | Number of rows to display per page |

### TableColumn Interface

```typescript
interface TableColumn {
  key: string;        // The key in the data object to display
  label: string;      // The column header text
  sortable?: boolean; // Future feature flag for sortable columns
}
```

### TableRow Interface

```typescript
interface TableRow {
  id: string | number;  // Unique identifier for the row
  [key: string]: any;   // Dynamic keys matching column keys
}
```

## Styling

The component uses the global color palette defined in `globalStyles.ts`:

- **Background**: `gray1` (#F5F7FA)
- **Headers**: Bold text in `gray10` with `gray3` border
- **Rows**: Alternating `gray1` and white backgrounds
- **Action Icons**: Orange/brown tones (`brown3`, `brown4`)
- **Pagination**: Buttons in `gray2` with `gray10` text

## Pagination Behavior

- Pagination controls only appear when there is more than one page
- "Anterior" (Previous) button is disabled on the first page
- "Próxima" (Next) button is disabled on the last page
- Current page and total pages are displayed in the center
- Data is automatically sliced based on `currentPage` and `itemsPerPage`

## Examples

### For Pet Breeds (Raças)

```tsx
const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'size', label: 'Porte' },
  { key: 'species', label: 'Espécie' },
  { key: 'furType', label: 'Tipo de Pelo' },
];
```

### For Owners (Donos)

```tsx
const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Telefone' },
  { key: 'address', label: 'Endereço' },
];
```

### For Services (Serviços)

```tsx
const columns = [
  { key: 'name', label: 'Serviço' },
  { key: 'duration', label: 'Duração' },
  { key: 'price', label: 'Preço' },
];
```

## Notes

- The table is horizontally scrollable to accommodate many columns on smaller screens
- Row IDs must be unique for proper rendering and key management
- Action buttons are only rendered when `onEdit` or `onDelete` callbacks are provided
- Missing data values are displayed as "-"
