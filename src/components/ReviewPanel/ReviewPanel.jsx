import { useBundle } from "../../context/BundleContext";

import ReviewSection from "./ReviewSection";
import ReviewSummary from "./ReviewSummary";
import CheckoutButton from "./CheckoutButton";
import SaveSystemButton from "./SaveSystemButton";
import ShippingItem from "./ShippingItem";

function ReviewPanel() {
  const { groupedProducts, selectedProducts } = useBundle();
  const hasProducts = selectedProducts.length > 0;
  return (
    <aside
      className="grid
      grid-cols-1
      md:grid-cols-[1fr_1fr]
      md:gap-15
      md:px-15
      xl:px-[15px]
      xl:grid-cols-1
      xl:gap-0 rounded-xl bg-main-component p-[15px] h-fit"
    >
      <div>
        <div className=" pb-3 border-b border-[rgba(206,214,222,1)]">
          <span className="text-xs uppercase tracking-[2px]">Review</span>

          <h2 className="mt-3 text-[22px] font-semibold text-[rgba(31,31,31,1)]">Your security system</h2>

          <p className="mt-1  text-sm text-main-text">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
        </div>

        <div>
          <ReviewSection title="Cameras" items={groupedProducts.cameras} />

          <ReviewSection title="Plans" items={groupedProducts.plans} />

          <ReviewSection title="Sensors" items={groupedProducts.sensors} />

          <ReviewSection
            title="Accessories"
            items={groupedProducts.accessories}
          />
        </div>
        {hasProducts && <ShippingItem />}
      </div>
      <div>
        <ReviewSummary />

        <div className="mt-1 space-y-3 flex flex-col items-center">
          <CheckoutButton />
          <SaveSystemButton />
        </div>
      </div>
    </aside>
  );
}

export default ReviewPanel;
