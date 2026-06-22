import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Upload, ShieldCheck, Truck, Lock, Award, ArrowRight, Star, Sparkles } from "lucide-react";
import { products, categories, testimonials, blogPosts, faqs } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Disclaimer } from "@/components/disclaimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCare Plus — Your Trusted Online Pharmacy" },
      { name: "description", content: "Order medicines, wellness products and healthcare essentials online. 24-hour delivery, licensed pharmacists, 100% genuine products." },
      { property: "og:title", content: "MediCare Plus — Trusted Online Pharmacy" },
      { property: "og:description", content: "Genuine medicines delivered in 24 hours. Upload prescription, secure payments and 24/7 care." },
    ],
  }),
  component: Home,
});

const trustBadges = [
  { icon: ShieldCheck, label: "Genuine Products" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: Lock, label: "Secure Payments" },
  { icon: Award, label: "Licensed Pharmacy" },
];

function Home() {
  const featured = products.slice(0, 8);
  const deals = products.filter(p => p.discount >= 22).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="container-px mx-auto max-w-7xl py-12 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-5">
              <Sparkles className="h-3.5 w-3.5" /> Trusted by 2M+ families across India
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Your Trusted <span className="text-primary">Online Pharmacy</span> for Quality Healthcare
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              Order medicines, wellness products, and healthcare essentials from the comfort of your home — delivered in as little as 24 hours.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md">
              <Link to="/medicines" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:opacity-90">
                Shop Medicines <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/upload-prescription" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-border bg-background font-semibold hover:bg-surface">
                <Upload className="h-4 w-4" /> Upload Prescription
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 bg-card border border-border rounded-2xl p-2 shadow-[var(--shadow-soft)] max-w-xl">
              <Search className="h-5 w-5 text-muted-foreground ml-3 shrink-0" />
              <input placeholder="Search medicines, brands, generics…" className="bg-transparent outline-none flex-1 text-sm py-2 min-w-0" />
              <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold">Search</button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustBadges.map(b => (
                <div key={b.label} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <span className="h-9 w-9 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <b.icon className="h-4 w-4" />
                  </span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-[2rem] bg-gradient-to-br from-primary to-primary/60 p-1 shadow-[var(--shadow-glow)]">
              <div className="h-full w-full rounded-[1.85rem] bg-background grid place-items-center overflow-hidden relative">
                <img src="https://placehold.co/800x800/2563EB/ffffff/png?text=Healthcare%0AReimagined&font=poppins" alt="Pharmacy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="hidden sm:flex absolute -left-4 top-12 bg-card border border-border rounded-2xl p-4 shadow-[var(--shadow-card)] items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-accent/15 text-accent"><Truck className="h-5 w-5" /></div>
              <div className="text-xs">
                <div className="font-bold">24 hr delivery</div>
                <div className="text-muted-foreground">In 50+ cities</div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -right-4 bottom-12 bg-card border border-border rounded-2xl p-4 shadow-[var(--shadow-card)] items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/10 text-primary"><Star className="h-5 w-5 fill-current" /></div>
              <div className="text-xs">
                <div className="font-bold">4.9 / 5</div>
                <div className="text-muted-foreground">25,000+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Disclaimer />

      {/* CATEGORIES */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <SectionHeading eyebrow="Shop by need" title="Browse Categories" desc="Find exactly what you need across 10+ healthcare categories." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map(c => (
            <Link key={c.slug} to="/categories" className="group bg-card border border-border rounded-2xl p-5 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition">
              <div className="h-12 w-12 grid place-items-center rounded-xl text-2xl mb-3" style={{ background: `${c.color}1A` }}>{c.icon}</div>
              <div className="font-semibold text-sm">{c.name}</div>
              <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{c.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <SectionHeading eyebrow="Bestsellers" title="Featured Medicines" desc="Top picks from our pharmacists this week." action={<Link to="/medicines" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">View all <ArrowRight className="h-4 w-4" /></Link>} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* DEALS BANNER */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="rounded-3xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold mb-3">LIMITED TIME</div>
            <h3 className="font-display font-extrabold text-3xl lg:text-4xl">Up to 30% off on essentials</h3>
            <p className="mt-2 opacity-90 max-w-md">Stock up on vitamins, baby care and personal hygiene with our biggest discounts of the season.</p>
            <Link to="/medicines" className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-background text-primary font-semibold hover:opacity-90">
              Shop Deals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative grid grid-cols-2 gap-3">
            {deals.map(p => (
              <div key={p.id} className="bg-background text-foreground rounded-2xl p-3">
                <img src={p.image} alt={p.name} className="aspect-square w-full rounded-xl object-cover bg-surface" />
                <div className="mt-2 text-xs font-semibold line-clamp-1">{p.name}</div>
                <div className="text-xs text-accent font-bold">{p.discount}% OFF</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <SectionHeading eyebrow="Simple & secure" title="How MediCare Plus works" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["1", "Search or upload Rx", "Find your medicine or upload your prescription."],
            ["2", "Pharmacist verifies", "Licensed pharmacists review every order."],
            ["3", "Delivered to you", "Genuine medicines at your doorstep in 24 hours."],
          ].map(([n, t, d]) => (
            <div key={n} className="bg-card border border-border rounded-2xl p-6">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary text-primary-foreground font-bold">{n}</div>
              <h3 className="mt-4 font-semibold text-lg">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface mt-12">
        <div className="container-px mx-auto max-w-7xl py-14">
          <SectionHeading eyebrow="Real stories" title="Loved by 2 million+ customers" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-warning text-warning" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center font-bold text-sm">{t.name.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <SectionHeading eyebrow="Health blog" title="Insights from our experts" action={<Link to="/blog" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">All articles <ArrowRight className="h-4 w-4" /></Link>} />
        <div className="grid md:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map(p => (
            <Link key={p.slug} to="/blog" className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[var(--shadow-card)] transition">
              <img src={p.cover} alt={p.title} className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <div className="text-xs font-semibold text-primary mb-1">{p.category}</div>
                <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                <div className="mt-3 text-xs text-muted-foreground flex gap-3"><span>{p.date}</span><span>·</span><span>{p.readTime}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-px mx-auto max-w-7xl py-14">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="grid md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-card border border-border rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-sm">
                {f.q}
                <span className="ml-3 h-6 w-6 grid place-items-center rounded-full bg-surface text-primary group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, desc, action }: { eyebrow?: string; title: string; desc?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        {eyebrow && <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{eyebrow}</div>}
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-foreground">{title}</h2>
        {desc && <p className="mt-2 text-muted-foreground max-w-2xl">{desc}</p>}
      </div>
      {action}
    </div>
  );
}
