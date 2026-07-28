import { useState } from "react";
import { useBundle } from "../../context/BundleContext";
import StepAccordion from "./StepAccordion";

function Builder() {
  const { steps, openStep, setOpenStep } = useBundle();
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step) => (
        <StepAccordion
          key={step.id}
          step={step}
          isOpen={openStep === step.id}
          onToggle={() => setOpenStep(step.id)}
        />
      ))}
    </div>
  );
}

export default Builder;
