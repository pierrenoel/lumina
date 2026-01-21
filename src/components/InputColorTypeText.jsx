export function InputColorTypeText({ colorValue, handleChange, className }) {
  return (
    <input
      type="text"
      className={`flex-1 h-12 bg-slate-50 px-4 rounded-r-xl outline-none font-mono text-sm  border border-slate-100 focus:border-accent] ${className}`}
      value={colorValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
