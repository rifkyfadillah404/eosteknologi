"use client";
import Image from "next/image";
import { SectionHeader } from "../components/section-header";
import { useLang } from "../providers/lang";

const partnerImages = [
  { src: "/assets/PT.-Bukaka-Teknik-Utama.png", alt: "PT. Bukaka Teknik Utama" },
  { src: "/assets/epiterma.jpg", alt: "PT. Epiterma Mas Indonesia" },
  { src: "/assets/pt_anugrah_tambang_industri_logo.jpg", alt: "PT. Anugrah Tambang Industri" },
  { src: "/assets/seidensticker.png", alt: "Seidensticker" },
  { src: "/assets/sri-trang.jpg", alt: "Sri Trang Group" },
  { src: "/assets/yamakawa.png", alt: "Yamakawa Rattan" },
];

export function PartnersSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-white py-24 text-slate-900" id="partners">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          align="center"
          overline={t("partners.overline", "Kerja Sama Perusahaan")}
          title={t("partners.title", "Dipercaya oleh perusahaan dan brand manufaktur")}
          description={t("partners.desc", "Partner EOS berasal dari industri elektronik, otomotif, kertas, hingga logistik ekspor. Teknologi kami setia mendampingi transformasi digital mereka.")}
        />
      </div>

      <div className="mt-16 w-full border-y border-slate-200/60 bg-white/80 py-10">
        <div className="marquee">
          <div
            className="marquee__track flex items-center gap-20"
            style={{ ["--marquee-duration" as any]: "24s" }}
          >
            {partnerImages.map((img) => (
              <div key={img.src} className="group relative flex h-24 w-64 shrink-0 items-center justify-center">
                <Image src={img.src} alt={img.alt} width={220} height={96} className="h-full w-full object-contain" />
                <span className="pointer-events-none absolute -bottom-10 left-1/2 w-max -translate-x-1/2 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {img.alt}
                </span>
              </div>
            ))}
            {partnerImages.map((img) => (
              <div key={`${img.src}-dup`} className="group relative flex h-24 w-64 shrink-0 items-center justify-center">
                <Image src={img.src} alt={img.alt} width={220} height={96} className="h-full w-full object-contain" />
                <span className="pointer-events-none absolute -bottom-10 left-1/2 w-max -translate-x-1/2 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  {img.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-blue-100/60 bg-blue-50/80 p-8 text-center shadow-[0_25px_70px_rgba(59,130,246,0.18)]">
          <p className="text-base font-medium text-blue-700">
            {t(
              "partners.callout",
              "Mari bergabung dengan jaringan manufaktur yang mempercayai EOS untuk mengorkestrasi operasi mereka."
            )}
          </p>
          <p className="text-sm text-slate-600">
            {t(
              "partners.calloutDesc",
              "Kami siap membantu Anda membangun roadmap implementasi yang selaras dengan target produksi, compliance, dan ekspansi global."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
