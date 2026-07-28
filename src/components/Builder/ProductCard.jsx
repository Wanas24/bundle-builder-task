import SaveBadge from "./SaveBadge";
import ProductPrice from "./ProductPrice";
import VariantSelector from "./VariantSelector";
import QuantityStepper from "../Shared/QuantityStepper";
import { useBundle } from "../../context/BundleContext";

function ProductCard({ product, stepId }) {
  const { bundle, getProductQuantity, togglePlan } = useBundle();

  const quantity = getProductQuantity(product);

  function handleClick() {
    if (stepId === 2) {
      togglePlan(product);
    }
  }
  return (
    <div
      onClick={handleClick}
      className={`
        w-full h-full
        flex flex-col
        xl:grid lg:grid-cols-[1fr_2fr]
        gap-3
        rounded-[10px]
        bg-white
        p-3
        border-2
        transition-all
        duration-300
        ${stepId === 2 ? "cursor-pointer" : ""}
        ${quantity > 0 ? "border-secondary" : "border-transparent"}
      `}
    >
      <picture className="relative flex  items-center h-36 xl:h-auto">
        <SaveBadge text={product.badge} />

        <img
          src={product.image}
          alt={product.title}
          className="mx-auto object-contain max-h-full xl:max-h-none"
        />
      </picture>

      <div className="flex grow flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[rgba(31,31,31,1)] line-clamp-1">
            {product.title}
          </h3>

          <div className="mt-1 text-xs font-normal text-[rgba(31,31,31,0.75)]">
            <p className="line-clamp-2">{product.description}</p>

            {stepId !== 2 && (
              <button className="text-[rgba(0,0,238,1)] underline">
                Learn More
              </button>
            )}
          </div>

          <div className="mt-2">
            <VariantSelector product={product} />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          {stepId !== 2 && (
            <QuantityStepper
              product={product}
              variantId={
                bundle[product.id]?.selectedVariant ??
                product.variants?.[0]?.id ??
                null
              }
            />
          )}

          <ProductPrice product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
