import { globalStyles } from '@/globalStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  circleCompleted: {
    backgroundColor: globalStyles.brown1,
    borderColor: globalStyles.brown1,
  },
  circleCurrent: {
    backgroundColor: globalStyles.brown2,
    borderColor: globalStyles.brown2,
  },
  circleUpcoming: {
    backgroundColor: globalStyles.white,
    borderColor: globalStyles.gray3,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: globalStyles.gray3,
  },
  lineCompleted: {
    backgroundColor: globalStyles.brown1,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: '600',
  },
  stepNumberCurrent: {
    color: globalStyles.white,
  },
  stepNumberUpcoming: {
    color: globalStyles.gray5,
  },
  checkIcon: {
    fontSize: 20,
    fontWeight: '700',
    color: globalStyles.gray10,
  },
  stepLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  stepLabelCompleted: {
    color: globalStyles.brown3,
  },
  stepLabelCurrent: {
    color: globalStyles.gray10,
  },
  stepLabelUpcoming: {
    color: globalStyles.gray5,
  },
});
