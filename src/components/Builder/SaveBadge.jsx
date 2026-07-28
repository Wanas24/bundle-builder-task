function SaveBadge({ text }) {
  if (!text) return null;

  return (
    <span className="absolute top-0 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
      {text}
    </span>
  );
}

export default SaveBadge;