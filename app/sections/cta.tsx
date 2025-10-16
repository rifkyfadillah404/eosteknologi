import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GlowCard } from "../components/glow-card";

export function CallToActionSection() {
  return (
    <section className="pt-20 pb-10" id="cta">
      <div className="w-full">
        <div className="w-full rounded-none bg-[#2596be] p-12 text-center text-white md:text-left">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Konsultasi gratis
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Siap tingkatkan kehadiran online? Ceritakan kebutuhanmu, kami siapkan proposal personal.
              </h2>
              <p className="text-base text-white/85">
                Tim kami membantu memilih teknologi, paket, dan timeline paling pas untuk memastikan proyek berjalan mulus dari kickoff hingga launch.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="https://wa.me/6285780520587?text=Halo%20Eos%20Teknologi,%20saya%20butuh%20jasa%20pembuatan%20website"
                className="btn btn-on-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat WhatsApp
                <MessageCircle className="ml-2 h-4 w-4" strokeWidth={1.6} />
              </Link>
              <Link
                href="mailto:hello@eosteknologi.com?subject=Konsultasi%20Pembuatan%20Website"
                className="btn btn-outline-on-dark"
              >
                Kirim Email
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
