import { globalStyles } from '@/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.gray1,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'column',
  },

  tableContainer: {
    width: '100%',
  },

  // Table Header
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: globalStyles.gray1,
    borderBottomWidth: 2,
    borderBottomColor: globalStyles.gray3,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerCell: {
    flex: 1,
    minWidth: 120,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
    color: globalStyles.gray10,
    textTransform: 'uppercase',
  },

  // Table Body
  tableBody: {
    backgroundColor: globalStyles.gray1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.gray2,
    paddingVertical: 16,
    paddingHorizontal: 16,
    minHeight: 60,
  },
  evenRow: {
    backgroundColor: globalStyles.gray1,
  },
  oddRow: {
    backgroundColor: globalStyles.gray2,
  },

  // Table Cells
  tableCell: {
    flex: 1,
    minWidth: 120,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 14,
    fontWeight: '400',
    color: globalStyles.gray10,
  },

  // Action Cells
  actionCell: {
    flex: 1,
    minWidth: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: globalStyles.gray2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  // Pagination
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: globalStyles.gray1,
    borderTopWidth: 1,
    borderTopColor: globalStyles.gray3,
  },
  paginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: globalStyles.gray2,
  },
  paginationButtonDisabled: {
    backgroundColor: globalStyles.gray2,
    opacity: 0.5,
  },
  paginationButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: globalStyles.gray10,
    marginHorizontal: 4,
  },
  paginationButtonTextDisabled: {
    color: globalStyles.gray5,
  },
  pageInfo: {
    paddingHorizontal: 16,
  },
  pageText: {
    fontSize: 14,
    fontWeight: '600',
    color: globalStyles.gray8,
  },
});
