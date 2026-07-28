function ProductPrice({ product }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-base text-[rgba(216,57,43,1)] line-through">
        {product.comparePrice ? `$${product.comparePrice}` : ""}
      </h4>

      <h4 className="text-[rgba(87,87,87,1)] text-base">
        ${product.price}
      </h4>
    </div>
  );
}

export default ProductPrice;