import { Info } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="container-px mx-auto max-w-7xl py-6">
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-warning/10 border border-warning/30 text-sm text-foreground">
        <Info className="h-5 w-5 text-warning shrink-0 mt-0.5" />
        <p><strong>Demo Pharmacy Website.</strong> Product information is for demonstration purposes only. Consult qualified healthcare professionals before using any medication.</p>
      </div>
    </div>
  );
}
