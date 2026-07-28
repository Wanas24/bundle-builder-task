import { useBundle } from "../../context/BundleContext";

function VariantSelector({ product }) {
  const { bundle, setBundle } = useBundle();

  if (!product.variants.length) return null;

  function handleSelectVariant(variantId) {
    setBundle((prev) => ({
      ...prev,

      [product.id]: {
        ...prev[product.id],

        selectedVariant: variantId,

        variants: prev[product.id]?.variants || {},
      },
    }));
  }

  return (
    <div className="flex flex-wrap gap-2">
      {product.variants.map((variant) => {
        const selected =
          bundle[product.id]?.selectedVariant ?? product.variants[0].id;

        const isActive = selected === variant.id;

        return (
          <button
            key={variant.id}
            onClick={() => handleSelectVariant(variant.id)}
            className={`
               flex items-center gap-1 rounded border px-1 py-0.5 transition

              ${
                isActive
                  ? "border-[rgba(10,162,136,1)] bg-[rgba(29,240,187,.04)]"
                  : "border-gray-300"
              }
            `}
          >
            <img src={variant.image} alt="" />

            <span className="text-[rgba(31,31,31,1)] text-[10px] pe-1">{variant.color}</span>
          </button>
        );
      })}
    </div>
  );
}

export default VariantSelector;
