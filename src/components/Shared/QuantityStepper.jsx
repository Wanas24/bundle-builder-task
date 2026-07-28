import { useBundle } from "../../context/BundleContext";

function QuantityStepper({
  product,
  variantId = null,
  disabled = false,
  review = false,
}) {
  const { bundle, getProductQuantity, increaseQuantity, decreaseQuantity } =
    useBundle();

  let quantity = 0;

  if (product?.variants?.length) {
    quantity = bundle[product.id]?.variants?.[variantId] || 0;
  } else if (product) {
    quantity = getProductQuantity(product);
  }

  if (disabled) {
    quantity = 1;
  }

  const minusButtonClass = disabled
    ? "!cursor-not-allowed border border-[rgba(206,214,222,1)] bg-[rgba(241,241,242,1)] text-[rgba(87,87,87,1)]"
    : quantity === 0
      ? review
        ? "!cursor-not-allowed border border-[rgba(10,162,136,1)] bg-white text-[rgba(87,87,87,1)]"
        : "!cursor-not-allowed border-2 border-[rgba(230,235,240,1)] text-[rgba(230,235,240,1)]"
      : review
        ? "bg-[rgba(255,255,255,1)] text-[rgba(87,87,87,1)]"
        : "bg-[rgba(240,244,247,1)] text-[rgba(82,89,99,1)]";

  const plusButtonClass = disabled
    ? "!cursor-not-allowed border border-[rgba(206,214,222,1)] bg-[rgba(241,241,242,1)] text-[rgba(87,87,87,1)]"
    : review
      ? "bg-[rgba(255,255,255,1)] text-[rgba(87,87,87,1)]"
      : "bg-[rgba(240,244,247,1)] text-[rgba(82,89,99,1)]";

  return (
    <div className="flex items-center gap-1 px-1 py-2">
      <button
        disabled={disabled}
        onClick={() => decreaseQuantity(product, variantId)}
        className={`flex h-5 w-5  pb-0.5 items-center justify-center rounded ${minusButtonClass}`}
      >
        <span>-</span>
      </button>

      <h4 className="w-4 text-[16px] text-center text-[rgba(11,13,16,1)]">
        {quantity}
      </h4>

      <button
        disabled={disabled}
        onClick={() => increaseQuantity(product, variantId)}
        className={`flex h-5 w-5 pb-0.5 items-center justify-center rounded ${plusButtonClass}`}
      >
        <span >+</span>
      </button>
    </div>
  );
}

export default QuantityStepper;
