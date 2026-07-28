import ChevronUp from "../../assets/icons/chevron-up.svg";
import ChevronDown from "../../assets/icons/chevron-down.svg";
import ProductCard from "./ProductCard";
import NextStepButton from "./NextStepButton";
import { useBundle } from "../../context/BundleContext";

function StepAccordion({ step, isOpen, onToggle }) {
  const { selectedProducts } = useBundle();

  const selectedCount = selectedProducts
    .filter((item) => item.stepId === step.id && !item.required)
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={`overflow-hidden rounded-md ${isOpen ? "bg-main-component" : ""} `}
    >
      <span className="block  uppercase tracking-[2px] text-xs text-[rgba(72, 72, 72, 1)] px-5 pb-2 pt-4 ">
        {step.step}
      </span>
      <button
        onClick={onToggle}
        className={`flex w-full items-center justify-between  px-5 py-4 ${isOpen ? "border-t" : "border-y"}  border-[rgba(31, 31, 31, 1)]`}
      >
        <div className="flex  flex-col ">
          <div className="flex items-center  gap-3">
            <img src={step.icon} alt="" />
            <h2 className=" text-[22px] font-semibold">{step.title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-secondary">{selectedCount} selected</p>

          <img src={isOpen ? ChevronUp : ChevronDown} alt="" className="w-4" />
        </div>
      </button>

      {isOpen && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-2 2xl:grid-cols-5 gap-5 pb-5 px-5">
            {step.products.map((product, index) => {
              const isLastOdd =
                step.products.length % 2 !== 0 &&
                index === step.products.length - 1;

              return (
                <div
                  key={product.id}
                  className={
                    isLastOdd
                      ? "xl:col-span-2 mx-auto xl:w-1/2 w-full"
                      : "w-full"
                  }
                >
                  <ProductCard product={product} stepId={step.id} />
                </div>
              );
            })}
          </div>
          <NextStepButton currentStepId={step.id} />
        </div>
      )}
    </div>
  );
}

export default StepAccordion;
