import Card from "../ui/Card";

export default function Features() {
  return (
    <section className="mt-10 grid grid-cols-3 gap-6">
      <Card title="Fast" desc="Optimized performance" />
      <Card title="Scalable" desc="Grow your app easily" />
      <Card title="Flexible" desc="Use any backend" />
    </section>
  );
}
