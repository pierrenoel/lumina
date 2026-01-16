export function Range({
  value,
  handleChange,
  max,
  label,
  colorClass = "range-neutral",
}) {
  return (
    <div className="w-full flex flex-col">
      <label className="text-xs font-semibold mb-2 block">
        {label}: {value} %
      </label>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className={`range range-xs ${colorClass}`}
      />
    </div>
  );
}
