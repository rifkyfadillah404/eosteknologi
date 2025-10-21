"use client";
import { SectionHeader } from "../components/section-header";
import { useLang } from "../providers/lang";
import Image from "next/image";

export function AboutSection() {
  const { t } = useLang();
  return (
    <section className="bg-[#f8f5ec] py-20" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline={t("about.overline", "About Us")}
          title={t("about.title", "Apa itu EOS ERP? / EOS ERPとは？")}
          description={t("about.desc", "Sistem manajemen terintegrasi untuk industri manufaktur yang menyederhanakan dan mengoptimalkan seluruh proses bisnis.")}
        />
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/product/metting.jpg"
                alt={t(
                  "about.imageAlt",
                  "Tim EOS saat implementasi di pabrik"
                )}
                width={1280}
                height={960}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="space-y-4 text-slate-600">
              <p>{t("about.p1", "EOS ERP adalah sistem manajemen terintegrasi yang dirancang khusus untuk industri manufaktur, yang bertujuan untuk menyederhanakan dan mengoptimalkan seluruh proses bisnis. Dengan EOS ERP, perusahaan dapat mengelola secara terpusat berbagai aspek operasional, mulai dari produksi, persediaan, penjualan, pembelian, hingga akuntansi dan operasi impor/ekspor. Sistem ini memberikan solusi end-to-end yang memungkinkan perusahaan untuk meningkatkan efisiensi, mengurangi biaya, dan meningkatkan akurasi data secara real-time.")}</p>
              <p>{t("about.p2", "Dengan EOS ERP, setiap departemen dapat bekerja dengan informasi yang konsisten dan terintegrasi, memungkinkan pengambilan keputusan yang lebih cepat dan tepat. Sistem ini juga dilengkapi dengan fitur-fitur seperti pelaporan yang mendalam, manajemen rantai pasokan yang lebih baik, serta sistem otomatisasi yang meminimalisir kesalahan manusia.")}</p>
              <p>{t("about.p3", "Dengan demikian, EOS ERP tidak hanya meningkatkan produktivitas tetapi juga memungkinkan perusahaan untuk beradaptasi dengan perubahan pasar yang cepat, mengelola risiko lebih baik, dan memperkuat daya saing di pasar global.")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
