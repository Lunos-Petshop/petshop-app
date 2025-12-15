import { globalStyles } from '@/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: globalStyles.gray1,
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: globalStyles.brown3,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: globalStyles.gray10,
  },
  subtitle: {
    fontSize: 14,
    color: globalStyles.gray6,
    lineHeight: 20,
  },
});
