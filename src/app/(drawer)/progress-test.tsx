import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { ProgressBar } from '@/components/progress-bar';
import { Button } from '@/components/button';
import { globalStyles } from '@/globalStyles';

export default function ProgressBarDemo() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: 'Basic Info' },
    { label: 'Plan' },
    { label: 'Behavior' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Progress Bar Component Demo</Text>
        <Text style={styles.subtitle}>Current Step: {currentStep} of {steps.length}</Text>

        <View style={styles.progressContainer}>
          <ProgressBar steps={steps} currentStep={currentStep} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Previous"
            variant="outline"
            onPress={handlePrevious}
            disabled={currentStep === 1}
            style={styles.button}
          />

          <Button
            title="Next"
            variant="primary"
            onPress={handleNext}
            disabled={currentStep === steps.length}
            style={styles.button}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            • Completed steps show a check mark (✓) with light brown background
          </Text>
          <Text style={styles.infoText}>
            • Current step is highlighted in orange
          </Text>
          <Text style={styles.infoText}>
            • Upcoming steps are shown in gray
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.white,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: globalStyles.gray10,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: globalStyles.gray7,
    marginBottom: 32,
  },
  progressContainer: {
    backgroundColor: globalStyles.gray1,
    borderRadius: 12,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 32,
  },
  button: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: globalStyles.gray1,
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: globalStyles.gray8,
    marginBottom: 8,
  },
});
