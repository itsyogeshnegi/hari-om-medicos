import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Upload, CheckCircle2, Clock, FileText, X } from "lucide-react";

export const Route = createFileRoute("/upload-prescription")({
  head: () => ({
    meta: [
      { title: "Upload Prescription — MediCare Plus" },
      { name: "description", content: "Upload your doctor's prescription and our licensed pharmacists will dispatch your medicines within 24 hours." },
    ],
  }),
  component: UploadRx,
});

function UploadRx() {
  const [files, setFiles] = useState<File[]>([]);
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  const ref = useRef<HTMLInputElement>(null);

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    const incoming = Array.from(list).filter(f => /pdf|image\/(jpe?g|png)/.test(f.type));
    setFiles(f => [...f, ...incoming]);
  };

  const submit = () => {
    if (!files.length) return;
    setStage(1);
    setTimeout(() => setStage(2), 1500);
    setTimeout(() => setStage(3), 3500);
  };

  return (
    <div className="container-px mx-auto max-w-4xl py-10">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl">Upload Prescription</h1>
      <p className="text-muted-foreground mt-2">Our licensed pharmacists will review and confirm within 30 minutes.</p>

      <div
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); onFiles(e.dataTransfer.files); }}
        className="mt-8 border-2 border-dashed border-border rounded-3xl p-10 sm:p-14 text-center bg-card hover:border-primary transition cursor-pointer"
        onClick={() => ref.current?.click()}
      >
        <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
          <Upload className="h-7 w-7" />
        </div>
        <h2 className="font-semibold text-lg">Drag & drop your prescription here</h2>
        <p className="text-sm text-muted-foreground mt-1">or click to browse — PDF, JPG, PNG (max 10 MB each)</p>
        <input ref={ref} type="file" accept=".pdf,image/jpeg,image/png" multiple className="hidden" onChange={e => onFiles(e.target.files)} />
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-2">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl">
              <FileText className="h-5 w-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{f.name}</div>
                <div className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(0)} KB</div>
              </div>
              <button onClick={() => setFiles(p => p.filter((_, j) => j !== i))} className="p-1.5 rounded-lg hover:bg-surface text-muted-foreground"><X className="h-4 w-4" /></button>
            </div>
          ))}
          <button onClick={submit} className="mt-3 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">Submit for Review</button>
        </div>
      )}

      <div className="mt-10 grid sm:grid-cols-3 gap-3">
        <StatusCard active={stage >= 1} icon={Upload} label="Uploaded" desc="Securely received." />
        <StatusCard active={stage >= 2} icon={Clock} label="Under Review" desc="Pharmacist verifying." />
        <StatusCard active={stage >= 3} icon={CheckCircle2} label="Approved" desc="Ready to dispatch." />
      </div>

      <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 text-sm">
        <strong className="block mb-1">What makes a valid prescription?</strong>
        <ul className="list-disc ml-5 text-muted-foreground space-y-1">
          <li>Issued by a registered medical practitioner with date and stamp.</li>
          <li>Patient name, medicine name and dosage clearly visible.</li>
          <li>For controlled medicines, the original copy must be couriered to us.</li>
        </ul>
      </div>
    </div>
  );
}

function StatusCard({ active, icon: Icon, label, desc }: { active: boolean; icon: React.ComponentType<{ className?: string }>; label: string; desc: string }) {
  return (
    <div className={`p-5 rounded-2xl border ${active ? "bg-accent/10 border-accent/30" : "bg-card border-border"}`}>
      <div className={`h-10 w-10 grid place-items-center rounded-xl ${active ? "bg-accent text-accent-foreground" : "bg-surface text-muted-foreground"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-3 font-semibold">{label}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </div>
  );
}
