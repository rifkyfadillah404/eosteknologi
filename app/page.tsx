import Link from "next/link";
import {
  ArrowRight,
  CloudCog,
  Cpu,
  Factory,
  Globe2,
  LineChart,
  Network,
  Radio,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "./components/reveal";
import { GlowCard } from "./components/glow-card";
import { SectionHeader } from "./components/section-header";
import { BackgroundBeams } from "./components/background-beams";
import { BackgroundRipple } from "./components/background-ripple";
import { PartnersSection } from "./sections/partners";

const heroHighlights = [
  {
    title: "Biaya implementasi lebih efisien",
    description: "Investasi yang terukur dengan hasil setara platform ERP global.",
    icon: ShieldCheck,
  },
  {
    title: "Fleksibel dan dapat dikustom",
    description: "Blueprint siap adaptasi untuk KB, KITE, dan industri regulasi ketat.",
    icon: Workflow,
  },
  {
    title: "Integrasi kepabeanan mulus",
    description: "Automasi CEISA 4.0, Coretax, dan pelaporan perdagangan real-time.",
    icon: CloudCog,
  },
  {
    title: "Multi bahasa",
    description: "UI dan dokumentasi operasional dalam Bahasa Indonesia, Inggris, dan Jepang.",
    icon: Globe2,
  },
];

const valueMetrics = [
  {
    value: "38",
    label: "Plant aktif",
    description: "Beroperasi di kawasan berikat, KITE, dan KEK di seluruh Indonesia.",
  },
  {
    value: "< 9 bln",
    label: "ROI rata-rata",
    description: "Payback terbukti dengan efisiensi operasional dan kepatuhan.",
  },
  {
    value: "99.9%",
    label: "Akurasi CEISA",
    description: "Sinkronisasi host-to-host memastikan audit tanpa drama.",
  },
  {
    value: "24/5",
    label: "Support ahli",
    description: "Tim manufaktur dan compliance siap mendampingi kapan pun.",
  },
];

const solutionCategories = [
  {
    title: "ERP Manufaktur End-to-End",
    description:
      "Integrasi produksi, persediaan, penjualan, hingga finance dalam satu command center.",
    points: [
      "MRP, APS, dan auto scheduler dengan parameter dinamis",
      "Dashboard real-time untuk OEE dan kapasitas",
      "Workflow approval lintas departemen",
    ],
    accent: "from-sky-500/90 via-blue-500/80 to-indigo-600/70",
  },
  {
    title: "IoT & Andon Smart Factory",
    description:
      "Sensor penghitung produksi dan Andon display terhubung langsung ke lantai produksi.",
    points: [
      "Counter mesin otomatis dengan notifikasi downtime",
      "Visualisasi status line untuk supervisor dan manajemen",
      "Integrasi ke maintenance dan replenishment",
    ],
    accent: "from-emerald-500/90 via-teal-500/80 to-cyan-500/75",
  },
  {
    title: "Compliance & Trade Automation",
    description:
      "Automasi CEISA 4.0, Coretax XML, dan dokumen ekspor-impor tanpa input ulang.",
    points: [
      "Host-to-host PIB, PEB, dan TPB",
      "Penelusuran asal bahan baku dan HS code",
      "Library regulasi terupdate oleh konsultan EOS",
    ],
    accent: "from-purple-500/90 via-fuchsia-500/80 to-blue-500/70",
  },
];

const integrationHighlights = [
  {
    title: "IoT Production Counter",
    description: "Sensor gateway menghitung output per mesin secara instan.",
    icon: Radio,
  },
  {
    title: "RFID & WMS Tracking",
    description: "Traceability menyeluruh dari inbound hingga ekspedisi.",
    icon: Network,
  },
  {
    title: "Ceisa 4.0 Host-to-Host",
    description: "Dokumen kepabeanan otomatis validasi langsung dari sistem.",
    icon: CloudCog,
  },
  {
    title: "Coretax XML",
    description: "Export faktur pajak siap unggah tanpa rekonsiliasi manual.",
    icon: LineChart,
  },
];

const featureShowcase = [
  {
    title: "Scheduler visual",
    description: "Drag-and-drop jadwal produksi dengan simulasi kapasitas realtime.",
    icon: Sparkles,
  },
  {
    title: "Subcon management",
    description: "Kalkulasi maklon, alur retur, dan pengawasan bea masuk otomatis.",
    icon: Workflow,
  },
  {
    title: "Mobile approvals",
    description: "Persetujuan PR/PO dan permintaan produksi dari mana pun.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics & AI",
    description: "Insight demand, lead time, dan bottleneck dengan rekomendasi tindakan.",
    icon: Cpu,
  },
];

const testimonials = [
  {
    quote:
      "Sistem EOS memberi kami kendali penuh atas inventory kawasan berikat dan integrasi ke SAP berjalan mulus.",
    company: "Rubber Factory",
    role: "IT & Compliance",
    result: "Implementasi CEISA 4.0 dan RFID dalam 6 bulan",
  },
  {
    quote:
      "Produksi kami kini transparan. Supervisor cukup memantau Andon dan dashboard tanpa laporan manual.",
    company: "Paper Factory",
    role: "Operations Excellence",
    result: "Downtime kritis turun 28% dalam kuartal pertama",
  },
];

const contactChannels = [
  {
    title: "Diskusi Solusi",
    description: "Hubungi konsultan manufaktur kami dan dapatkan demo terpersonalisasi.",
    href: "https://api.whatsapp.com/send?phone=628111170405&text=Halo!%20Saya%20mau%20diskusi%20terkait%20solusi%20EOS",
  },
  {
    title: "Penawaran Terbaik",
    description: "Konsultasi paket investasi sesuai roadmap digital plant Anda.",
    href: "https://api.whatsapp.com/send?phone=6281318288881&text=Halo!%20Saya%20dapat%20info%20dari%20website%20EOS",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden pb-32 pt-28">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://eosteknologi.com/wp-content/uploads/2025/07/front-page-03.webp')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-15 bg-slate-950/70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_680px_at_10%_-10%,rgba(59,130,246,0.28),transparent_70%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_90%_20%,rgba(14,165,233,0.18),transparent_70%)]" />
        <BackgroundBeams className="opacity-35" />
        <BackgroundRipple className="opacity-20" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <Reveal
            variant="up"
            className="max-w-3xl rounded-3xl border border-white/15 bg-slate-950/60 p-8 backdrop-blur-lg shadow-[0_30px_80px_rgba(15,23,42,0.45)]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4" />
              <span>Software ERP Manufacturing • IoT • CEISA 4.0 • Coretax</span>
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Solusi ERP cerdas dan hemat biaya untuk pabrik global di Indonesia
            </h1>
            <p className="mt-6 text-lg text-slate-100 md:text-xl">
              EOS menghadirkan platform manufaktur terintegrasi yang menyatukan produksi, kepabeanan, dan compliance dalam satu ekosistem modern berbasis cloud.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/product" className="btn btn-on-dark inline-flex items-center">
                Lihat Demo Produk
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/addon" className="btn btn-outline-on-dark">
                Telusuri Modul Tambahan
              </Link>
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={80}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroHighlights.map((item) => (
                <GlowCard key={item.title} className="flex h-full flex-col gap-3 bg-white/5 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blue-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-200/80">{item.description}</p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-24 rounded-t-[44px] bg-white pb-24 pt-20 text-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/15 to-transparent" aria-hidden />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal variant="up">
            <SectionHeader
              align="center"
              overline="Keunggulan Utama"
              title="Dengan EOS, transformasi digital Anda langsung terasa"
              description="Kami menggabungkan proses manufaktur, kepabeanan, dan analitik dalam satu platform yang bisa tumbuh bersama plant Anda."
            />
          </Reveal>

          <Reveal variant="up" delayMs={60}>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valueMetrics.map((metric) => (
                <GlowCard key={metric.label} className="flex h-full flex-col gap-3 bg-white p-6">
                  <span className="text-3xl font-semibold text-slate-900">{metric.value}</span>
                  <span className="text-sm uppercase tracking-wide text-blue-600/80">{metric.label}</span>
                  <p className="text-sm text-slate-600">{metric.description}</p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="up" className="space-y-8">
            <SectionHeader
              overline="Apa itu EOS ERP?"
              title="Sistem manajemen terintegrasi untuk manufaktur modern"
              description="Menghubungkan setiap departemen dengan data real-time sehingga keputusan bisa diambil cepat, presisi, dan tetap patuh regulasi."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {integrationHighlights.map((item) => (
                <GlowCard key={item.title} className="flex h-full flex-col gap-3 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={80}>
            <GlowCard className="relative flex h-full flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url('https://eosteknologi.com/wp-content/uploads/2025/02/IMG_0210-Copy.jpg')",
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-900/95" aria-hidden />
              <div className="relative flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-200">
                  <Factory className="h-4 w-4" />
                  <span>Plant Operations</span>
                </div>
                <p className="text-lg leading-relaxed text-slate-100">
                  EOS ERP menyederhanakan proses dari perencanaan produksi hingga ekspor-impor. Semua data terhubung sehingga tim champion Anda dapat fokus pada inovasi, bukan administrasi.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-200/90">
                  <span className="rounded-full border border-white/20 px-3 py-1">Production Planning</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">Inventory Visibility</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">Regulatory Compliance</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">Continuous Improvement</span>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white py-24 text-slate-900">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" aria-hidden />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal variant="up">
            <SectionHeader
              align="center"
              overline="Total Solusi"
              title="Blueprint implementasi modern untuk setiap departemen"
              description="Kami siapkan modul terkurasi dan integrasi siap pakai agar proyek berjalan cepat dan terukur."
            />
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {solutionCategories.map((category, idx) => (
              <Reveal key={category.title} variant="up" delayMs={idx * 80}>
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.accent} opacity-25`} aria-hidden />
                  <div className="relative space-y-5">
                    <h3 className="text-2xl font-semibold text-slate-900">{category.title}</h3>
                    <p className="text-sm text-slate-600">{category.description}</p>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {category.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Sparkles className="mt-0.5 h-4 w-4 text-blue-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500">
                      Pelajari blueprint
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_-10%,rgba(59,130,246,0.35),transparent_70%)] opacity-45" aria-hidden />
        <div className="absolute inset-0 bg-slate-950/85" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal variant="up">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-slate-950/90 p-10 text-center shadow-[0_35px_90px_rgba(15,23,42,0.45)] backdrop-blur-lg">
              <SectionHeader
                align="center"
                invert
                overline="Fitur Unggulan"
                title="Semua yang dibutuhkan tim champion untuk menjaga plant berjalan mulus"
                description="Dari lantai produksi hingga ruang audit, EOS memampukan kolaborasi lintas fungsi tanpa bottleneck."
              />
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={70}>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featureShowcase.map((feature) => (
                <GlowCard key={feature.title} className="flex h-full flex-col gap-3 bg-white/5 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-slate-200/80">{feature.description}</p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal variant="up">
            <SectionHeader
              overline="Testimonial"
              title="Kisah sukses klien kami"
              description="Kolaborasi erat dengan tim EOS memastikan setiap plant memperoleh manfaat nyata sejak hari pertama go-live."
            />
          </Reveal>

          <Reveal variant="up" delayMs={70}>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <GlowCard key={testimonial.company} className="flex h-full flex-col justify-between bg-white p-8">
                  <p className="text-lg leading-relaxed text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-8 space-y-2 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">{testimonial.company}</p>
                    <p>{testimonial.role}</p>
                    <p className="text-blue-600">{testimonial.result}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PartnersSection />

      <section className="relative bg-slate-900 py-24 text-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" aria-hidden />
        <div className="mx-auto max-w-5xl px-6">
          <Reveal variant="up">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
              <div className="flex flex-col gap-6 text-center">
                <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-200">
                  <Sparkles className="h-4 w-4" />
                  <span>Konsultasi Personal</span>
                </div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Hubungi kami untuk konsultasi ahli mengenai Digital Factory, IoT, RFID, dan regulasi Indonesia
                </h2>
                <p className="text-base text-slate-200">
                  Dapatkan roadmap implementasi, estimasi investasi, dan penawaran terbaik tahun ini untuk mempercepat transformasi manufaktur Anda.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {contactChannels.map((channel) => (
                    <Link
                      key={channel.title}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/15"
                    >
                      <div className="space-y-1">
                        <p className="text-base font-semibold">{channel.title}</p>
                        <p className="text-slate-200/80">{channel.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
