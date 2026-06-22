import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/lib/data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Blog — MediCare Plus" },
      { name: "description", content: "Expert articles on nutrition, diabetes, heart health, wellness and more from our team of pharmacists and doctors." },
    ],
  }),
  component: () => (
    <div className="container-px mx-auto max-w-7xl py-10">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl">Health Blog</h1>
      <p className="text-muted-foreground mt-2 mb-8">Trusted health insights from our pharmacists and doctors.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map(p => (
          <article key={p.slug} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[var(--shadow-card)] transition">
            <img src={p.cover} alt={p.title} className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-5">
              <div className="text-xs font-semibold text-primary mb-1">{p.category}</div>
              <h2 className="font-semibold text-lg leading-snug">{p.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
              <div className="mt-3 text-xs text-muted-foreground flex gap-3"><span>{p.date}</span><span>·</span><span>{p.readTime}</span></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  ),
});
