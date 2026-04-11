export default function Badges({ type = "success", text = "--" }) {
  const base = `inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-inset`;

  const styles = {
    success: `${base} bg-green-500/10 text-green-400 ring-green-500/20`,
    warning: `${base} bg-amber-500/10 text-amber-400 ring-amber-500/20`,
    danger: `${base} bg-red-500/10 text-red-400 ring-red-500/20`,
  };

  return <span className={styles[type]}>{text}</span>;
}
