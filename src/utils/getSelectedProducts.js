export function getSelectedProducts(steps, bundle) {
  const selectedProducts = [];

  steps.forEach((step) => {
    step.products.forEach((product) => {
      const current = bundle[product.id];

      if (!current) return;

      // Product has variants
      if (product.variants.length) {
        product.variants.forEach((variant) => {
          const quantity = current.variants?.[variant.id] || 0;

          if (quantity > 0) {
            selectedProducts.push({
              stepId: step.id,
              category: step.title,

              productId: product.id,
              product,

              title: product.title,

              variantId: variant.id,
              variantName: variant.color,

              image: variant.image,

              quantity,

              price: product.price,
              comparePrice: product.comparePrice,
            });

            product.requiredProducts?.forEach((requiredProduct) => {
              selectedProducts.push({
                stepId: step.id,
                category: step.title,

                productId: requiredProduct.id,
                product: requiredProduct,

                title: requiredProduct.title,

                variantId: null,
                variantName: null,

                image: requiredProduct.image,

                quantity: 1,

                price: requiredProduct.price,
                comparePrice: requiredProduct.comparePrice,

                required: true,
              });
            });
          }
        });
      }

      // Product without variants
      else {
        if ((current.quantity || 0) > 0) {
          selectedProducts.push({
            stepId: step.id,
            category: step.title,

            productId: product.id,
            product,

            title: product.title,

            variantId: null,
            variantName: null,

            image: product.image,

            quantity: current.quantity,

            price: product.price,
            comparePrice: product.comparePrice,
          });

          product.requiredProducts?.forEach((requiredProduct) => {
            selectedProducts.push({
              stepId: step.id,
              category: step.title,

              productId: requiredProduct.id,
              product: requiredProduct,

              title: requiredProduct.title,

              variantId: null,
              variantName: null,

              image: requiredProduct.image,

              quantity: 1,

              price: requiredProduct.price,
              comparePrice: requiredProduct.comparePrice,

              required: true,
            });
          });
        }
      }
    });
  });

  return selectedProducts;
}