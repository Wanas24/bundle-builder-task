import { useBundle } from "../../context/BundleContext";

function NextStepButton({ currentStepId }) {
  const { steps, setOpenStep } = useBundle();

  if (currentStepId === steps.length) return null;

  const nextStep = steps.find((step) => step.id === currentStepId + 1);

  return (
    <div className="px-5 pb-5">
      <button
        onClick={() => setOpenStep(nextStep.id)}
        className="
          flex  items-center justify-center
          rounded-lg
          border
          border-secondary
          text-secondary
          transition-all
          hover:opacity-90
          w-fit
          m-auto
          px-5
          py-1
          font-semibold
          text-lg
        "
      >
        Next: {nextStep.title}
      </button>
    </div>
  );
}

export default NextStepButton;
