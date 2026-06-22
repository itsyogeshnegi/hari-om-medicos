import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.asset.json";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login or Register — MediCare Plus" },
      { name: "description", content: "Sign in to MediCare Plus to track orders, manage prescriptions and access your wishlist." },
    ],
  }),
  component: () => {
    const [mode, setMode] = useState<"login" | "register">("login");
    return (
      <div className="container-px mx-auto max-w-md py-16">
        <div className="bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)]">
          <div className="flex flex-col items-center text-center mb-6">
            <img src={logo.url} alt="" className="h-14 w-14 rounded-xl bg-white object-contain" />
            <h1 className="mt-3 font-display font-extrabold text-2xl">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
            <p className="text-sm text-muted-foreground mt-1">{mode === "login" ? "Sign in to continue to MediCare Plus" : "Join 2M+ customers ordering with confidence"}</p>
          </div>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert("Demo only — auth not wired up yet."); }}>
            {mode === "register" && <input required placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30" />}
            <input required type="email" placeholder="Email or mobile" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30" />
            <input required type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30" />
            {mode === "login" && <div className="text-right"><Link to="/login" className="text-xs font-semibold text-primary hover:underline">Forgot password?</Link></div>}
            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold">{mode === "login" ? "Sign in" : "Create account"}</button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? (
              <>New here? <button className="text-primary font-semibold hover:underline" onClick={() => setMode("register")}>Create an account</button></>
            ) : (
              <>Already a member? <button className="text-primary font-semibold hover:underline" onClick={() => setMode("login")}>Sign in</button></>
            )}
          </div>
        </div>
      </div>
    );
  },
});
