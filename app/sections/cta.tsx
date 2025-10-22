"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowCard } from "../components/glow-card";
import { useLang } from "../providers/lang";
import { ConsultationTrigger } from "../components/consultation-trigger";

export function CallToActionSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-[#f8f5ec] pt-20 pb-10" id="cta">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      <div className="w-full relative">
        <div className="w-full rounded-none bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 border-y border-white/10 backdrop-blur-xl p-12 text-center text-white md:text-left">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-sm">
                {t("cta.badge", "Konsultasi gratis")}
              </div>
              <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                {t("cta.title", "Siap tingkatkan kehadiran online? Ceritakan kebutuhanmu, kami siapkan proposal personal.")}
              </h2>
              <p className="text-base text-slate-200 leading-relaxed">
                {t("cta.desc", "Tim kami membantu memilih teknologi, paket, dan timeline paling pas untuk memastikan proyek berjalan mulus dari kickoff hingga launch.")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="https://wa.me/6285780520587?text=Halo%20Eos%20Teknologi,%20saya%20butuh%20jasa%20pembuatan%20website"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.whatsapp", "Chat WhatsApp")}
                <MessageCircle className="ml-2 h-4 w-4" strokeWidth={1.6} />
              </Link>
              <ConsultationTrigger className="btn btn-outline" source="Home CTA Section">
                {t("cta.email", "Kirim Email")}
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.6} />
              </ConsultationTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
