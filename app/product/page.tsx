import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";
import { ConsultationTrigger } from "../components/consultation-trigger";
import { Reveal } from "../components/reveal";
import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { BackgroundBeams } from "../components/background-beams";
import { BackgroundRipple } from "../components/background-ripple";

const productPackages = [
  {
    name: "EOS ERP Basic",
    tagline: "ERP Sederhana, Kinerja Maksimal",
    description:
      "Pondasi ERP siap pakai untuk perusahaan KB & KITE dengan proses inti yang otomatis dan laporan siap audit.",
    features: [
      "Manajemen persediaan dan produksi real-time",
      "Pencatatan transaksi otomatis keuangan dan costing",
      "Dashboard operasional dengan notifikasi exception",
      "Blueprint SOP manufaktur yang siap langsung digunakan",
    ],
    image: "/assets/product/erp.jpg",
  },
  {
    name: "EOS ERP Basic + CEISA 4.0",
    tagline: "Solusi Terintegrasi untuk Kepabeanan",
    description:
      "Integrasi host-to-host CEISA yang terjaga SLA-nya, memastikan setiap dokumen PIB/PEB terkirim tepat waktu dan bebas kesalahan.",
    features: [
      "Automasi BC 2.3, BC 2.5, BC 4.0, dan dokumen pendukung",
      "Sinkronisasi dua arah antara ERP dan CEISA",
      "Monitoring status pengiriman dan alert kegagalan",
      "Audit trail lengkap untuk keperluan compliance",
    ],
    image: "/assets/product/cheisa.jpg",
    flipped: true,
  },
  {
    name: "EOS ERP Pro",
    tagline: "Optimalkan Operasional Tanpa Bottleneck",
    description:
      "Enterprise resource planning lengkap dengan MRP, otomasi workflow, dan analytics menyeluruh untuk pengambilan keputusan cepat.",
    features: [
      "MRP & APS dengan simulasi kapasitas",
      "Integrasi modul penjualan, pembelian, dan budgeting",
      "Workflow designer drag-and-drop",
      "Dashboard KPI real-time dan mobile-ready",
    ],
    image: "/assets/product/mrp.jpg",
  },
  {
    name: "EOS ERP Enterprise",
    tagline: "Arsitektur Resilient & Multi-Pabrik",
    description:
      "Platform modular untuk grup manufaktur multi-plant dengan keamanan kelas enterprise dan integrasi middleware.",
    features: [
      "Orkestrasi multi-plant dan konsolidasi data",
      "Skema hybrid cloud dengan disaster recovery",
      "Integrasi sistem legacy dan IoT melalui event-stream",
      "Tim success dan improvement berkelanjutan",
    ],
    image: "/assets/product/product.png",
    flipped: true,
  },
  {
    name: "EOS IT Inventory",
    tagline: "Pelaporan Kepabeanan Taat Aturan",
    description:
      "IT Inventory yang terintegrasi dengan ERP dan CEISA, menjaga akurasi stok kawasan berikat dan KEK secara otomatis.",
    features: [
      "Pelaporan real-time dan rekonsiliasi stok otomatis",
      "Keamanan data berlapis dan role-based access",
      "Integrasi dengan modul produksi dan warehouse",
      "Fitur audit trail serta alert ketidaksesuaian",
    ],
    image: "/assets/product/beacukai.jpg",
  },
];

const valueHighlights = [
  {
    title: "Blueprint Cepat",
    description: "Template implementasi 90 hari dengan tahapan yang sudah terbukti di puluhan plant.",
  },
  {
    title: "Tim Ahli EOS",
    description: "Solution architect, konsultan CEISA, dan change manager disiapkan untuk tiap engagement.",
  },
  {
    title: "Skalabilitas Modular",
    description: "Mulai dari basic lalu tingkatkan fitur tanpa perlu rebuild atau migrasi ulang.",
  },
];

