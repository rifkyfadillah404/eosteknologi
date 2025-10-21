"use client";
import { SectionHeader } from "../components/section-header";
import { useLang } from "../providers/lang";
import Image from "next/image";

export function AboutSection() {
  const { t } = useLang();
  return (
    <section className="bg-white py-24 text-slate-900" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          align="center"
          overline={t("about.overline", "About Us")}
          title={t("about.title", "Apa itu EOS ERP? / EOS ERPとは？")}
          description={t("about.desc", "Sistem manajemen terintegrasi untuk industri manufaktur yang menyederhanakan dan mengoptimalkan seluruh proses bisnis.")}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/product/metting.jpg"
              alt={t("about.imageAlt", "Tim EOS saat implementasi di pabrik")}
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-slate-600 md:text-base">
            <p>{t("about.p1", "EOS ERP adalah sistem manajemen terintegrasi yang dirancang khusus untuk industri manufaktur, yang bertujuan untuk menyederhanakan dan mengoptimalkan seluruh proses bisnis. Dengan EOS ERP, perusahaan dapat mengelola secara terpusat berbagai aspek operasional, mulai dari produksi, persediaan, penjualan, pembelian, hingga akuntansi dan operasi impor/ekspor. Sistem ini memberikan solusi end-to-end yang memungkinkan perusahaan untuk meningkatkan efisiensi, mengurangi biaya, dan meningkatkan akurasi data secara real-time.")}</p>
            <p>{t("about.p2", "Dengan EOS ERP, setiap departemen dapat bekerja dengan informasi yang konsisten dan terintegrasi, memungkinkan pengambilan keputusan yang lebih cepat dan tepat. Sistem ini juga dilengkapi dengan fitur-fitur seperti pelaporan yang mendalam, manajemen rantai pasokan yang lebih baik, serta sistem otomatisasi yang meminimalisir kesalahan manusia.")}</p>
            <p>{t("about.p3", "Dengan demikian, EOS ERP tidak hanya meningkatkan produktivitas tetapi juga memungkinkan perusahaan untuk beradaptasi dengan perubahan pasar yang cepat, mengelola risiko lebih baik, dan memperkuat daya saing di pasar global.")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
