import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/medicines", label: "Medicines" },
  // { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/medicines?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal("");
      setMobile(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-px mx-auto max-w-7xl py-2 flex items-center justify-between gap-4">
          <span>🚚 Free delivery under 3km (orders &gt; ₹299) &amp; under 5km (orders &gt; ₹499)</span>
          <span className="hidden sm:inline">
            📞 Support:{" "}
            <a href="tel:9211046457" className="hover:underline">9211046457</a>,{" "}
            <a href="tel:7900573087" className="hover:underline">7900573087</a>
          </span>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl py-3 grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="MediCare Plus" className="h-16 w-16 rounded-lg object-contain bg-white" />
          <div className="hidden sm:block leading-tight">
            {/* <div className="font-display font-extrabold text-lg text-primary">MediCare<span className="text-accent">+</span></div> */}
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Health · Care · Trust</div>
          </div>
        </Link>

        <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center gap-2 bg-surface border border-border rounded-2xl px-4 py-2.5 max-w-xl mx-auto w-full">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="search"
            placeholder="Search medicines, brands, generics…"
            className="bg-transparent outline-none flex-1 text-sm min-w-0"
            aria-label="Search medicines"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-background border border-border text-muted-foreground">⌘K</kbd>
        </form>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
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
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-surface hover:text-primary transition ${isActive ? "text-primary bg-primary/5" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {mobile && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px mx-auto max-w-7xl py-2 flex flex-col">
            <form onSubmit={handleSearchSubmit} className="md:hidden flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2 my-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search medicines…"
                className="bg-transparent outline-none flex-1 text-sm min-w-0"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
            </form>
            {navLinks.map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setMobile(false)}
                className={({ isActive }) => `text-sm font-medium px-3 py-3 rounded-lg hover:bg-surface ${isActive ? "text-primary bg-primary/5" : ""}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      <div className="bg-accent/10 border-t border-border h-[40px] flex items-center overflow-hidden select-none">
        <div className="flex gap-10 whitespace-nowrap animate-marquee text-xs font-semibold text-accent uppercase tracking-wider">
          <span>✨ 10% Off All Medicines • Cosmetic 5% Off • Homeopathic 5% Off • Ayurvedic 10% Off • Surgical 10% Off • Other 5% Off ✨</span>
          <span>✨ 10% Off All Medicines • Cosmetic 5% Off • Homeopathic 5% Off • Ayurvedic 10% Off • Surgical 10% Off • Other 5% Off ✨</span>
        </div>
      </div>
    </header>
  );
}
