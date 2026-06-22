import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, Search, X } from "lucide-react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/medicines")({
  head: () => ({
    meta: [
      { title: "Medicines — MediCare Plus" },
      { name: "description", content: "Browse 50+ genuine medicines across categories. Filter by price, manufacturer, prescription status and more." },
    ],
  }),
  component: MedicinesPage,
});

const manufacturers = Array.from(new Set(products.map(p => p.manufacturer))).sort();

function MedicinesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [mfr, setMfr] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState(800);
  const [rxOnly, setRxOnly] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => products.filter(p => {
    if (q && !`${p.name} ${p.generic} ${p.manufacturer}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (cat !== "all" && p.category !== cat) return false;
    if (mfr !== "all" && p.manufacturer !== mfr) return false;
    if (p.price > maxPrice) return false;
    if (rxOnly && !p.prescription) return false;
    if (inStock && !p.inStock) return false;
    return true;
  }), [q, cat, mfr, maxPrice, rxOnly, inStock]);

  const filtersPanel = (
    <div className="space-y-6">
      <FilterBlock title="Category">
        <select value={cat} onChange={e => setCat(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm">
          <option value="all">All categories</option>
          {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
      </FilterBlock>
      <FilterBlock title="Manufacturer">
        <select value={mfr} onChange={e => setMfr(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm">
          <option value="all">All manufacturers</option>
          {manufacturers.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </FilterBlock>
      <FilterBlock title={`Max Price: ₹${maxPrice}`}>
        <input type="range" min={40} max={800} step={20} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-full accent-[var(--color-primary)]" />
      </FilterBlock>
      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input type="checkbox" checked={rxOnly} onChange={e => setRxOnly(e.target.checked)} className="accent-[var(--color-primary)]" /> Prescription required
      </label>
      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input type="checkbox" checked={inStock} onChange={e => setInStock(e.target.checked)} className="accent-[var(--color-primary)]" /> In stock only
      </label>
      <button onClick={() => { setQ(""); setCat("all"); setMfr("all"); setMaxPrice(800); setRxOnly(false); setInStock(false); }} className="w-full px-3 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-surface">Reset filters</button>
    </div>
  );

  return (
    <div className="container-px mx-auto max-w-7xl py-8">
      <div className="mb-6">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl">All Medicines</h1>
        <p className="text-muted-foreground mt-1">{filtered.length} of {products.length} products</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by name, generic or brand…" className="bg-transparent outline-none flex-1 text-sm min-w-0" />
        </div>
        <button onClick={() => setOpen(true)} className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-border bg-background text-sm font-semibold">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="hidden lg:block bg-card border border-border rounded-2xl p-5 self-start sticky top-32">
          <div className="font-semibold mb-4">Filters</div>
          {filtersPanel}
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground">No medicines match your filters.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-dvh w-full max-w-sm bg-background border-l border-border p-5 overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Filters</div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-surface"><X className="h-5 w-5" /></button>
            </div>
            {filtersPanel}
          </aside>
        </div>
      )}
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{title}</div>
      {children}
    </div>
  );
}
