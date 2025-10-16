import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowCard } from "../components/glow-card";

export function CallToActionSection() {
  return (
    <section className="py-24" id="cta">
      <div className="mx-auto max-w-5xl px-6">
        <GlowCard className="p-12 text-center md:text-left">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Konsultasi gratis
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Siap tingkatkan kehadiran online? Ceritakan kebutuhanmu, kami siapkan proposal personal.
              </h2>
              <p className="text-base text-slate-500">
                Tim kami membantu memilih teknologi, paket, dan timeline paling pas untuk memastikan proyek berjalan mulus dari kickoff hingga launch.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="https://wa.me/6285780520587?text=Halo%20Eos%20Teknologi,%20saya%20butuh%20jasa%20pembuatan%20website"
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
              >
                Chat WhatsApp
                <MessageCircle className="ml-2 h-4 w-4" strokeWidth={1.6} />
              </Link>
              <Link
                href="mailto:hello@eosteknologi.com?subject=Konsultasi%20Pembuatan%20Website"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                Kirim Email
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
