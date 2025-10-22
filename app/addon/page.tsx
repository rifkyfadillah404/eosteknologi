import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Radio, Smartphone, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "../components/reveal";
import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { BackgroundBeams } from "../components/background-beams";
import { BackgroundRipple } from "../components/background-ripple";
import { ConsultationTrigger } from "../components/consultation-trigger";

const heroHighlights = [
  {
    title: "Integrasi mulus",
    description: "Seluruh add-on dirancang plug-and-play dengan ekosistem EOS maupun ERP pihak ketiga.",
  },
  {
    title: "Implementasi cepat",
    description: "Blueprint deployment 30–60 hari dengan dokumentasi dan training padat.",
  },
  {
    title: "Monitoring real-time",
    description: "Dashboard performa, alert, dan audit trail hadir di setiap modul tambahan.",
  },
];

const addOns = [
  {
    name: "CEISA 4.0 Host-to-Host",
    tagline: "Automasi pelaporan kepabeanan",
    description:
      "Kirim dan validasi dokumen CEISA (BC 2.3, BC 2.5, BC 4.0, dsb) secara otomatis dengan SLA terjaga dan pelacakan real-time.",
    benefits: [
      "Sinkronisasi dua arah ERP ↔ CEISA",
      "Alert gangguan dan retry otomatis",
      "Audit trail lengkap untuk compliance",
    ],
    icon: Radio,
    accent: "from-blue-500/90 via-sky-400/80 to-indigo-500/80",
    link: "https://eosteknologi.com/api-interface-to-ceisa-40-web/",
  },
  {
    name: "EOS Mobile Approval",
    tagline: "Persetujuan kapan pun",
    description:
      "Direksi dan manajer dapat menyetujui purchase request, PO, maupun dokumen produksi langsung via smartphone dengan histori lengkap.",
    benefits: [
      "Notifikasi WA dan push mobile",
      "Dashboard tugas dengan status live",
      "Rekap cost-up/cost-down otomatis",
    ],
    icon: Smartphone,
    accent: "from-purple-500/90 via-fuchsia-500/80 to-blue-500/75",
    flipped: true,
    link: "https://eosteknologi.com/eos-mobile-approval/",
  },
  {
    name: "Andon System + IoT",
    tagline: "Produksi responsif",
    description:
      "Sinyal Andon real-time terhubung dengan sensor IoT low-cost sehingga bottleneck produksi cepat terdeteksi dan ditindak.",
    benefits: [
      "Integrasi workflow ERP",
      "Visualisasi line pada display besar",
      "Sensor Wi-Fi/LAN siap deployment",
    ],
    icon: Workflow,
    accent: "from-amber-500/90 via-orange-500/80 to-rose-500/75",
    link: "https://eosteknologi.com/andon-system/",
  },
  {
    name: "IoT Box Sensor",
    tagline: "Telemetri low-cost",
    description:
      "Monitoring kondisi mesin, lingkungan, dan perhitungan produksi di lokasi manufaktur maupun tambang yang terpencil.",
    benefits: [
      "MQTT & API-ready",
      "Catu daya fleksibel dan rugged",
      "Integrasi langsung ke dashboard EOS",
    ],
    icon: Layers,
    accent: "from-emerald-500/90 via-teal-400/80 to-cyan-500/75",
    flipped: true,
    link: "https://eosteknologi.com/eos-iot/",
  },
  {
    name: "Production Result Industrial TAB",
    tagline: "Input produksi lebih cepat",
    description:
      "Tablet touchscreen dengan barcode & bluetooth printer yang merekam hasil produksi secara akurat ke ERP.",
    benefits: [
      "Form dinamis sesuai SOP",
      "Validasi kuantitas real-time",
      "Cetak label langsung di line",
    ],
    icon: Sparkles,
    accent: "from-cyan-500/90 via-blue-500/80 to-indigo-500/75",
    link: "https://eosteknologi.com/eos-production-result-touchscreen/",
  },
  {
    name: "WMS versi RFID",
    tagline: "Warehouse intelligent",
    description:
      "Pelacakan barang dari line hingga outbound menggunakan gate & handheld RFID yang sinkron dengan ERP dan CEISA.",
    benefits: [
      "Rekonsiliasi stok otomatis",
      "Traceability end-to-end",
      "Interface ke CEISA dan INSW",
    ],
    icon: Radio,
    accent: "from-indigo-500/90 via-purple-500/80 to-slate-600/75",
    flipped: true,
    link: "https://eosteknologi.com/wms-rfid/",
  },
  {
    name: "ERP Interface to INSW",
    tagline: "Kepatuhan KEK & kawasan berikat",
    description:
      "Pertukaran data otomatis antara ERP dan INSW untuk memastikan pelaporan IT Inventory KEK selalu tepat waktu.",
    benefits: [
      "Penjadwalan kirim data otomatis",
      "Validasi & cleaning data built-in",
      "Dashboard monitoring untuk compliance",
    ],
    icon: CheckCircle2,
    accent: "from-blue-500/90 via-sky-500/80 to-emerald-500/70",
    link: "https://eosteknologi.com/insw-interface/",
  },
];

