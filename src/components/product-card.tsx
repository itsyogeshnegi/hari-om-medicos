import { Heart, Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWish, wishlist } = useCart();
  const wished = wishlist.includes(product.id);
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col transition hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5">
      <div className="relative aspect-square bg-surface overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount > 0 && <span className="px-2 py-1 rounded-md bg-accent text-accent-foreground text-[10px] font-bold">{product.discount}% OFF</span>}
          {product.prescription && <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold">Rx</span>}
        </div>
        <button
          aria-label="Add to wishlist"
          onClick={() => toggleWish(product.id)}
          className="absolute top-2 right-2 h-9 w-9 grid place-items-center rounded-full bg-background/90 backdrop-blur hover:bg-background border border-border">
          <Heart className={`h-4 w-4 ${wished ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 grid place-items-center bg-foreground/40">
            <span className="px-3 py-1 rounded-md bg-background text-foreground text-xs font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{product.manufacturer}</div>
        <h3 className="font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        <div className="text-xs text-muted-foreground line-clamp-1">{product.generic}</div>
        <div className="flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="font-semibold">{product.rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-lg font-bold text-foreground">₹{product.price}</span>
          {product.discount > 0 && <span className="text-xs text-muted-foreground line-through">₹{product.mrp}</span>}
        </div>
        <button
          disabled={!product.inStock}
          onClick={() => add(product)}
          className="mt-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
