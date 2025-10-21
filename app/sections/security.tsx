"use client";
import { SectionHeader } from "../components/section-header";
import { GlowCard } from "../components/glow-card";
import { ShieldCheck, LockKeyhole, CloudCog, FileLock } from "lucide-react";
import { useLang } from "../providers/lang";

const points = [
  { icon: ShieldCheck, title: "Kontrol Akses Berlapis", description: "Role‑based access, audit trail, dan otorisasi granular untuk setiap modul." },
  { icon: LockKeyhole, title: "Keamanan Data", description: "Enkripsi data dalam transit dan at‑rest dengan praktik terbaik industri." },
  { icon: CloudCog, title: "Backup & Recovery", description: "Backup terjadwal, opsi disaster recovery, dan pemulihan cepat saat insiden." },
  { icon: FileLock, title: "Kepatuhan Regulasi", description: "Selaras dengan kebijakan kepabeanan dan standar keamanan yang relevan." },
];

export function SecuritySection() {
  const { t } = useLang();
  return (
    <section className="bg-[#f8f5ec] py-24" id="security">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline={t("security.overline", "Keamanan")}
          title={t("security.title", "Standar keamanan sesuai kebutuhan enterprise")}
          description={t("security.desc", "Lindungi data dan operasional dengan kontrol akses, enkripsi, dan proses pemulihan yang andal.")}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, idx) => (
            <GlowCard key={p.title} className="h-full p-6">
              <div className="space-y-4">
                <p.icon className="h-6 w-6 text-[color:var(--accent)]" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{t(`security.point${idx+1}.title`, p.title)}</h3>
                  <p className="text-sm text-slate-600">{t(`security.point${idx+1}.desc`, p.description)}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