export default function AddOnPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_15%_-10%,rgba(59,130,246,0.3),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_15%,rgba(139,92,246,0.18),transparent_70%)]" />
        <BackgroundBeams className="opacity-50" />
        <BackgroundRipple className="opacity-25" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Add-On Package EOS</span>
            </div>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Modul tambahan untuk memaksimalkan investasi ERP Anda
            </h1>
            <p className="mt-6 text-lg text-slate-200 md:text-xl">
              Pilih add-on yang siap mempercepat approval, memastikan kepabeanan, hingga menghadirkan wawasan IoT. Semuanya teruji di industri manufaktur Indonesia.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ConsultationTrigger
                className="btn btn-on-dark inline-flex items-center"
                source="Add-On Hero"
              >
                Konsultasi Add-On
                <ArrowRight className="h-4 w-4" />
              </ConsultationTrigger>
              <Link href="/product" className="btn btn-outline-on-dark">
                Lihat Paket Produk
              </Link>
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={80}>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:grid-cols-3">
              {heroHighlights.map((item) => (
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
              overline="Add-On EOS"
              title="Modul tambahan siap pakai, tinggal aktifkan"
              description="Kami tiru struktur add-on resmi lalu menambahkan sentuhan modern: kartu interaktif, gradien dinamis, dan CTA langsung ke konsultasi."
            />
          </Reveal>

          <div className="mt-16 space-y-16">
            {addOns.map((addon, idx) => (
              <Reveal key={addon.name} variant="up" delayMs={idx * 70}>
                <div
                  className={`relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur lg:p-12`}
                >
                  <div className={`grid items-center gap-10 lg:grid-cols-2 ${addon.flipped ? "lg:[&>div:first-child]:order-last" : ""}`}>
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${addon.accent}`} />
                      <addon.icon className="relative h-20 w-20 text-white drop-shadow-[0_12px_24px_rgba(15,23,42,0.35)]" />
                    </div>
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                        {addon.tagline}
                      </div>
                      <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{addon.name}</h2>
                        <p className="text-base leading-relaxed text-slate-600">{addon.description}</p>
                      </div>
                      <ul className="space-y-3 text-sm text-slate-600">
                        {addon.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-blue-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <ConsultationTrigger
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-600 transition duration-300 hover:bg-blue-500 hover:text-white"
                          source={`Add-On Module: ${addon.name}`}
                        >
                          Diskusikan Implementasi
                          <ArrowRight className="h-4 w-4" />
                        </ConsultationTrigger>
                        <Link
                          href={addon.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-400 hover:text-blue-600"
                        >
                          Pelajari detail modul
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
                  overline="Bundle & Roadmap"
                  title="Aktifkan add-on sesuai prioritas bisnis"
                  description="Tim EOS membantu memilih kombinasi modul yang memberikan ROI tercepat, berikut roadmap lanjutan untuk transformasi menyeluruh."
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {["Assess kebutuhan", "Pilot cepat", "Roll-out terukur", "Continuous value"].map((step) => (
                    <GlowCard key={step} className="p-5">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-slate-900">{step}</h4>
                        <p className="text-sm text-slate-600">
                          {step === "Assess kebutuhan"
                            ? "Workshop eksplorasi proses & integrasi memastikan add-on tepat guna."
                            : step === "Pilot cepat"
                            ? "Implementasi modul inti secara terbatas untuk validasi manfaat."
                            : step === "Roll-out terukur"
                            ? "Perluasan add-on ke plant/kantor lain dengan change management."
                            : "Dashboard KPI dan sesi improvement menjaga manfaat berkelanjutan."}
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
                    <Workflow className="h-4 w-4" />
                    <span>Studi Kasus</span>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-100">
                    "Bundle CEISA + WMS RFID memberi visibilitas penuh atas stok kawasan berikat kami. Tim operasional tidak lagi lembur menutup laporan karena semuanya otomatis."
                  </p>
                  <div>
                    <p className="font-semibold">Operation Director, Perusahaan Otomotif</p>
                    <p className="text-sm text-slate-300">ROI tercapai dalam 6 bulan pertama</p>
                  </div>
                  <Link href="/case-studies" className="inline-flex w-max items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
                    Lihat kisah lainnya
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
              <Sparkles className="h-4 w-4" />
              <span>Ayo aktifkan add-on pilihan Anda</span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Diskusikan paket add-on terbaik bersama tim EOS
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Ceritakan proses yang ingin diotomasi, kami siapkan demo dan simulasi manfaat finansialnya. Add-on dapat digabung dengan paket produk utama kapan saja.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ConsultationTrigger className="btn btn-primary" source="Add-On Final CTA">
                Kirim Brief Project
              </ConsultationTrigger>
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
