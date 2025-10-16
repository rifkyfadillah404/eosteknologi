"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "PRODUK", href: "/produk" },
  { label: "ADD ON", href: "/addon" },
  { label: "GALERI", href: "/galeri" },
  { label: "BLOG", href: "/blog" },
  { label: "KONTAK", href: "/kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--accent)]/20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-[linear-gradient(to_right,rgba(37,150,190,0.12),rgba(255,255,255,0.92))] shadow-md">
      <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo/eos.png"
                alt="Eos Teknologi"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-contain"
                priority
              />
              <span className="text-sm font-semibold text-slate-900">EOS Teknologi</span>
            </Link>

          <nav className="hidden gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    `px-3 py-2 text-sm font-semibold rounded-full transition ` +
                    (isActive
                      ? `text-[color:var(--accent)] underline underline-offset-8 decoration-[color:var(--accent)] decoration-[3px]`
                      : `text-slate-700 hover:text-[color:var(--accent)] hover:underline underline-offset-8 decoration-[color:var(--accent)] decoration-[3px]`)
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

            <button
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm md:hidden hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--accent)]"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Buka menu navigasi"
            >
              Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

          {open && (
            <>
              <div
                className="fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-sm md:hidden"
                onClick={() => setOpen(false)}
              />
              <div
                id="mobile-nav"
                role="dialog"
                aria-modal="true"
                className="fixed top-16 inset-x-4 z-40 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl ring-1 ring-[color:var(--accent)]/20 md:hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:text-[color:var(--accent)] hover:underline underline-offset-6 decoration-[color:var(--accent)] decoration-[3px]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/kontak"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(43,189,238,0.35)]"
                  onClick={() => setOpen(false)}
                >
                  Jadwalkan Demo
                </Link>
              </div>
            </>
          )}
      </div>
    </header>
  );
}
