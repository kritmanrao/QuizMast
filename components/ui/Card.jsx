export default function Card({ title, desc }) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}
