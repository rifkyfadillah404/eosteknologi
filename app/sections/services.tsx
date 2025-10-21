"use client";
import { GlowCard } from "../components/glow-card";
import { BentoGrid } from "../components/bento-grid";
import { SectionHeader } from "../components/section-header";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  Server,
  FileText,
  Workflow,
  Calculator,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "ERP (Enterprise Resource Planning)",
    description:
      "Integrasi modul keuangan, persediaan, pembelian, penjualan, dan produksi dalam satu sistem.",
    image: "/assets/product/erp.jpg",
  },
  {
    icon: Calendar,
    title: "MRP, Auto Scheduler, APS",
    description:
      "Perencanaan kebutuhan material, penjadwalan otomatis, dan advanced planning & scheduling berbasis kapasitas.",
    image: "/assets/product/mrp.jpg",
  },
  {
    icon: Server,
    title: "Host to Host CEISA 4.0",
    description:
      "Integrasi H2H CEISA 4.0 untuk pertukaran data kepabeanan yang aman, stabil, dan terukur.",
    image: "/assets/product/cheisa.jpg",
  },
  {
    icon: FileText,
    title: "Interface Real‑Time Bea Cukai (PIB/PEB/TPB)",
    description:
      "Integrasi dan validasi dokumen sesuai ketentuan Bea Cukai untuk PIB, PEB, dan TPB secara real‑time.",
    image: "/assets/product/beacukai.jpg",
  },
];

import { useLang } from "../providers/lang";

export function ServicesSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-white py-32" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_50%,rgba(59,130,246,0.06),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 relative">
        <SectionHeader
          overline={t("services.overline", "Layanan")}
          title={t("services.title", "Fitur sesuai kebutuhan operasional dan kepabeanan")}
          description={t("services.desc", "Fokus pada keakuratan data, kepatuhan regulasi, dan efisiensi proses dari hulu ke hilir.")}
        />
        <div className="mt-16">
          <BentoGrid
            items={services.map((service, idx) => ({
              title: t(`services.item${idx+1}.title`, service.title),
              description: t(`services.item${idx+1}.desc`, service.description),
              icon: (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20">
                  <service.icon className="h-5 w-5 text-blue-500" />
                </div>
              ),
              media: (
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={t(`services.item${idx+1}.imageAlt`, service.title)}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-black/5 to-transparent" />
                </div>
              ),
              className:
                idx === 0
                  ? "sm:col-span-3"
                  : idx === 1
                  ? "sm:col-span-3"
                  : idx === 2
                  ? "sm:col-span-4"
                  : "sm:col-span-2",
            }))}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
