import { globalStyles } from '@/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: globalStyles.gray1,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.gray3,
    alignItems: 'center',
    marginBottom: 10,
  },

  avatarContainer: {
    marginBottom: 10,
  },

  infoContainer: {
    alignItems: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalStyles.gray9,
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: globalStyles.gray7,
    marginBottom: 4,
  },

  role: {
    fontSize: 12,
    color: globalStyles.gray5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
