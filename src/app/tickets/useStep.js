import { useState } from "react";

export function useStep(initialStep = 0) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const resetStep = () => setCurrentStep(initialStep);

  return { currentStep, nextStep, prevStep, resetStep };
}