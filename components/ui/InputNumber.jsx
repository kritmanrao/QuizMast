export default function InputNumber({
  name,
  defaultValue = 10,
  min = 5,
  max = 20,
}) {
  return (
    <label
      htmlFor="quantity"
      className="flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <span className="text-sm font-medium">{name} :</span>
      <input
        type="number"
        name={name}
        min={min}
        id={name}
        max={max}
        defaultValue={defaultValue}
        className="w-8 [appearance:textfield] bg-transparent text-center outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </label>
  );
}
