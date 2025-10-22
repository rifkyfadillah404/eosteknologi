import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { ConsultationTrigger } from "./components/consultation-trigger";
import { AboutSection } from "./sections/about";
import { PartnersSection } from "./sections/partners";

const benefitItems = [
  {
    number: "1.",
    text: "Biaya lebih rendah dibandingkan penyedia ERP besar.",
  },
  {
    number: "2.",
    text: "Fleksibel dan dapat disesuaikan sesuai kebutuhan.",
  },
  {
    number: "3.",
    text: "Integrasi yang mulus dengan peraturan perdagangan di Indonesia.",
  },
  {
    number: "4.",
    text: "Dukungan multibahasa (Inggris, Jepang, Indonesia).",
  },
];

const solutionPoints = [
  "Melacak jumlah produksi dan status mesin secara otomatis dengan sensor IoT untuk penghitungan dan pemantauan real-time.",
  "Tampilan Andon memberikan visual status produksi agar tim lebih terkoordinasi dan mempercepat penyelesaian masalah.",
  "Integrasi Host-to-Host Ceisa 4.0 menyederhanakan proses ekspor-impor dan memastikan kepatuhan regulasi.",
  "Coretax XML memudahkan unggah faktur pajak langsung ke portal tanpa rekonsiliasi manual.",
  "Teknologi RFID memastikan traceability barang jadi dari produksi hingga pesanan pengiriman.",
];

const featureCards = [
  {
    title: "ERP (Enterprise Resource Planning)",
    subtitle: "MRP, Auto Scheduler, APS",
    description:
      "Integrasi keuangan, persediaan, pembelian, penjualan, dan produksi dalam satu platform untuk eksekusi yang presisi.",
    image: "/assets/product/erp.jpg",
    href: "https://eosteknologi.com/software-manufaktur/",
  },
  {
    title: "Host to Host Ceisa 4.0",
    subtitle: "Interface Bea Cukai Real-Time",
    description:
      "Automasi PIB, PEB, dan TPB dengan validasi langsung sehingga kepatuhan berjalan lancar tanpa pekerjaan ulang.",
    image: "/assets/product/cheisa.jpg",
    href: "https://eosteknologi.com/api-interface-to-ceisa-40-web/",
  },
  {
    title: "Subcon Management System",
    subtitle: "Maklon, HS Code, dan Bea Masuk",
    description:
      "Kelola BOM, WIP, perhitungan bea masuk, serta alur retur maklon secara transparan sesuai regulasi bea cukai.",
    image: "/assets/product/beacukai.jpg",
    href: "https://eosteknologi.com/subcon-meningkatkan-kelancaran-bisnis/",
  },
  {
    title: "IoT Production Counter",
    subtitle: "Sensor & Andon Display",
    description:
      "Pantau output mesin, downtime, dan status line melalui sensor terintegrasi dengan dashboard produksi.",
    image: "/assets/product/mrp.jpg",
    href: "https://eosteknologi.com/solutions-erp-features/",
  },
];

const testimonials = [
  {
    quote:
      "Perusahaan kami telah memenuhi kebutuhan IT Inventory untuk Kawasan Berikat dengan sistem EOS ini dan antarmuka ke SAP.",
    author: "Rubber Factory",
    role: "IT & Compliance",
    avatar: "https://i.pravatar.cc/160?img=12",
  },
  {
    quote:
      "Terima kasih telah membantu mengotomatisasi sistem dan perangkat lunak Roll Tracking di perusahaan kertas nasional kami.",
    author: "Paper Factory",
    role: "Operations Lead",
    avatar: "https://i.pravatar.cc/160?img=32",
  },
];

const ctaChannels = [
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
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white" id="hero">
        <div className="absolute inset-0">
          <Image
            src="/assets/logo/gedung.jpg"
            alt="Latar hero EOS ERP"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-wide text-blue-200">
              <Sparkles className="h-4 w-4" />
              <span>Software ERP Manufacturing</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Solusi ERP yang cerdas dan hemat biaya untuk bisnis global di Indonesia
              </h1>
              <p className="text-lg text-slate-200 md:text-xl">
                EOS menggabungkan ERP, otomasi kepabeanan, dan IoT shopfloor sehingga perusahaan dapat go-live cepat, patuh regulasi, dan mengurangi biaya operasional.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="https://eosteknologi.com/solutions-erp-features/" className="btn btn-on-dark inline-flex items-center">
                  Lihat Fitur Lengkap
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <ConsultationTrigger
                  className="btn btn-outline-on-dark"
                  source="Home Hero"
                >
                  Konsultasi Gratis
                </ConsultationTrigger>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefitItems.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 text-left shadow-lg backdrop-blur"
                >
                  <span className="text-2xl font-semibold text-white/90">{item.number}</span>
                  <p className="mt-2 text-sm text-slate-100/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.35)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/product/product.png"
                  alt="Tim EOS saat implementasi"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="bg-slate-50 py-24" id="total-solution">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                Total Solusi
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Solusi ERP lengkap dengan Sensor Penghitung Produksi IoT, RFID, Ceisa 4.0, dan Coretax XML
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Integrasi IoT Andon Display dan sistem kepabeanan menghadirkan alur kerja yang efisien untuk operasi manufaktur. Anda mendapatkan visibilitas real-time, optimasi mesin, dan dokumentasi kepabeanan otomatis.
              </p>
              <div className="space-y-3">
                {solutionPoints.map((point) => (
                  <p key={point} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                    <span>{point}</span>
                  </p>
                ))}
              </div>
              <Link
                href="https://eosteknologi.com/solutions-erp-features/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500"
              >
                Pelajari lebih lanjut
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/product/beacukai.jpg"
                  alt="Automasi kepabeanan EOS"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="features">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
              私たちのフィーチャーをご覧ください！
            </div>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Lihat Fitur Kami</h2>
            <p className="mt-4 text-base text-slate-600">
              ERP, CEISA 4.0, Subcon Management, hingga dashboard IoT yang siap diintegrasikan sesuai kebutuhan pabrik Anda.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:border-blue-500/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 90vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{card.subtitle}</span>
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="flex-1 text-sm text-slate-600">{card.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Kenali lebih lanjut
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ec] py-24" id="testimonials">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
            Testimonial
          </div>
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Kisah sukses klien kami</h2>
          <p className="mt-4 text-base text-slate-600">
            Kami bangga mendampingi pabrik di berbagai industri. Berikut cerita klien setelah mengadopsi EOS ERP dan solusi kepabeanan kami.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 px-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-blue-200">
                  <Image src={item.avatar} alt={item.author} fill className="object-cover" sizes="64px" />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-slate-900">{item.author}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-blue-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-slate-700">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <PartnersSection />

      <section className="bg-slate-900 py-24 text-white" id="cta">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-200">
            <Sparkles className="h-4 w-4" />
            <span>Konsultasi Personal</span>
          </div>
          <h2 className="mt-8 text-3xl font-semibold sm:text-4xl">
            Hubungi kami sekarang untuk solusi EOS ERP, IoT, RFID, Ceisa 4.0, Coretax, dan regulasi bisnis di Indonesia
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Dapatkan roadmap implementasi, estimasi investasi, dan penawaran terbaik tahun ini untuk mempercepat transformasi manufaktur Anda.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {ctaChannels.map((channel) => (
              <Link
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/15"
              >
                <div className="space-y-1 text-left">
                  <p className="text-base font-semibold">{channel.title}</p>
                  <p className="text-slate-200/80">{channel.description}</p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
