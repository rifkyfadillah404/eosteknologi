import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_90%_-10%,rgba(43,189,238,0.18),transparent),radial-gradient(600px_380px_at_10%_0,rgba(43,189,238,0.14),transparent)]" />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h1 className="hero-title text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Solusi ERP yang cerdas dan hemat biaya untuk bisnis global di Indonesia
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Platform ERP fleksibel yang dapat disesuaikan, terintegrasi mulus dengan regulasi perdagangan Indonesia, dan didukung multibahasa.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#cta"
              className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition"
              style={{ backgroundColor: "var(--accent)", boxShadow: "0 20px 40px rgba(43,189,238,0.35)" }}
            >
              Jadwalkan Demo ERP
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold text-slate-800 transition hover:shadow-[0_8px_30px_rgba(43,189,238,0.18)]"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Lihat Fitur ERP
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            {[
              "Biaya lebih rendah dibandingkan penyedia ERP besar",
              "Fleksibel dan dapat disesuaikan sesuai kebutuhan",
              "Integrasi mulus dengan peraturan perdagangan di Indonesia",
              "Dukungan multibahasa (Inggris, Jepang, Indonesia)",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4" strokeWidth={1.6} style={{ color: "var(--accent)" }} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_30px_70px_rgba(15,23,42,0.09)]"
            style={{ borderColor: "var(--card-border)" }}
          >
            <div className="rounded-2xl bg-white p-6">
              <div className="space-y-5">
                <div className="space-y-3">
                  <span className="inline-flex w-fit items-center rounded-full bg-[color:var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-[color:var(--accent)]">
                    EOS ERP Enterprise
                  </span>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-slate-900">
                    Kustomisasi sesuai kebutuhan bisnis Anda
                  </h3>
                  <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                </div>
                <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "563/364" }}>
                  <Image
                    src="/assets/logo/product.png"
                    alt="EOS ERP preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Modul dapat dikustomisasi",
                    "Otomatisasi & penjadwalan produksi",
                    "Akuntansi & laporan akurat",
                    "Terintegrasi dan cepat",
                  ].map((text) => (
                    <div
                      key={text}
                      className="rounded-xl border bg-white px-4 py-3 transition hover:bg-[color:var(--accent-soft)]"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <p className="text-sm font-medium text-slate-900">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
