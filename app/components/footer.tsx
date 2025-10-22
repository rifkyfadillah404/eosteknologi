"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLang } from "../providers/lang";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#f8f5ec]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-lg bg-blue-500/15 blur-md group-hover:bg-blue-500/25 transition-all" />
                  <Image
                    src="/assets/logo/eos.png"
                    alt="Eos Teknologi"
                    width={44}
                    height={44}
                    className="relative h-11 w-11 rounded-lg object-contain ring-1 ring-blue-500/20"
                  />
                </div>
                <div>
                  <p className="text-base font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">EOS Teknologi</p>
                  <p className="text-xs text-slate-500 italic">Manufacturing System Specialist</p>
                </div>
              </div>
              <div>
                <nav className="flex flex-wrap gap-4 text-sm">
                  <Link href="/produk" className="text-slate-600 transition-all hover:text-blue-600 hover:translate-x-0.5">Produk</Link>
                  <Link href="/addon" className="text-slate-600 transition-all hover:text-blue-600 hover:translate-x-0.5">Add ON</Link>
                  <Link href="/case-studies" className="text-slate-600 transition-all hover:text-blue-600 hover:translate-x-0.5">Case Studies</Link>
                  <Link href="/galeri" className="text-slate-600 transition-all hover:text-blue-600 hover:translate-x-0.5">Galeri</Link>
                  <Link href="/blog" className="text-slate-600 transition-all hover:text-blue-600 hover:translate-x-0.5">BLOG</Link>
                  <Link href="/kontak" className="text-slate-600 transition-all hover:text-blue-600 hover:translate-x-0.5">Kontak</Link>
                </nav>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-800">{t("footer.office", "Our Office")}</p>
              <p className="text-sm font-semibold text-slate-700">PT. EOS TEKNOLOGI INDONESIA</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Manhattan Square Mid Tower Building, Jl. TB Simatupang Kav 1 – S Ps. Minggu, Jakarta.
              </p>
              <p className="text-sm text-slate-600">Senin – Jumat : 08.00 – 17.00</p>
              <p className="text-sm text-slate-600">Sabtu – Minggu : Closed</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-800">{t("footer.contact", "Kontak")}</p>
              <p className="text-sm text-slate-600">Fast Respon (1) : <a href="tel:+628111170405" className="text-blue-600 hover:text-blue-500 transition-colors">+62 81111 70405</a></p>
              <p className="text-sm text-slate-600">Fast Respon (2) : <a href="tel:+6281318288881" className="text-blue-600 hover:text-blue-500 transition-colors">+62 813 1828 8881</a></p>
              <p className="text-sm text-slate-600">Telp : <a href="tel:+622180641070" className="text-blue-600 hover:text-blue-500 transition-colors">021 – 8064 1070</a></p>
              <p className="text-sm text-slate-600">Email : <a href="mailto:info@eosteknologi.com" className="text-blue-600 hover:text-blue-500 transition-colors">info@eosteknologi.com</a></p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-400/40 hover:text-blue-600 hover:scale-110"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-400/40 hover:text-blue-600 hover:scale-110"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-400/40 hover:text-blue-600 hover:scale-110"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-400/40 hover:text-blue-600 hover:scale-110"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} Eos Teknologi. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about-us" className="transition-all hover:text-blue-600">{t("footer.about", "About-Us")}</Link>
              <Link href="/privacy-policy" className="transition-all hover:text-blue-600">{t("footer.privacy", "Privacy-Policy")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
