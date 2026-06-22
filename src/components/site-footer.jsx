import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-surface border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-16 w-16 rounded-lg bg-white object-contain" />
            <div className="leading-tight">
              {/* <div className="font-display font-extrabold text-lg text-primary">Hari Om Medicos<span className="text-accent">+</span></div> */}
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Health · Care · Trust</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">India's trusted online pharmacy. Genuine medicines, certified pharmacists, and lightning-fast delivery — straight to your doorstep.</p>
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> Licence No: RLF21DL2026000350
            </div>
            <div className="pl-6 text-[10px]">
              Old Licence No: DL-CHP-100981
            </div>
          </div>
        </div>

        <FooterCol title="Shop" links={[["Medicines", "/medicines"]]} />
        <FooterCol title="Support" links={[["Help Center", "/contact"]]} />
        <FooterCol title="Company" links={[["About Us", "/about"], ["Privacy Policy", "/about"], ["Terms & Conditions", "/about"]]} />
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 grid gap-4 md:grid-cols-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary shrink-0" />
            <span>
              <a href="tel:9211046457" className="hover:text-primary">9211046457</a>,{" "}
              <a href="tel:7900573087" className="hover:text-primary">7900573087</a>
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 text-primary shrink-0" />
            <a href="mailto:hariommedicos007@gmail.com" className="hover:text-primary">hariommedicos007@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>Shop No 3. Plot No5, Main Road Chhatterpur New delhi 110074</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hari Om Medicos. All rights reserved.</p>
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

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="font-semibold mb-3 text-foreground">{title}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([l, h]) => (<li key={l}><Link to={h} className="hover:text-primary">{l}</Link></li>))}
      </ul>
    </div>
  );
}
