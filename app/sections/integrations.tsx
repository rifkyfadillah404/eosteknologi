import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { IconBadge } from "../components/icon-badge";
import { LinkIcon, Wallet, Database, MessageSquare } from "lucide-react";

const items = [
  { icon: LinkIcon, title: "API & Webhook", description: "Integrasi sistem internal dan eksternal melalui REST API dan webhook yang aman." },
  { icon: Wallet, title: "Pembayaran", description: "Gateway pembayaran dan e-Faktur, rekonsiliasi otomatis, dan pelaporan terpusat." },
  { icon: Database, title: "CEISA & Kepabeanan", description: "Host-to-Host CEISA 4.0, validasi dokumen PIB/PEB/TPB secara real-time." },
  { icon: MessageSquare, title: "WhatsApp & Notifikasi", description: "Kirim notifikasi transaksi dan status produksi otomatis ke WhatsApp." },
];

export function IntegrationsSection() {
  return (
    <section className="py-24" id="integrations">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Integrasi"
          title="Terhubung dengan ekosistem bisnis Anda"
          description="Sambungkan ERP dengan pembayaran, kepabeanan, dan kanal komunikasi untuk alur kerja yang seamless."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <GlowCard key={item.title} className="h-full p-6">
              <div className="space-y-4">
                <IconBadge icon={item.icon} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
