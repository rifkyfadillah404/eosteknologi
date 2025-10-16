import Image from "next/image";
import { SectionHeader } from "../components/section-header";

const partnerImages = [
  { src: "/assets/PT.-Bukaka-Teknik-Utama.png", alt: "PT. Bukaka Teknik Utama" },
  { src: "/assets/epiterma.jpg", alt: "Epiterma" },
  { src: "/assets/pt_anugrah_tambang_industri_logo.jpg", alt: "PT. Anugrah Tambang Industri" },
  { src: "/assets/seidensticker.png", alt: "Seidensticker" },
  { src: "/assets/sri-trang.jpg", alt: "Sri Trang" },
  { src: "/assets/yamakawa.png", alt: "Yamakawa" },
];

export function PartnersSection() {
  return (
    <section className="py-24" id="partners">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Kerja Sama Perusahaan"
          title="Dipercaya oleh perusahaan dan brand"
          description="Kami berkolaborasi dengan berbagai perusahaan untuk membangun kehadiran digital yang modern dan berorientasi hasil."
          align="center"
        />
      </div>
      <div className="mt-12 w-full">
        <div className="marquee bg-[#6ccef5] py-6">
          <div
            className="marquee__track"
            style={{ ['--marquee-duration' as any]: '30s' }}
          >
            {partnerImages.map((img) => (
              <div key={img.src} className="flex h-20 w-40 items-center justify-center opacity-80 transition hover:opacity-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
            {partnerImages.map((img) => (
              <div key={img.src + '-dup'} className="flex h-20 w-40 items-center justify-center opacity-80 transition hover:opacity-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
