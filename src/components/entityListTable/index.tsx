import { globalStyles } from '@/globalStyles';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableRow {
  id: string | number;
  [key: string]: any;
}

export interface EntityListTableProps {
  columns: TableColumn[];
  data: TableRow[];
  onEdit?: (row: TableRow) => void;
  onDelete?: (row: TableRow) => void;
  itemsPerPage?: number;
}

export function EntityListTable({
  columns,
  data,
  onEdit,
  onDelete,
  itemsPerPage = 10,
}: EntityListTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      // toggle: asc -> desc -> asc
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc'); // começa asc
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0; // sem sorting ainda

    const valA = a[sortColumn];
    const valB = b[sortColumn];

    // trata valores vazios
    if (valA == null) return 1;
    if (valB == null) return -1;

    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    }

    // fallback string
    return sortDirection === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

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

  return (
    <View style={styles.container}>
      {/* Table Container */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            {columns.map((column) => (
              <TouchableOpacity 
                key={column.key} 
                style={styles.headerCell}
                onPress={() => handleSort(column.key)}
                activeOpacity={0.6}
              >
                <Text style={styles.headerText}>
                  {column.label}

                  {sortColumn === column.key && (
                    sortDirection === 'asc' ? ' ▲' : ' ▼'
                  )}
                </Text>
              </TouchableOpacity>
            ))}
            {(onEdit || onDelete) && (
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>Ações</Text>
              </View>
            )}
          </View>

          {/* Table Body */}
          <View style={styles.tableBody}>
            {paginatedData.map((row, rowIndex) => (
              <View
                key={row.id}
                style={[
                  styles.tableRow,
                  rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
                ]}
              >
                {columns.map((column) => (
                  <View key={column.key} style={styles.tableCell}>
                    <Text style={styles.cellText}>{row[column.key] || '-'}</Text>
                  </View>
                ))}
                {(onEdit || onDelete) && (
                  <View style={styles.actionCell}>
                    {onEdit && (
                      <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => onEdit(row)}
                        activeOpacity={0.7}
                      >
                        <Feather name="edit-3" size={18} color={globalStyles.gray10} />
                      </TouchableOpacity>
                    )}
                    {onDelete && (
                      <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => onDelete(row)}
                        activeOpacity={0.7}
                      >
                        <Feather name="trash" size={18} color={globalStyles.red5} />
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

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
            <Feather
              name="chevron-left"
              size={20}
              color={currentPage === 1 ? globalStyles.gray3 : globalStyles.gray10}
            />
            <Text
              style={[
                styles.paginationButtonText,
                currentPage === 1 && styles.paginationButtonTextDisabled,
              ]}
            >
              Anterior
            </Text>
          </TouchableOpacity>

          <View style={styles.pageInfo}>
            <Text style={styles.pageText}>
              Página {currentPage} de {totalPages}
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
              Próxima
            </Text>
            <Feather
              name="chevron-right"
              size={20}
              color={currentPage === totalPages ? globalStyles.gray3 : globalStyles.gray10}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
