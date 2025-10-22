"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "../providers/lang";

const navItemsId = [
  { label: "PRODUK", href: "/product" },
  { label: "ADD ON", href: "/addon" },
  { label: "STUDI KASUS", href: "/case-studies" },
  { label: "GALERI", href: "/galeri" },
  { label: "BLOG", href: "/blog" },
  { label: "KONTAK", href: "/kontak" },
];

const navItemsEn = [
  { label: "PRODUCTS", href: "/product" },
  { label: "ADD-ON", href: "/addon" },
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "GALLERY", href: "/galeri" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const items = lang === "en" ? navItemsEn : navItemsId;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="mx-auto max-w-6xl px-6">
          <div className="relative flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-blue-500/15 blur-md group-hover:bg-blue-500/25 transition-all" />
                <Image
                  src="/assets/logo/eos.png"
                  alt="Eos Teknologi"
                  width={40}
                  height={40}
                  className="relative h-10 w-10 rounded-lg object-contain ring-1 ring-blue-500/20"
                  priority
                />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">EOS Teknologi</span>
            </Link>

          <nav className="hidden md:flex gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    `px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ` +
                    (isActive
                      ? `bg-blue-500/15 text-blue-600 ring-1 ring-blue-500/30 shadow-[0_10px_30px_rgba(59,130,246,0.2)]`
                      : `text-slate-600 hover:text-blue-600 hover:bg-blue-50`)
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

            <div className="flex items-center gap-3">
              <button
                className="hidden md:inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:border-blue-400/50 hover:text-blue-600 transition-all duration-300"
                onClick={() => setLang(lang === "id" ? "en" : "id")}
                aria-label="Ganti bahasa"
              >
                {lang === "id" ? "EN" : "ID"}
              </button>

            <button
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:hidden hover:border-blue-400/50 hover:text-blue-600 transition-all duration-300"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Buka menu navigasi"
            >
              Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            </div>
          </div>

          {open && (
            <>
              <div
                className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm md:hidden"
                onClick={() => setOpen(false)}
              />
              <div
                id="mobile-nav"
                role="dialog"
                aria-modal="true"
                className="fixed top-20 inset-x-4 z-40 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.18)] md:hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-2">
                  <div className="mb-3 flex items-center justify-end">
                    <button
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:border-blue-400/50 hover:text-blue-600 transition-all"
                      onClick={() => setLang(lang === "id" ? "en" : "id")}
                      aria-label="Ganti bahasa"
                    >
                      {lang === "id" ? "EN" : "ID"}
                    </button>
                  </div>
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3.5 text-base font-semibold text-slate-700 transition-all hover:text-blue-600 hover:bg-blue-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/kontak"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(59,130,246,0.3)] hover:shadow-[0_24px_60px_rgba(59,130,246,0.25)] transition-all"
                  onClick={() => setOpen(false)}
                >
                  Hubungi Kami
                </Link>
              </div>
            </>
          )}
      </div>
    </header>
  );
}
