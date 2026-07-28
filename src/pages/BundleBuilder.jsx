import Builder from "../components/Builder/Builder";
import ReviewPanel from "../components/ReviewPanel/ReviewPanel";

function BundleBuilder() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid gap-4 xl:grid-cols-[1fr_399px]">
          <Builder />
          <ReviewPanel />
        </div>
      </div>
    </main>
  );
}

export default BundleBuilder;
