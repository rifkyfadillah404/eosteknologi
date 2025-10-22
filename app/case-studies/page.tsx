import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, Target } from "lucide-react";
import { Reveal } from "../components/reveal";
import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { ConsultationTrigger } from "../components/consultation-trigger";

const overviewMetrics = [
  {
    value: "90 Hari",
    label: "Rata-rata waktu go-live",
    description:
      "Blueprint implementasi modular mempercepat delivery tanpa mengorbankan governance dan quality gate.",
  },
  {
    value: "35%",
    label: "Penghematan biaya operasional",
    description:
      "ERP terintegrasi dengan CEISA dan shopfloor mengurangi pekerjaan manual serta overtime tim compliance.",
  },
  {
    value: "99,2%",
    label: "Akurasi pelaporan kepabeanan",
    description:
      "Validasi otomatis dan audit trail menjaga data stok kawasan berikat tetap sinkron di semua modul.",
  },
];

const caseStudies = [
  {
    company: "Rubber Factory Indonesia",
    industry: "Kawasan Berikat — Industri karet",
    image: "/assets/product/erp.jpg",
    headline: "Integrasi ERP + IT Inventory mempercepat audit Bea Cukai",
    challenge:
      "Sistem lama terpisah antara produksi, inventory, dan CEISA sehingga penyusunan laporan PIB/PEB butuh rekonsiliasi manual yang memakan waktu.",
    solution:
      "EOS ERP Basic + IT Inventory kami setup dengan sinkronisasi host-to-host CEISA 4.0 serta otomatisasi BOM dan lot tracking shopfloor.",
    impacts: [
      { value: "3x", label: "Lebih cepat mengirim PIB" },
      { value: "0", label: "Selisih stok saat audit semester" },
      { value: "15%", label: "Pengurangan overtime tim compliance" },
    ],
    quote:
      "Sebelum EOS, tim kami menghabiskan akhir pekan untuk rekonsiliasi CEISA. Kini dashboard stok dan laporan siap kirim kapan saja.",
    author: "IT & Compliance Lead",
  },
  {
    company: "Paper Manufacturer Nasional",
    industry: "Multi-plant — Industri kertas",
    image: "/assets/product/mrp.jpg",
    headline: "Shopfloor IoT dan Andon mengurangi downtime produksi",
    challenge:
      "Tidak ada visibilitas real-time atas status mesin, menyebabkan downtime panjang dan keterlambatan pengiriman ke pelanggan utama.",
    solution:
      "Kami memasang IoT production counter, Andon display, serta integrasi ke modul MRP & APS sehingga scheduler bisa bereaksi cepat.",
    impacts: [
      { value: "-28%", label: "Downtime per minggu" },
      { value: "+18%", label: "Output line utama" },
      { value: "120", label: "Pemberitahuan insiden otomatis per bulan" },
    ],
    quote:
      "Alarm Andon dan notifikasi WhatsApp membuat supervisor merespon dalam hitungan menit. Target delivery terpenuhi tanpa penambahan shift.",
    author: "Head of Operations",
  },
  {
    company: "Electronics Exporter",
    industry: "Maklon — Elektronik konsumen",
    image: "/assets/product/beacukai.jpg",
    headline: "Roadmap multi-plant memastikan compliance ekspor-impor",
    challenge:
      "Pertumbuhan order global membuat proses maklon dan HS Code sulit dikendalikan, risiko denda meningkat karena dokumen tidak seragam.",
    solution:
      "EOS ERP Enterprise kami konfigurasi dengan workflow approval multi-plant, integrasi middleware, serta dashboard compliance real-time.",
    impacts: [
      { value: "99%", label: "Akurasi HS Code" },
      { value: "4", label: "Plant go-live dalam 8 bulan" },
      { value: "24/5", label: "Monitoring support tim EOS" },
    ],
    quote:
      "Dengan governance EOS, ekspansi plant ke Vietnam dan Jepang tetap mengikuti SOP compliance yang sama dan terukur.",
    author: "Program Director",
  },
];