export default function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_680px_at_10%_-10%,rgba(59,130,246,0.28),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_90%_20%,rgba(14,165,233,0.18),transparent_70%)]" />
        <BackgroundBeams className="opacity-50" />
        <BackgroundRipple className="opacity-30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 backdrop-blur">
              <RefreshCw className="h-4 w-4" />
              <span>Product Package EOS</span>
            </div>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Semua Produk EOS untuk menjawab kebutuhan pabrik modern
            </h1>
            <p className="mt-6 text-lg text-slate-200 md:text-xl">
              Dari ERP dasar hingga orkestrasi multi-plant, setiap paket dirancang agar perusahaan manufaktur Indonesia dapat tumbuh cepat, patuh regulasi, dan tetap efisien.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ConsultationTrigger
                className="btn btn-on-dark inline-flex items-center"
                source="Product Hero"
              >
                Konsultasi Gratis
                <ArrowRight className="h-4 w-4" />
              </ConsultationTrigger>
              <Link href="/case-studies" className="btn btn-outline-on-dark">
                Lihat Studi Kasus
              </Link>
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={80}>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:grid-cols-3">
              {valueHighlights.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-200/90">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-16 rounded-t-[44px] bg-white pb-24 pt-20 text-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/15 to-transparent" aria-hidden />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal variant="up">
            <SectionHeader
              align="center"
              overline="Daftar Produk"
              title="Paket yang merepresentasikan produk unggulan EOS"
              description="Kami tiru konten paket resmi EOS lalu memodernkan tampilan, membuat layout bergantian antara visual dan deskripsi agar mudah dibaca."
            />
          </Reveal>

          <div className="mt-16 space-y-16">
            {productPackages.map((product, idx) => (
              <Reveal key={product.name} variant="up" delayMs={idx * 70}>
                <div
                  className={`relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur lg:p-12`}
                >
                  <div className={`grid items-center gap-10 lg:grid-cols-2 ${product.flipped ? "lg:[&>div:first-child]:order-last" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-400/15" />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 480px, 100vw"
                        priority={idx === 0}
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                        {product.tagline}
                      </div>
                      <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{product.name}</h2>
                        <p className="text-base leading-relaxed text-slate-600">{product.description}</p>
                      </div>
                      <ul className="space-y-3 text-sm text-slate-600">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-blue-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <ConsultationTrigger
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-600 transition duration-300 hover:bg-blue-500 hover:text-white"
                          source={`Product Package: ${product.name}`}
                        >
                          Minta Demo
                          <ArrowRight className="h-4 w-4" />
                        </ConsultationTrigger>
                        <Link
                          href="/case-studies"
                          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-400 hover:text-blue-600"
                        >
                          Lihat Implementasi
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal variant="up">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <SectionHeader
                  overline="Cara Kami Bekerja"
                  title="Blueprint implementasi siap pakai namun fleksibel"
                  description="Paket produk ini selalu didampingi konsultan berpengalaman, change manager, serta tim support 24/5 sehingga transisi berlangsung mulus."
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Discovery terukur", "Design kolaboratif", "Go-live bertahap", "Continuous improvement"].map((item) => (
                    <GlowCard key={item} className="p-5">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-slate-900">{item}</h4>
                        <p className="text-sm text-slate-600">
                          {item === "Discovery terukur"
                            ? "Assessment proses, pemetaan data, dan baseline KPI untuk menyusun roadmap digital."
                            : item === "Design kolaboratif"
                            ? "Workshop lintas departemen memastikan blueprint modul dan integrasi sudah benar."
                            : item === "Go-live bertahap"
                            ? "Migrasi dan training dibagi gelombang agar adopsi tetap terkontrol."
                            : "Setelah go-live, tim EOS memonitor KPI dan menambahkan fitur tambahan sesuai roadmap."}
                        </p>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
              <GlowCard className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_35px_90px_rgba(15,23,42,0.35)]">
                <div className="absolute -top-24 -right-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" aria-hidden />
                <div className="relative flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-200">
                    <Sparkles className="h-4 w-4" />
                    <span>Client Voice</span>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-100">
                    "Sebelum EOS, tim kami kewalahan menyusun laporan CEISA dan stok kawasan berikat. Paket ERP Basic + CEISA mempercepat proses 3x lipat tanpa menambah headcount."
                  </p>
                  <div>
                    <p className="font-semibold">Head of Compliance, Perusahaan Tekstil</p>
                    <p className="text-sm text-slate-300">Implementasi selesai dalam 90 hari kerja</p>
                  </div>
                  <Link href="/case-studies" className="inline-flex w-max items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
                    Pelajari studi kasus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlowCard>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white py-24 text-slate-900">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" aria-hidden />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <Reveal variant="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-600">
              <ShieldCheck className="h-4 w-4" />
              <span>Siap mulai lebih cepat?</span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ajak tim Anda melihat demo digital factory EOS
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Lengkapi formulir kebutuhan, kami akan tayangkan demo personal yang menyesuaikan SOP perusahaan Anda dan menyertakan estimasi ROI implementasi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="mailto:hello@eosteknologi.com" className="btn btn-primary">
                Kirim Brief Project
              </Link>
              <Link href="https://cal.com" className="btn btn-outline">
                Booking sesi eksplorasi
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
