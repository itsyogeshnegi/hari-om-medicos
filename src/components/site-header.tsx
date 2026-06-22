import { Link } from "@tanstack/react-router";
import { Heart, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.asset.json";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/medicines", label: "Medicines" },
  { to: "/categories", label: "Categories" },
  { to: "/upload-prescription", label: "Upload Rx" },
  { to: "/blog", label: "Health Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count, setOpen, wishlist } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-px mx-auto max-w-7xl py-2 flex items-center justify-between gap-4">
          <span>🚚 Free delivery on orders above ₹499</span>
          <span className="hidden sm:inline">📞 24/7 Care: 1800-123-4567</span>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl py-3 grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo.url} alt="MediCare Plus" className="h-10 w-10 rounded-lg object-contain bg-white" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-extrabold text-lg text-primary">MediCare<span className="text-accent">+</span></div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Health · Care · Trust</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-surface border border-border rounded-2xl px-4 py-2.5 max-w-xl mx-auto w-full">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="search"
            placeholder="Search medicines, brands, generics…"
            className="bg-transparent outline-none flex-1 text-sm min-w-0"
            aria-label="Search medicines"
          />
          <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-background border border-border text-muted-foreground">⌘K</kbd>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Link to="/login" className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-xl hover:bg-surface">
            <User className="h-4 w-4" /> Login
          </Link>
          <button aria-label="Wishlist" className="relative p-2.5 rounded-xl hover:bg-surface">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[10px] grid place-items-center rounded-full bg-accent text-accent-foreground font-bold">{wishlist.length}</span>}
          </button>
          <button aria-label="Cart" onClick={() => setOpen(true)} className="relative p-2.5 rounded-xl hover:bg-surface">
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[10px] grid place-items-center rounded-full bg-primary text-primary-foreground font-bold">{count}</span>}
          </button>
          <button aria-label="Menu" className="lg:hidden p-2.5 rounded-xl hover:bg-surface" onClick={() => setMobile(v => !v)}>
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav className="hidden lg:block border-t border-border">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-1 py-1">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to}
              className="text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-surface hover:text-primary transition"
              activeProps={{ className: "text-primary bg-primary/5" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {mobile && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px mx-auto max-w-7xl py-2 flex flex-col">
            <div className="md:hidden flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2 my-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input type="search" placeholder="Search medicines…" className="bg-transparent outline-none flex-1 text-sm min-w-0" />
            </div>
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMobile(false)}
                className="text-sm font-medium px-3 py-3 rounded-lg hover:bg-surface"
                activeProps={{ className: "text-primary bg-primary/5" }}>
                {l.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobile(false)} className="text-sm font-medium px-3 py-3 rounded-lg hover:bg-surface">Login / Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}
