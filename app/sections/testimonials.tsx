"use client";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useLang } from "../providers/lang";
import { GlowCard } from "../components/glow-card";
import { SectionHeader } from "../components/section-header";

const testimonials = [
  {
    quote:
      "Perusahaan kami telah memenuhi kebutuhan IT Inventory untuk Kawasan Berikat dengan sistem EOS ini & Antarmuka ke SAP.",
    name: "Klien Manufaktur Indonesia",
    role: "IT Manager",
    avatar: "https://i.pravatar.cc/160?img=12",
    rating: 5,
  },
  {
    quote:
      "Terima kasih telah membantu mengotomatisasi sistem dan perangkat lunak Roll Tracking di perusahaan kertas nasional kami.",
    name: "Perusahaan Kertas Nasional",
    role: "Operations Lead",
    avatar: "https://i.pravatar.cc/160?img=23",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-white py-24" id="testimonials">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline={t("testimonials.overline", "Kepercayaan Klien")}
          title={t("testimonials.title", "Testimoni Mitra yang Bertumbuh Bersama Eos Teknologi")}
          description={t("testimonials.desc", "Kami berkolaborasi dengan para pendiri, tim pemasaran, dan produk untuk menghasilkan dampak yang terukur.")}
          align="center"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <GlowCard key={item.name} className="h-full p-8">
              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={t(`testimonials.item${idx+1}.name`, item.name)}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">{t(`testimonials.item${idx+1}.name`, item.name)}</p>
                  <p className="text-xs text-slate-500">{t(`testimonials.item${idx+1}.role`, item.role)}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[color:var(--accent)]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Quote className="h-6 w-6" strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                <p className="mt-3 text-base text-slate-600">{t(`testimonials.item${idx+1}.quote`, item.quote)}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
