import { useBundle } from "../../context/BundleContext";
import badge from "../../assets/images/SatisfactionBadge.png";

function ReviewSummary() {
  const { totalPrice, totalComparePrice, totalSaving } = useBundle();

  return (
    <div className="  pt-4">
      <div className="flex justify-between items-center gap-2 md:hidden xl:flex">
        <img className="w-[78px] object-contain" src={badge} alt="" />
        <div className="flex flex-col gap-2">
          <span className="self-end text-xs rounded bg-secondary px-2 py-1 text-center text-white w-fit">
            as low as $19.19/mo
          </span>
          <div className="flex items-center justify-end gap-2">
            {totalComparePrice > totalPrice && (
              <h3 className="text-lg text-[rgba(111,120,130,1)] line-through">
                ${totalComparePrice.toFixed(2)}
              </h3>
            )}

            <h2 className="text-2xl font-bold text-secondary">
              ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      </div>
      
      <div className=" tablet-version  justify-between  gap-7 hidden md:flex xl:hidden">
        <div className="flex flex-col gap-4 ">
          <img className="w-[131px] object-contain" src={badge} alt="" />
          <span className="whitespace-nowrap rounded bg-secondary px-2 py-1 text-center text-white text-base">
            as low as $19.19/mo
          </span>
        </div>

        <div className="flex flex-col justify-between flex-1 ">
            <div className="flex flex-col gap-3 pt-6">
                <h3 className="font-semibold text-lg text-color-[rgba(31,31,31,1)]">30-day hassle-free returns</h3>
                <p className="text-sm text-color-[rgba(31,31,31,1)]">If you're not totally in love with the product, we will refund you 100%.</p>
            </div>
          <div className="flex items-center justify-end gap-2">
            {totalComparePrice > totalPrice && (
              <h3 className="text-lg text-[rgba(111,120,130,1)] line-through">
                ${totalComparePrice.toFixed(2)}
              </h3>
            )}

            <h2 className="text-2xl font-bold text-secondary">
              ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      </div>

      {totalSaving > 0 && (
        <span className="m-auto mt-3 text-center block text-xs font-semibold text-[rgba(10,162,136,1)]">
          Congrats! You're saving ${totalSaving.toFixed(2)} on your security
          bundle!
        </span>
      )}
    </div>
  );
}

export default ReviewSummary;
