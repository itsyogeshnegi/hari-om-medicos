import { ShieldCheck, Users, Truck, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <div className="container-px mx-auto max-w-5xl py-12">
      <h1 className="font-display font-extrabold text-4xl">About MediCare Plus</h1>
      <p className="text-lg text-muted-foreground mt-4 max-w-3xl">We're on a mission to make quality healthcare accessible, affordable and reliable for every Indian family — one delivery at a time.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {[
          [Users, "5k+", "Happy customers every month"],
          [ShieldCheck, "100%", "Genuine medicines"],
          [HeartPulse, "14/7", "Pharmacist support"],
        ].map(([Icon, n, l]) => (
          <div key={l} className="bg-card border border-border rounded-2xl p-5">
            <Icon className="h-6 w-6 text-primary" />
            <div className="font-display font-extrabold text-3xl mt-3">{n}</div>
            <div className="text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-neutral max-w-none mt-12 space-y-4 text-foreground">
        <h2 className="font-display font-bold text-2xl">What we stand for</h2>
        <p className="text-muted-foreground">Trust above all. Every medicine on our platform is sourced directly from authorised distributors. Every prescription is reviewed by a qualified pharmacist. Every order is tracked in real time.</p>
      </div>
    </div>
  );
}
