import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 120,
  },
  primaryButton: {
    backgroundColor: '#FFD4A3',
  },
  secondaryButton: {
    backgroundColor: '#E0E0E0',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFD4A3',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
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
    color: '#000000',
  },
  secondaryText: {
    color: '#000000',
  },
  outlineText: {
    color: '#FFD4A3',
  },
  disabledText: {
    color: '#666666',
  },
  icon: {
    marginRight: 8,
    fontSize: 20,
  },
});