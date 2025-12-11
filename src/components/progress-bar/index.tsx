import { styles } from '@/components/progress-bar/styles';
import React from 'react';
import { View, Text } from 'react-native';

export interface Step {
  label: string;
}

export interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        const isUpcoming = stepNumber > currentStep;

        return (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepRow}>
              {/* Connecting line before the circle (except for the first step) */}
              {index > 0 && (
                <View
                  style={[
                    styles.line,
                    isCompleted && styles.lineCompleted,
                    isCurrent && styles.lineCompleted,
                  ]}
                />
              )}

              {/* Step circle */}
              <View
                style={[
                  styles.circle,
                  isCompleted && styles.circleCompleted,
                  isCurrent && styles.circleCurrent,
                  isUpcoming && styles.circleUpcoming,
                ]}
              >
                {isCompleted ? (
                  <Text style={styles.checkIcon}>✓</Text>
                ) : (
                  <Text
                    style={[
                      styles.stepNumber,
                      isCurrent && styles.stepNumberCurrent,
                      isUpcoming && styles.stepNumberUpcoming,
                    ]}
                  >
                    {stepNumber}
                  </Text>
                )}
              </View>

              {/* Connecting line after the circle (except for the last step) */}
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    isCompleted && styles.lineCompleted,
                  ]}
                />
              )}
            </View>

            {/* Step label */}
            <Text
              style={[
                styles.stepLabel,
                isCompleted && styles.stepLabelCompleted,
                isCurrent && styles.stepLabelCurrent,
                isUpcoming && styles.stepLabelUpcoming,
              ]}
            >
              {step.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
