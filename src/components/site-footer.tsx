import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-surface border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="" className="h-10 w-10 rounded-lg bg-white object-contain" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-lg text-primary">MediCare<span className="text-accent">+</span></div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Health · Care · Trust</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">India's trusted online pharmacy. Genuine medicines, certified pharmacists, and lightning-fast delivery — straight to your doorstep.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" /> Licensed Pharmacy · DL No. MH-12345
          </div>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md pt-2" onSubmit={e => e.preventDefault()}>
            <input type="email" required placeholder="Your email" className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-primary/30" />
            <button className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">Subscribe</button>
          </form>
        </div>

        <FooterCol title="Shop" links={[["Medicines", "/medicines"], ["Categories", "/categories"], ["Upload Prescription", "/upload-prescription"], ["Wishlist", "/medicines"]]} />
        <FooterCol title="Support" links={[["Help Center", "/contact"], ["Order Tracking", "/contact"], ["Returns & Refunds", "/contact"], ["FAQ", "/#faq"]]} />
        <FooterCol title="Company" links={[["About Us", "/about"], ["Health Blog", "/blog"], ["Privacy Policy", "/about"], ["Terms & Conditions", "/about"]]} />
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 grid gap-4 md:grid-cols-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4 text-primary" />1800-123-4567 · 24/7</div>
          <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4 text-primary" />care@medicareplus.app</div>
          <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />Mumbai · Delhi · Bengaluru</div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MediCare Plus. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="p-2 rounded-lg hover:bg-background"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-lg hover:bg-background"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-lg hover:bg-background"><Twitter className="h-4 w-4" /></a>
            <a aria-label="Youtube" href="#" className="p-2 rounded-lg hover:bg-background"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-semibold mb-3 text-foreground">{title}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([l, h]) => (<li key={l}><Link to={h} className="hover:text-primary">{l}</Link></li>))}
      </ul>
    </div>
  );
}
