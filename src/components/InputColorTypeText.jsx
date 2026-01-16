export function InputColorTypeText({ colorValue, handleChange }) {
  return (
    <input
      type="text"
      className="flex-1 h-12 bg-slate-50 px-4 rounded-r-xl outline-none font-mono text-sm uppercase border border-slate-100 focus:border-accent"
      value={colorValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
