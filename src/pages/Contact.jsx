import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="container-px mx-auto max-w-4xl py-12 text-center">
      <h1 className="font-display font-extrabold text-4xl">We're here to help</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Reach our pharmacist support team 24/7 — we respond in under 2 minutes.</p>

      <div className="grid sm:grid-cols-2 gap-4 mt-10 text-left max-w-3xl mx-auto">
        {[
          [Phone, "Call us 24/7", "9211046457, 7900573087", "tel:9211046457"],
          [Mail, "Email", "hariommedicos007@gmail.com", "mailto:hariommedicos007@gmail.com"],
          [MessageCircle, "Live chat", "Average reply in 2 min", null],
          [MapPin, "Address", "Shop No 3. Plot No5, Main Road Chhatterpur New delhi 110074", null],
        ].map(([Icon, t, v, link]) => (
          <div key={t} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl">
            <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary shrink-0"><Icon className="h-5 w-5" /></div>
            <div>
              <div className="font-semibold">{t}</div>
              <div className="text-sm text-muted-foreground">
                {link ? (
                  t.includes("Call") ? (
                    <span className="flex flex-wrap gap-x-1.5">
                      <a href="tel:9211046457" className="hover:underline text-primary">9211046457</a>,
                      <a href="tel:7900573087" className="hover:underline text-primary">7900573087</a>
                    </span>
                  ) : (
                    <a href={link} className="hover:underline text-primary">{v}</a>
                  )
                ) : v}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
