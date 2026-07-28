import { useBundle } from "../../context/BundleContext";

function SaveSystemButton() {
  const { bundle, selectedProducts } = useBundle();

  function handleSave() {
    if (!selectedProducts.length) {
      alert("Please select at least one product.");
      return;
    }

    localStorage.setItem("bundle", JSON.stringify(bundle));

    alert("Your system has been saved.");
  }

  return (
    <button
      onClick={handleSave}
    //   disabled={!selectedProducts.length}
      className={`
        underline
        transition
        text-sm
        ${
          !selectedProducts.length
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:opacity-80"
        }

        text-[rgba(72,72,72,1)]
      `}
    >
      Save my system for later
    </button>
  );
}

export default SaveSystemButton;