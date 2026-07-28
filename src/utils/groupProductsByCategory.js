export function groupProductsByCategory(products) {
  const groups = {
    cameras: [],
    plans: [],
    sensors: [],
    accessories: [],
  };

  products.forEach((product) => {
    switch (product.stepId) {
      case 1:
        groups.cameras.push(product);
        break;

      case 2:
        groups.plans.push(product);
        break;

      case 3:
        groups.sensors.push(product);
        break;

      case 4:
        groups.accessories.push(product);
        break;

      default:
        break;
    }
  });

  return groups;
}