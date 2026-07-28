import shippingIcon from "../../assets/images/FastShipping.png";

function ShippingItem() {
  return (
    <>
      <div className="flex justify-between pt-3">
        <div className="flex items-center gap-1">
          <img
            src={shippingIcon}
            alt="shiping Icon"
            className="h-[41px] w-[41px] rounded-md bg-white object-contain p-0.5"
          />

          <div>
            <p className="text-sm text-[rgba(11,13,16,1)]">Fast Shipping</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="text-right">
            <p className="font-semibold text-sm text-[rgba(111,120,130,1)] line-through">$5.99</p>

            <p className="font-semibold text-sm text-secondary">FREE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingItem;
