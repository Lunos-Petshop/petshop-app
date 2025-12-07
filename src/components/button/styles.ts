import { globalStyles } from '@/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    maxWidth: 360,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 120,
  },
  primaryButton: {
    backgroundColor: globalStyles.brown1,
  },
  secondaryButton: {
    backgroundColor: globalStyles.gray3,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: globalStyles.brown1,
  },
  disabledButton: {
    backgroundColor: globalStyles.gray4,
    opacity: 0.6,
  },
  disabledOutlineButton: {
    opacity: 0.4,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  primaryText: {
    color: globalStyles.gray10,
  },
  secondaryText: {
    color: globalStyles.gray10,
  },
  outlineText: {
    color: globalStyles.brown1,
  },
  disabledText: {
    color: globalStyles.gray7,
  },
  icon: {
    marginRight: 8,
    fontSize: 20,
  },
});