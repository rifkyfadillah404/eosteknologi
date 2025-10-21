"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "id" | "en";
type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

const dict: Record<Lang, Record<string, string>> = {
  id: {
    "nav.products": "PRODUK",
    "nav.addon": "ADD ON",
    "nav.gallery": "GALERI",
    "nav.blog": "BLOG",
    "nav.contact": "KONTAK",

    "hero.title": "Solusi ERP yang cerdas dan hemat biaya untuk bisnis global di Indonesia",
    "hero.subtitle": "Platform ERP fleksibel yang dapat disesuaikan, terintegrasi mulus dengan regulasi perdagangan Indonesia, dan didukung multibahasa.",
    "hero.ctaPrimary": "Hubungi Kami",
    "hero.ctaSecondary": "Lihat Fitur ERP",
    "hero.b1": "Biaya lebih rendah dibandingkan penyedia ERP besar",
    "hero.b2": "Fleksibel dan dapat disesuaikan sesuai kebutuhan",
    "hero.b3": "Integrasi mulus dengan peraturan perdagangan di Indonesia",
    "hero.b4": "Dukungan multibahasa (Inggris, Jepang, Indonesia)",

    "services.overline": "Layanan",
    "services.title": "Fitur sesuai kebutuhan operasional dan kepabeanan",
    "services.desc": "Fokus pada keakuratan data, kepatuhan regulasi, dan efisiensi proses dari hulu ke hilir.",
    "services.item1.title": "ERP (Enterprise Resource Planning)",
    "services.item1.desc": "Integrasi modul keuangan, persediaan, pembelian, penjualan, dan produksi dalam satu sistem.",
    "services.item1.imageAlt": "ERP (Enterprise Resource Planning)",
    "services.item2.title": "MRP, Auto Scheduler, APS",
    "services.item2.desc": "Perencanaan kebutuhan material, penjadwalan otomatis, dan advanced planning & scheduling berbasis kapasitas.",
    "services.item2.imageAlt": "MRP, Auto Scheduler, APS",
    "services.item3.title": "Host to Host CEISA 4.0",
    "services.item3.desc": "Integrasi H2H CEISA 4.0 untuk pertukaran data kepabeanan yang aman, stabil, dan terukur.",
    "services.item3.imageAlt": "Host to Host CEISA 4.0",
    "services.item4.title": "Interface Real‑Time Bea Cukai (PIB/PEB/TPB)",
    "services.item4.desc": "Integrasi dan validasi dokumen sesuai ketentuan Bea Cukai untuk PIB, PEB, dan TPB secara real‑time.",
    "services.item4.imageAlt": "Interface Bea Cukai",
    "services.item5.title": "Subcon Management System",
    "services.item5.desc": "Kelola proses subkontraktor: BOM, WIP, pengiriman/retur, dan alur approval yang transparan.",
    "services.item5.imageAlt": "Subcon Management System",
    "services.item6.title": "Manajemen Jasa Maklon & HS Code",
    "services.item6.desc": "Pengelolaan jasa maklon sesuai ketentuan, hitung bea masuk impor, HS Code, dan regulasi terkait.",
    "services.item6.imageAlt": "Manajemen Jasa Maklon & HS Code",

    "cta.badge": "Konsultasi gratis",
    "cta.title": "Siap tingkatkan kehadiran online? Ceritakan kebutuhanmu, kami siapkan proposal personal.",
    "cta.desc": "Tim kami membantu memilih teknologi, paket, dan timeline paling pas untuk memastikan proyek berjalan mulus dari kickoff hingga launch.",
    "cta.whatsapp": "Chat WhatsApp",
    "cta.email": "Kirim Email",

    "partners.overline": "Kerja Sama Perusahaan",
    "partners.title": "Dipercaya oleh perusahaan dan brand",
    "partners.desc": "Kami berkolaborasi dengan berbagai perusahaan untuk membangun kehadiran digital yang modern dan berorientasi hasil.",

    "testimonials.overline": "Kepercayaan Klien",
    "testimonials.title": "Testimoni Mitra yang Bertumbuh Bersama Eos Teknologi",
    "testimonials.desc": "Kami berkolaborasi dengan para pendiri, tim pemasaran, dan produk untuk menghasilkan dampak yang terukur.",
    "testimonials.item1.name": "Klien Manufaktur Indonesia",
    "testimonials.item1.role": "IT Manager",
    "testimonials.item1.quote": "Perusahaan kami telah memenuhi kebutuhan IT Inventory untuk Kawasan Berikat dengan sistem EOS ini & Antarmuka ke SAP.",
    "testimonials.item2.name": "Perusahaan Kertas Nasional",
    "testimonials.item2.role": "Operations Lead",
    "testimonials.item2.quote": "Terima kasih telah membantu mengotomatisasi sistem dan perangkat lunak Roll Tracking di perusahaan kertas nasional kami.",

    "footer.about": "About-Us",
    "footer.privacy": "Privacy-Policy",
    "footer.office": "Our Office",
    "footer.contact": "Kontak",
  },
  en: {
    "nav.products": "PRODUCTS",
    "nav.addon": "ADD-ON",
    "nav.gallery": "GALLERY",
    "nav.blog": "BLOG",
    "nav.contact": "CONTACT",

    "hero.title": "Smart, cost‑effective ERP for global businesses in Indonesia",
    "hero.subtitle": "Flexible ERP tailored to your needs, seamlessly compliant with Indonesian trade regulations, with multilingual support.",
    "hero.ctaPrimary": "Contact Us",
    "hero.ctaSecondary": "See ERP Features",
    "hero.b1": "Lower cost than major ERP vendors",
    "hero.b2": "Flexible and customizable to your needs",
    "hero.b3": "Seamless integration with Indonesian trade regulations",
    "hero.b4": "Multilingual support (English, Japanese, Indonesian)",

    "services.overline": "Services",
    "services.title": "Features for operations and customs compliance",
    "services.desc": "Focus on data accuracy, regulatory compliance, and end‑to‑end process efficiency.",
    "services.item1.title": "ERP (Enterprise Resource Planning)",
    "services.item1.desc": "Integrates finance, inventory, purchasing, sales, and production in one system.",
    "services.item1.imageAlt": "ERP (Enterprise Resource Planning)",
    "services.item2.title": "MRP, Auto Scheduler, APS",
    "services.item2.desc": "Material planning, auto scheduling, and capacity‑based advanced planning & scheduling.",
    "services.item2.imageAlt": "MRP, Auto Scheduler, APS",
    "services.item3.title": "Host to Host CEISA 4.0",
    "services.item3.desc": "CEISA 4.0 H2H integration for secure, stable, and scalable customs data exchange.",
    "services.item3.imageAlt": "Host to Host CEISA 4.0",
    "services.item4.title": "Real‑Time Customs Interface (PIB/PEB/TPB)",
    "services.item4.desc": "Real‑time integration and validation for PIB, PEB, and TPB per customs rules.",
    "services.item4.imageAlt": "Customs Interface",
    "services.item5.title": "Subcon Management System",
    "services.item5.desc": "Manage subcontractor processes: BOM, WIP, shipping/returns, and transparent approvals.",
    "services.item5.imageAlt": "Subcon Management System",
    "services.item6.title": "Makloon Services & HS Code Management",
    "services.item6.desc": "Manage makloon services per regulations; calculate import duties, HS Codes, and related rules.",
    "services.item6.imageAlt": "Makloon Services & HS Code Management",

    "cta.badge": "Free consultation",
    "cta.title": "Ready to elevate your online presence? Tell us your needs and we'll prepare a tailored proposal.",
    "cta.desc": "We help you choose the right tech, package, and timeline to ensure a smooth journey from kickoff to launch.",
    "cta.whatsapp": "Chat on WhatsApp",
    "cta.email": "Send Email",

    "partners.overline": "Corporate Partnerships",
    "partners.title": "Trusted by companies and brands",
    "partners.desc": "We collaborate with various companies to build modern, results‑driven digital presence.",

    "testimonials.overline": "Client Trust",
    "testimonials.title": "Testimonials from partners growing with Eos Teknologi",
    "testimonials.desc": "We collaborate with founders, marketing, and product teams to deliver measurable impact.",
    "testimonials.item1.name": "Indonesian Manufacturing Client",
    "testimonials.item1.role": "IT Manager",
    "testimonials.item1.quote": "Our company has fulfilled IT Inventory needs for Bonded Zone with EOS system & SAP Interface.",
    "testimonials.item2.name": "National Paper Company",
    "testimonials.item2.role": "Operations Lead",
    "testimonials.item2.quote": "Thank you for helping automate the Roll Tracking system and software at our national paper company.",

    "footer.about": "About Us",
    "footer.privacy": "Privacy Policy",
    "footer.office": "Our Office",
    "footer.contact": "Contact",

    "about.overline": "About Us",
    "about.title": "What is EOS ERP?",
    "about.desc": "An integrated management system for manufacturing to simplify and optimize end‑to‑end business processes.",
    "about.p1": "EOS ERP is an integrated management system built for manufacturing, designed to simplify and optimize all business processes. Manage production, inventory, sales, purchasing, accounting, and import/export from one place, improving efficiency, reducing costs, and increasing real‑time data accuracy.",
    "about.p2": "With EOS ERP, departments operate on consistent, integrated data for faster, better decisions. It includes deep reporting, improved supply chain management, and automation that reduces human errors.",
    "about.p3": "EOS ERP not only boosts productivity, but also helps companies adapt quickly to market changes, manage risk more effectively, and strengthen competitiveness globally.",

    "integrations.overline": "Integrations",
    "integrations.title": "Connect with your business ecosystem",
    "integrations.desc": "Link ERP to payments, customs, and communication channels for seamless workflows.",
    "integrations.item1.title": "API & Webhooks",
    "integrations.item1.desc": "Integrate internal/external systems with secure REST APIs and webhooks.",
    "integrations.item2.title": "Payments",
    "integrations.item2.desc": "Payment gateways and e‑Invoicing, automated reconciliation, and centralized reporting.",
    "integrations.item3.title": "CEISA & Customs",
    "integrations.item3.desc": "Host‑to‑Host CEISA 4.0 with real‑time validation for PIB/PEB/TPB.",
    "integrations.item4.title": "WhatsApp & Notifications",
    "integrations.item4.desc": "Send automatic transaction and production status updates via WhatsApp.",

    "implementation.overline": "Implementation",
    "implementation.title": "A structured methodology for smooth adoption",
    "implementation.desc": "We support every stage from planning to go‑live for a seamless transition.",
    "implementation.step1.title": "Assessment & Plan",
    "implementation.step1.desc": "Process analysis, goal alignment, and phased implementation planning.",
    "implementation.step2.title": "Customization & Configuration",
    "implementation.step2.desc": "Adjust modules, workflows, and user access to fit your needs.",
    "implementation.step3.title": "Data Migration",
    "implementation.step3.desc": "Extract, cleanse, and import validated data.",
    "implementation.step4.title": "Training & Go‑Live",
    "implementation.step4.desc": "Team training, system testing, and launch support.",

    "security.overline": "Security",
    "security.title": "Enterprise‑grade security standards",
    "security.desc": "Protect data and operations with access control, encryption, and reliable recovery.",
    "security.point1.title": "Layered Access Control",
    "security.point1.desc": "Role‑based access, audit trails, and granular authorization per module.",
    "security.point2.title": "Data Security",
    "security.point2.desc": "Encryption in transit and at rest with industry best practices.",
    "security.point3.title": "Backup & Recovery",
    "security.point3.desc": "Scheduled backups, disaster recovery options, and quick incident recovery.",
    "security.point4.title": "Regulatory Compliance",
    "security.point4.desc": "Aligned with customs policies and relevant security standards.",

    "faq.overline": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.desc": "If your question isn’t answered here, contact us for a quick consultation.",
    "faq.q1": "How long does implementation take?",
    "faq.a1": "Depends on scope. Typically 6–12 weeks for core modules.",
    "faq.q2": "Are modules customizable?",
    "faq.a2": "Yes. We adapt workflows, fields, and reports to your needs.",
    "faq.q3": "What about after‑sales support?",
    "faq.a3": "SLA, support channels, and periodic training for your team are available.",
    "faq.q4": "Is CEISA 4.0 integration available?",
    "faq.a4": "Yes. We support H2H CEISA 4.0 and real‑time validation for PIB/PEB/TPB.",

    "testimonials.overline": "Client Trust",
    "testimonials.title": "Testimonials from partners growing with Eos Teknologi",
    "testimonials.desc": "We collaborate with founders, marketing, and product teams to deliver measurable impact.",
  },
};

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (stored === "id" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key: string, fallback?: string) => dict[lang][key] ?? fallback ?? key;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
