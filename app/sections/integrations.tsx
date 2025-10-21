"use client";
import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { IconBadge } from "../components/icon-badge";
import { LinkIcon, Wallet, Database, MessageSquare } from "lucide-react";
import { useLang } from "../providers/lang";

const items = [
  { icon: LinkIcon, title: "API & Webhook", description: "Integrasi sistem internal dan eksternal melalui REST API dan webhook yang aman." },
  { icon: Wallet, title: "Pembayaran", description: "Gateway pembayaran dan e-Faktur, rekonsiliasi otomatis, dan pelaporan terpusat." },
  { icon: Database, title: "CEISA & Kepabeanan", description: "Host-to-Host CEISA 4.0, validasi dokumen PIB/PEB/TPB secara real-time." },
  { icon: MessageSquare, title: "WhatsApp & Notifikasi", description: "Kirim notifikasi transaksi dan status produksi otomatis ke WhatsApp." },
];

export function IntegrationsSection() {
  const { t } = useLang();
  return (
    <section className="bg-[#f8f5ec] py-24" id="integrations">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline={t("integrations.overline", "Integrasi")}
          title={t("integrations.title", "Terhubung dengan ekosistem bisnis Anda")}
          description={t("integrations.desc", "Sambungkan ERP dengan pembayaran, kepabeanan, dan kanal komunikasi untuk alur kerja yang seamless.")}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <GlowCard key={item.title} className="h-full p-6">
              <div className="space-y-4">
                <IconBadge icon={item.icon} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{
                    t(`integrations.item${idx+1}.title`, item.title)
                  }</h3>
                  <p className="text-sm text-slate-600">{
                    t(`integrations.item${idx+1}.desc`, item.description)
                  }</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
