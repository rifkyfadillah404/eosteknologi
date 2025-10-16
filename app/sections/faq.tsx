import { SectionHeader } from "../components/section-header";

const faqs = [
  { q: "Berapa lama proses implementasi?", a: "Tergantung ruang lingkup. Rata‑rata 6–12 minggu untuk modul inti." },
  { q: "Apakah modul bisa dikustomisasi?", a: "Ya. Kami menyesuaikan workflow, field, dan laporan sesuai kebutuhan." },
  { q: "Bagaimana dukungan purna jual?", a: "Tersedia SLA, kanal support, serta pelatihan berkala untuk tim Anda." },
  { q: "Apakah ada integrasi ke CEISA 4.0?", a: "Ada. Kami mendukung H2H CEISA 4.0 dan validasi dokumen PIB/PEB/TPB." },
];

export function FAQSection() {
  return (
    <section className="py-24" id="faq">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="FAQ"
          title="Pertanyaan yang sering diajukan"
          description="Jika pertanyaan Anda belum terjawab, hubungi kami untuk konsultasi singkat."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item, idx) => (
            <div key={item.q} className="p-6">
              <p className="text-base font-semibold text-slate-900">{idx + 1}. {item.q}</p>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
