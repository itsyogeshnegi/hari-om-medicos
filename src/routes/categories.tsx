import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, products } from "@/lib/data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — MediCare Plus" },
      { name: "description", content: "Shop medicines by category — prescription, OTC, vitamins, diabetes, heart, skin, baby, personal care and more." },
    ],
  }),
  component: () => (
    <div className="container-px mx-auto max-w-7xl py-10">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl">All Categories</h1>
      <p className="text-muted-foreground mt-1 mb-8">10 curated healthcare categories.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map(c => {
          const count = products.filter(p => p.category === c.slug).length;
          return (
            <Link key={c.slug} to="/medicines" className="group bg-card border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition">
              <div className="h-14 w-14 grid place-items-center rounded-2xl text-3xl mb-4" style={{ background: `${c.color}1A` }}>{c.icon}</div>
              <div className="font-semibold text-lg">{c.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.description}</div>
              <div className="mt-4 text-xs font-semibold text-primary">{count} products →</div>
            </Link>
          );
        })}
      </div>
    </div>
  ),
});
