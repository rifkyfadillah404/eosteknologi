import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { CalendarCheck, Settings2, UploadCloud, Users } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Assessment & Rencana", description: "Analisis proses, penyelarasan target, dan rencana implementasi bertahap." },
  { icon: Settings2, title: "Kustomisasi & Konfigurasi", description: "Penyesuaian modul, workflow, dan akses pengguna sesuai kebutuhan." },
  { icon: UploadCloud, title: "Migrasi Data", description: "Ekstraksi, pembersihan, dan impor data yang tervalidasi." },
  { icon: Users, title: "Pelatihan & Go‑Live", description: "Pelatihan tim, uji sistem, dan pendampingan saat peluncuran." },
];

export function ImplementationSection() {
  return (
    <section className="py-24" id="implementation">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Implementasi"
          title="Metodologi terstruktur untuk adopsi yang mulus"
          description="Kami mendampingi setiap tahap implementasi dari perencanaan hingga go‑live agar transisi berjalan lancar."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <GlowCard key={step.title} className="h-full p-6">
              <div className="space-y-4">
                <step.icon className="h-6 w-6 text-[color:var(--accent)]" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
