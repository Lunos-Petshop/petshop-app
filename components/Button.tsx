import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  icon,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    disabled && (variant === 'outline' ? styles.disabledOutlineButton : styles.disabledButton),
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    disabled && styles.disabledText,
    textStyle,
  ];

  const iconStyles = [
    styles.icon,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && <Text style={iconStyles}>{icon}</Text>}
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
