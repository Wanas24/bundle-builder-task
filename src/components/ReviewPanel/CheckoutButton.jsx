import { useBundle } from "../../context/BundleContext";

function CheckoutButton() {
  const { selectedProducts, totalPrice } = useBundle();

  const disabled = selectedProducts.length === 0;

  function handleCheckout() {
    const confirmed = window.confirm(
      `Proceed to checkout?\n\nItems: ${selectedProducts.length}\nTotal: $${totalPrice.toFixed(
        20.
      )}`
    );

    if (!confirmed) return;


    alert("Order placed successfully! 🎉");
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled}
      className={`
        w-full
        rounded-md
        py-3
        font-semibold
        text-white
        transition
        text-[17px]
        ${
          disabled
            ? "cursor-not-allowed bg-gray-400"
            : "cursor-pointer bg-secondary hover:opacity-90"
        }
      `}
    >
      Checkout
    </button>
  );
}

export default CheckoutButton;