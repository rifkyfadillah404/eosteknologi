import { IconBadge } from "../components/icon-badge";
import { GlowCard } from "../components/glow-card";
import { SectionHeader } from "../components/section-header";
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
  },
  {
    icon: Calendar,
    title: "MRP, Auto Scheduler, APS",
    description:
      "Perencanaan kebutuhan material, penjadwalan otomatis, dan advanced planning & scheduling berbasis kapasitas.",
  },
  {
    icon: Server,
    title: "Host to Host CEISA 4.0",
    description:
      "Integrasi H2H CEISA 4.0 untuk pertukaran data kepabeanan yang aman, stabil, dan terukur.",
  },
  {
    icon: FileText,
    title: "Interface Real‑Time Bea Cukai (PIB/PEB/TPB)",
    description:
      "Integrasi dan validasi dokumen sesuai ketentuan Bea Cukai untuk PIB, PEB, dan TPB secara real‑time.",
  },
  {
    icon: Workflow,
    title: "Subcon Management System",
    description:
      "Kelola proses subkontraktor: BOM, WIP, pengiriman/retur, dan alur approval yang transparan.",
  },
  {
    icon: Calculator,
    title: "Manajemen Jasa Maklon & HS Code",
    description:
      "Pengelolaan jasa maklon sesuai ketentuan, hitung bea masuk impor, HS Code, dan regulasi terkait.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Layanan"
          title="Fitur sesuai kebutuhan operasional dan kepabeanan"
          description="Fokus pada keakuratan data, kepatuhan regulasi, dan efisiensi proses dari hulu ke hilir."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <GlowCard key={service.title} className="h-full p-6">
              <div className="space-y-4">
                <IconBadge icon={service.icon} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-500">{service.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
