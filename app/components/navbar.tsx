"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "PRODUK", href: "/produk" },
  { label: "ADD ON", href: "/addon" },
  { label: "GALERI", href: "/galeri" },
  { label: "BLOG", href: "/blog" },
  { label: "KONTAK", href: "/kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-[color:var(--accent)] hover:bg-[color:var(--accent-soft)] hover:shadow-[0_8px_30px_rgba(43,189,238,0.18)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

            <button
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              Menu
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

          {open && (
            <div id="mobile-nav" className="md:hidden border-t border-slate-200 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-700"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
      </div>
    </header>
  );
}