const processSteps = [
  {
    title: "Discovery terukur",
    description:
      "Workshop lintas departemen memetakan KPIs, regulasi, dan integrasi. Hasilnya adalah backlog implementasi dengan prioritas yang jelas.",
  },
  {
    title: "Blueprint & konfigurasi",
    description:
      "Tim solution architect menyusun blueprint modul, automasi workflow, dan desain data model sesuai industri serta standar audit.",
  },
  {
    title: "Pilot & change management",
    description:
      "Pilot dimulai dari line prioritas, training role-based, serta komunikasi perubahan agar user adoption lancar.",
  },
  {
    title: "Scale & optimasi berkelanjutan",
    description:
      "Setelah go-live, tim EOS memantau KPI, menambah add-on, dan menyesuaikan roadmap ekspansi plant berikutnya.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white" id="hero">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.4),transparent_55%)]" />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-8" variant="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wide text-blue-200">
              <Sparkles className="h-4 w-4" />
              <span>Studi kasus EOS</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Transformasi manufaktur yang terukur dan siap audit
            </h1>
            <p className="text-lg text-slate-200 md:text-xl">
              Pelajari bagaimana perusahaan manufaktur mempercepat go-live ERP, menjaga compliance kepabeanan, dan meningkatkan efisiensi shopfloor bersama EOS Teknologi.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ConsultationTrigger
                className="btn btn-on-dark inline-flex items-center"
                source="Case Studies Hero - Konsultasi"
              >
                Konsultasi proyek
                <ArrowRight className="h-4 w-4" />
              </ConsultationTrigger>
              <ConsultationTrigger
                className="btn btn-outline-on-dark inline-flex items-center justify-center"
                source="Case Studies Hero - Brief"
              >
                Kirim brief kebutuhan
                <ArrowRight className="h-4 w-4" />
              </ConsultationTrigger>
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={120} className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/product/product.png"
                  alt="Tim EOS saat sesi implementasi"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24" id="metrics">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            align="center"
            overline="Dampak implementasi"
            title="Keberhasilan klien setelah mengadopsi EOS"
            description="Angka berikut adalah rangkuman program implementasi 12 bulan terakhir yang mencakup ERP, CEISA, dan IoT shopfloor."
          />

          <Reveal variant="up" className="mt-16">
            <div className="grid gap-6 md:grid-cols-3">
              {overviewMetrics.map((item) => (
                <GlowCard key={item.label} className="h-full bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  <div className="space-y-4">
                    <p className="text-4xl font-semibold text-slate-900">{item.value}</p>
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{item.label}</p>
                    <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-24" id="stories">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            align="center"
            overline="Cerita klien"
            title="Bagaimana EOS memecahkan tantangan nyata di lapangan"
            description="Setiap engagement dimulai dengan baseline KPI jelas, lalu dikawal hingga nilai bisnis terukur tercapai."
          />

          <div className="mt-16 space-y-16">
            {caseStudies.map((study, idx) => (
              <Reveal key={study.company} variant="up" delayMs={idx * 100}>
                <div
                  className={`grid items-center gap-10 rounded-[32px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur lg:p-12 lg:grid-cols-2 ${
                    idx % 2 === 1 ? "lg:[&>div:first-child]:order-last" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/20" aria-hidden />
                    <Image
                      src={study.image}
                      alt={study.company}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, 100vw"
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {study.industry}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-slate-900">{study.headline}</h3>
                      <p className="text-base font-semibold text-slate-700">{study.company}</p>
                      <p className="text-sm leading-relaxed text-slate-600">{study.challenge}</p>
                      <div className="rounded-2xl border border-blue-100/70 bg-blue-50/60 p-5 text-sm leading-relaxed text-blue-900">
                        {study.solution}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {study.impacts.map((impact) => (
                        <div
                          key={impact.label}
                          className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_20px_55px_rgba(15,23,42,0.1)]"
                        >
                          <p className="text-2xl font-semibold text-slate-900">{impact.value}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-600">{impact.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-sm italic text-slate-700">
                      “{study.quote}”
                      <p className="mt-3 text-sm font-semibold not-italic text-slate-900">{study.author}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white" id="process">
        <div className="absolute inset-0 bg-[radial-gradient(950px_550px_at_20%_20%,rgba(59,130,246,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeader
            align="center"
            invert
            overline="Pendekatan implementasi"
            title="Metodologi yang memastikan hasil dan compliance"
            description="Framework kami menggabungkan discovery mendalam, konfigurasi modular, dan dukungan pasca go-live yang konsisten."
          />

          <Reveal variant="up" className="mt-16">
            <div className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <GlowCard
                  key={step.title}
                  className="h-full border-white/15 bg-white/10 p-6 text-left text-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.3)]"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-200/10 px-4 py-1 text-xs uppercase tracking-wide text-blue-200">
                      <Clock className="h-4 w-4" />
                      <span>Langkah {idx + 1}</span>
                    </div>
                    <h4 className="text-2xl font-semibold text-white">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24" id="cta">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal variant="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
              <Target className="h-4 w-4" />
              <span>Mulai proyek Anda</span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Siap menyusun studi kasus sukses berikutnya bersama EOS?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Ceritakan tantangan pabrik Anda, kami siapkan demo personal, estimasi ROI, dan checklist compliance agar manajemen bisa segera mengambil keputusan.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="https://api.whatsapp.com/send?phone=628111170405&text=Halo!%20Saya%20mau%20diskusi%20terkait%20solusi%20EOS"
                className="btn btn-primary inline-flex items-center"
              >
                Chat WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
              <ConsultationTrigger className="btn btn-outline" source="Case Studies Final CTA">
                Lihat opsi konsultasi
              </ConsultationTrigger>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
