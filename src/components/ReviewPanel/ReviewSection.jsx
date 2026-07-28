import ReviewItem from "./ReviewItem";

function ReviewSection({ title, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="pt-2">
      <h5 className=" mb-2 uppercase tracking-[2px] text-xs text-[rgba(168,178,189,1)]">
        {title}
      </h5>

      <div className="flex flex-col gap-3 pb-3 border-b border-[rgba(206,214,222,1)]">
        {items.map((item) => (
          <ReviewItem
            key={`${item.productId}-${item.variantId}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;