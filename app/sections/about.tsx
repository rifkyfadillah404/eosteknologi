import { SectionHeader } from "../components/section-header";

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="About Us"
          title="Apa itu EOS ERP? / EOS ERPとは？"
          description="Sistem manajemen terintegrasi untuk industri manufaktur yang menyederhanakan dan mengoptimalkan seluruh proses bisnis."
        />
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-4 text-slate-600">
            <p>
              EOS ERP adalah sistem manajemen terintegrasi yang dirancang khusus untuk industri manufaktur, yang bertujuan untuk menyederhanakan dan mengoptimalkan seluruh proses bisnis. Dengan EOS ERP, perusahaan dapat mengelola secara terpusat berbagai aspek operasional, mulai dari produksi, persediaan, penjualan, pembelian, hingga akuntansi dan operasi impor/ekspor. Sistem ini memberikan solusi end-to-end yang memungkinkan perusahaan untuk meningkatkan efisiensi, mengurangi biaya, dan meningkatkan akurasi data secara real-time.
            </p>
            <p>
              Dengan EOS ERP, setiap departemen dapat bekerja dengan informasi yang konsisten dan terintegrasi, memungkinkan pengambilan keputusan yang lebih cepat dan tepat. Sistem ini juga dilengkapi dengan fitur-fitur seperti pelaporan yang mendalam, manajemen rantai pasokan yang lebih baik, serta sistem otomatisasi yang meminimalisir kesalahan manusia.
            </p>
            <p>
              Dengan demikian, EOS ERP tidak hanya meningkatkan produktivitas tetapi juga memungkinkan perusahaan untuk beradaptasi dengan perubahan pasar yang cepat, mengelola risiko lebih baik, dan memperkuat daya saing di pasar global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

