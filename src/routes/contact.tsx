import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MediCare Plus" },
      { name: "description", content: "Reach our 24/7 pharmacist support team via phone, email, or chat. We're here to help with orders, prescriptions and health queries." },
    ],
  }),
  component: () => (
    <div className="container-px mx-auto max-w-6xl py-12">
      <h1 className="font-display font-extrabold text-4xl">We're here to help</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Reach our pharmacist support team 24/7 — we respond in under 2 minutes.</p>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        <form className="bg-card border border-border rounded-2xl p-6 space-y-4" onSubmit={e => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name"><input required className="input" placeholder="Aarav Sharma" /></Field>
            <Field label="Email"><input required type="email" className="input" placeholder="you@example.com" /></Field>
          </div>
          <Field label="Subject"><input required className="input" placeholder="Order #12345" /></Field>
          <Field label="Message"><textarea required rows={5} className="input resize-none" placeholder="How can we help?" /></Field>
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">Send message</button>
          <style>{`.input { width:100%; padding: 0.65rem 0.9rem; border:1px solid var(--color-border); border-radius:0.75rem; background:var(--color-background); font-size:0.875rem; outline:none; } .input:focus { box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent); }`}</style>
        </form>

        <div className="space-y-3">
          {[
            [Phone, "Call us 24/7", "1800-123-4567"],
            [Mail, "Email", "care@medicareplus.app"],
            [MessageCircle, "Live chat", "Average reply in 2 min"],
            [MapPin, "Head office", "Andheri East, Mumbai 400069"],
          ].map(([Icon, t, v]: any) => (
            <div key={t} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
});

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium block mb-1.5">{label}</span>
      {children}
    </label>
  );
}
