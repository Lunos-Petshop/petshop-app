import { globalStyles } from "@/globalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    width: '100%',
    maxWidth: 320,
    backgroundColor: globalStyles.gray1,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: globalStyles.gray10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageDarkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  petInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    justifyContent: 'flex-end',   
  },

  petName: {
    fontSize: 28,
    fontWeight: '700',
    color: globalStyles.gray1,
    marginBottom: 4,
  },
  petBreed: {
    fontSize: 16,
    fontWeight: '400',
    color: globalStyles.gray2,
  },

  ownerSection: {
    padding: 20,
    paddingTop: 16,
  },
  ownerLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: globalStyles.gray7,
    marginBottom: 4,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: '700',
    color: globalStyles.gray10,
  },
});