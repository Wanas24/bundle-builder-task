import QuantityStepper from "../Shared/QuantityStepper";

function ReviewItem({ item }) {
  const product = item.product;

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1">
        <img
          src={item.image}
          alt={item.title}
          className="h-[41px] w-[41px] rounded-md bg-white object-contain p-0.5"
        />

        <div>
          <p className=" text-sm text-[rgba(11,13,16,1)]">
            {item.title}
          </p>

          {item.required && (
            <p className="text-sm text-[rgba(11,13,16,1)]">
              (Required)
            </p>
          )}

          {/* {item.variantName && (
            <p className="text-sm text-gray-500">
              {item.variantName}
            </p>
          )} */}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        {item.stepId !== 2 && (
          <QuantityStepper
            product={product}
            variantId={item.variantId}
            disabled={item.required}
            review={true}
          />
        )}

        <div className="text-right">
          {item.comparePrice && (
            <p className="text-sm font-semibold text-[rgba(111,120,130,1)] line-through">
              ${(item.comparePrice * item.quantity).toFixed(2)}
            </p>
          )}

          <p className="text-sm font-semibold text-secondary">
            {item.price === 0
              ? "FREE"
              : `$${(item.price * item.quantity).toFixed(2)}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;