import { Quote } from "lucide-react";
import { GlowCard } from "../components/glow-card";
import { SectionHeader } from "../components/section-header";

const testimonials = [
  {
    quote:
      "NextSite bantu kami merilis company profile yang rapi dan cepat. Trust meningkat dan lead masuk lebih konsisten.",
    name: "Aisyah",
    role: "Founder, NusaPay",
  },
  {
    quote:
      "Eksekusi solid. Desain clean, performa kencang, dan SEO rapih. Onboarding klien jadi jauh lebih mudah.",
    name: "Dimas",
    role: "PM, Sagara Studio",
  },
  {
    quote:
      "Integrasi payment dan WhatsApp berjalan mulus. Tim responsif dan hasilnya sesuai ekspektasi.",
    name: "Kevin",
    role: "CTO, FoodiFY",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24" id="testimonials">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Dipercaya klien"
          title="Apa kata partner yang go-online bersama Eos Teknologi"
          description="Kami bekerja erat dengan founder, marketer, dan tim produk untuk mencapai hasil yang terukur."
          align="center"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlowCard key={item.name} className="h-full p-8">
              <Quote className="h-8 w-8" strokeWidth={1.5} style={{ color: "var(--accent)" }} />
              <p className="mt-6 text-base text-slate-600">{item.quote}</p>
              <div className="mt-8 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-slate-500">{item.role}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
