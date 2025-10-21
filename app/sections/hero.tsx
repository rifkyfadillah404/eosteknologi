"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { BackgroundBeams } from "../components/background-beams";
import { BackgroundRipple } from "../components/background-ripple";
import { useLang } from "../providers/lang";

export function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_90%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(800px_450px_at_10%_0,rgba(139,92,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_50%,rgba(6,182,212,0.08),transparent)]" />
        <BackgroundRipple className="z-10" />
        <BackgroundBeams className="z-20 opacity-75" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-20 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-xs font-medium text-blue-600">Enterprise ERP Solution</span>
            </div>
            <h1 className="hero-title text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {t("hero.title", "Solusi ERP yang cerdas dan hemat biaya untuk bisnis global di Indonesia")}
            </h1>
            <p className="max-w-xl text-base text-slate-600 leading-relaxed md:text-lg">
              {t("hero.subtitle", "Platform ERP fleksibel yang dapat disesuaikan, terintegrasi mulus dengan regulasi perdagangan Indonesia, dan didukung multibahasa.")}
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <Link href="#cta" className="btn btn-primary group">
              {t("hero.ctaPrimary", "Hubungi Kami")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#features" className="btn btn-outline">
              {t("hero.ctaSecondary", "Lihat Fitur ERP")}
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            {[
              t("hero.b1", "Biaya lebih rendah dibandingkan penyedia ERP besar"),
              t("hero.b2", "Fleksibel dan dapat disesuaikan sesuai kebutuhan"),
              t("hero.b3", "Integrasi mulus dengan peraturan perdagangan di Indonesia"),
              t("hero.b4", "Dukungan multibahasa (Inggris, Jepang, Indonesia)"),
            ].map((item) => (
              <span key={item} className="flex items-center gap-3 text-slate-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 ring-1 ring-blue-500/30">
                  <Check className="h-3.5 w-3.5 text-blue-400" strokeWidth={2.5} />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 blur-3xl" />
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
          >
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-slate-100" style={{ aspectRatio: "2800/2000" }}>
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
