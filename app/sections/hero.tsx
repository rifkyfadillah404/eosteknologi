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
            <h1 className="hero-title text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Solusi ERP yang cerdas dan hemat biaya untuk bisnis global di Indonesia
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Platform ERP fleksibel yang dapat disesuaikan, terintegrasi mulus dengan regulasi perdagangan Indonesia, dan didukung multibahasa.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#cta"
              className="btn btn-primary"
            >
              Jadwalkan Demo ERP
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="btn btn-outline"
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
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border bg-white/50 p-2 shadow-[0_30px_70px_rgba(15,23,42,0.09)] backdrop-blur"
            style={{ borderColor: "var(--card-border)" }}
          >
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "2800/2000" }}>
              <Image
                src="/assets/logo/erp.jpg"
                alt="EOS ERP Enterprise"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
