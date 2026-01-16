export function InputColorTypeColor({ colorValue, handleChange }) {
  return (
    <input
      type="color"
      className="h-12 w-12 cursor-pointer p-0 border-0 appearance-none bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded rounded overflow-hidden"
      value={colorValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
