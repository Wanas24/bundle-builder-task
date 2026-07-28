import { createContext, useContext, useState } from "react";
import { steps as initialSteps } from "../data/steps";
import { getSelectedProducts } from "../utils/getSelectedProducts";
import { groupProductsByCategory } from "../utils/groupProductsByCategory";

const BundleContext = createContext();

function BundleProvider({ children }) {
  const [steps, setSteps] = useState(initialSteps);

  const [openStep, setOpenStep] = useState(1);

  const [bundle, setBundle] = useState(() => {
    const savedBundle = localStorage.getItem("bundle");

    return savedBundle ? JSON.parse(savedBundle) : {};
  });

  const selectedProducts = getSelectedProducts(steps, bundle);

  const groupedProducts = groupProductsByCategory(selectedProducts);

  function increaseQuantity(product, variantId = null) {
    setBundle((prev) => {
      const current = prev[product.id] || {};

      if (product.variants.length) {
        const selectedVariant =
          variantId ??
          current.selectedVariant ??
          product.variants[0].id;

        return {
          ...prev,

          [product.id]: {
            ...current,

            selectedVariant,

            variants: {
              ...current.variants,

              [selectedVariant]:
                (current.variants?.[selectedVariant] || 0) + 1,
            },
          },
        };
      }

      return {
        ...prev,

        [product.id]: {
          quantity: (current.quantity || 0) + 1,
        },
      };
    });
  }

  function decreaseQuantity(product, variantId = null) {
    setBundle((prev) => {
      const current = prev[product.id];

      if (!current) return prev;

      if (product.variants.length) {
        const selectedVariant =
          variantId ??
          current.selectedVariant ??
          product.variants[0].id;

        const quantity =
          current.variants?.[selectedVariant] || 0;

        return {
          ...prev,

          [product.id]: {
            ...current,

            variants: {
              ...current.variants,

              [selectedVariant]: Math.max(quantity - 1, 0),
            },
          },
        };
      }

      return {
        ...prev,

        [product.id]: {
          quantity: Math.max((current.quantity || 0) - 1, 0),
        },
      };
    });
  }

  function togglePlan(product) {
  setBundle((prev) => {
    const current = prev[product.id];

    // لو متحدد بالفعل → شيله
    if (current?.quantity === 1) {
      return {
        ...prev,
        [product.id]: {
          quantity: 0,
        },
      };
    }

    // لو مش متحدد → حدده
    return {
      ...prev,
      [product.id]: {
        quantity: 1,
      },
    };
  });
}

  function getProductQuantity(product) {
    const current = bundle[product.id];

    if (!current) return 0;

    if (product.variants.length) {
      const selectedVariant =
        current.selectedVariant ??
        product.variants[0].id;

      return current.variants?.[selectedVariant] || 0;
    }

    return current.quantity || 0;
  }

  const totalPrice = selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalComparePrice = selectedProducts.reduce(
    (sum, item) =>
      sum + (item.comparePrice || item.price) * item.quantity,
    0
  );

  const totalSaving = totalComparePrice - totalPrice;

  const value = {
    steps,
    setSteps,

    openStep,
    setOpenStep,

    bundle,
    setBundle,

    increaseQuantity,
    decreaseQuantity,

    getProductQuantity,

    selectedProducts,
    groupedProducts,

    totalPrice,
    totalComparePrice,
    totalSaving,

    togglePlan,
  };

  return (
    <BundleContext.Provider value={value}>
      {children}
    </BundleContext.Provider>
  );
}

function useBundle() {
  const context = useContext(BundleContext);

  if (!context) {
    throw new Error("useBundle must be used inside BundleProvider");
  }

  return context;
}

export { BundleProvider, useBundle };