import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            {columns.map((column) => (
              <View key={column.key} style={styles.headerCell}>
                <Text style={styles.headerText}>{column.label}</Text>
              </View>
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
                        <Ionicons name="pencil" size={18} color="#FF8C3B" />
                      </TouchableOpacity>
                    )}
                    {onDelete && (
                      <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => onDelete(row)}
                        activeOpacity={0.7}
                      >
                        <Ionicons name="trash-outline" size={18} color="#FF6D00" />
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
            <Ionicons
              name="chevron-back"
              size={20}
              color={currentPage === 1 ? '#CBD2D9' : '#1F2933'}
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
            <Ionicons
              name="chevron-forward"
              size={20}
              color={currentPage === totalPages ? '#CBD2D9' : '#1F2933'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
