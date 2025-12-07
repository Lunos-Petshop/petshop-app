import { globalStyles } from '@/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: globalStyles.gray1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
  },
  text: {
    fontSize: 14,
    color: globalStyles.gray10,
    fontWeight: '500',
  },
});