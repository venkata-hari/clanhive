import { FeatureCard } from "./FeatureCard";
import { Reveal } from "./Reveal";
import type { Feature } from "@/data/features";

export function FeatureGrid({
  items,
  columns = 4,
}: {
  items: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <div className={`grid gap-5 ${cols}`}>
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % 4) * 70}>
          <FeatureCard {...f} />
        </Reveal>
      ))}
    </div>
  );
}
