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
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
