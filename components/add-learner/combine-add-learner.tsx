"use client";
import { Branch } from "@/types/server-types";
import { addLearnerSteps } from "@/constants/data";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useState } from "react";
import LearnerDetailsForm from "@/components/forms/learner-details-form";
import LicenseDetailsForm from "@/components/forms/license-details-form";
import PaymentDetailsForm from "@/components/forms/payment-details-form";

function CombineAddLearner({ branches }: { branches: Branch[] }) {
  const [step, setStep] = useState(2);
  const [learnerId, setLearnerId] = useState<number | undefined>(1);
  return (
    <div className="w-full space-y-10">
      <Stepper value={step} className="items-start gap-4">
        {addLearnerSteps.map((step) => (
          <StepperItem key={step.step} step={step.step} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-1 rounded">
              <StepperIndicator asChild className="bg-border h-1 w-full">
                <span className="sr-only">{step.title}</span>
              </StepperIndicator>
              <div className="space-y-0.5">
                <StepperTitle>{step.title}</StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>

      {step === 1 && (
        <LearnerDetailsForm
          branches={branches}
          setStep={setStep}
          setLearnerId={setLearnerId}
        />
      )}

      {step === 2 && learnerId && (
        <LicenseDetailsForm setStep={setStep} learnerId={learnerId} />
      )}

      {step === 3 && learnerId && (
        <PaymentDetailsForm setStep={setStep} learnerId={learnerId} />
      )}
    </div>
  );
}

export default CombineAddLearner;
