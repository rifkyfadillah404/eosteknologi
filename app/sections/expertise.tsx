import Link from "next/link";
import { cn } from "@/lib/cn";
import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";

const packages = [
  {
    name: "Basic",
    price: "Rp1,5jt",
    description: "Landing page profesional untuk validasi bisnis atau produk baru.",
    features: [
      "Desain 1 halaman kustom",
      "Responsif & optimal mobile",
      "Form kontak / WhatsApp",
      "Optimasi SEO dasar",
    ],
    cta: "https://wa.me/6281234567890?text=Halo%20Eos%20Teknologi,%20saya%20minat%20paket%20Basic",
    ctaLabel: "Konsultasi via WhatsApp",
    highlight: false,
  },
  {
    name: "Business",
    price: "Rp4,5jt",
    description: "Company profile lengkap dengan beberapa halaman dan integrasi penting.",
    features: [
      "Desain multi-halaman (hingga 6)",
      "Integrasi CMS / Blog opsional",
      "Optimasi SEO + Analytics",
      "Integrasi WA / Email / CRM",
    ],
    cta: "https://wa.me/6281234567890?text=Halo%20Eos%20Teknologi,%20saya%20minat%20paket%20Business",
    ctaLabel: "Diskusi Paket Business",
    highlight: true,
  },
  {
    name: "Pro",
    price: "Rp9jt+",
    description: "Custom web atau e-commerce dengan fitur khusus sesuai kebutuhan.",
    features: [
      "Arsitektur kustom & scaling",
      "Integrasi payment gateway",
      "Komponen & dashboard khusus",
      "Maintenance & support prioritas",
    ],
    cta: "mailto:hello@eosteknologi.com?subject=Konsultasi%20Paket%20Pro",
    ctaLabel: "Jadwalkan Konsultasi",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Paket fleksibel"
          title="Transparan, bisa dikustom, dan fokus hasil"
          description="Sesuaikan paket dengan scope proyek. Semua paket termasuk sesi discovery, quality assurance, dan handover dokumentasi."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <GlowCard
              key={pkg.name}
              className={pkg.highlight ? "border-blue-300 shadow-[0_32px_70px_rgba(37,99,235,0.18)]" : undefined}
            >
              {pkg.highlight ? (
                <span className="mb-6 inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Popular
                </span>
              ) : null}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-900">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-slate-900">{pkg.price}</p>
                  <p className="text-sm text-slate-500">{pkg.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500/80" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.cta}
                  className={cn(
                    "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
                    pkg.highlight
                      ? "bg-blue-600 text-white shadow-blue-500/30 hover:bg-blue-700"
                      : "border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700"
                  )}
                >
                  {pkg.ctaLabel}
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
