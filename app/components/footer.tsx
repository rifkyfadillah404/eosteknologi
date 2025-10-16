import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo/eos.png"
                  alt="Eos Teknologi"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-md object-contain"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">EOS Teknologi</p>
                  <p className="text-xs text-slate-500">Manufacturing System Specialist</p>
                </div>
              </div>
              <div>
                <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <Link href="/produk" className="transition hover:text-blue-600">Produk</Link>
                  <Link href="/addon" className="transition hover:text-blue-600">Add ON</Link>
                  <Link href="/galeri" className="transition hover:text-blue-600">Galeri</Link>
                  <Link href="/blog" className="transition hover:text-blue-600">BLOG</Link>
                  <Link href="/kontak" className="transition hover:text-blue-600">Kontak</Link>
                </nav>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Our Office</p>
              <p className="text-sm text-slate-700">PT. EOS TEKNOLOGI INDONESIA</p>
              <p className="text-sm text-slate-600">
                The Manhattan Square Mid Tower Building, Jl. TB Simatupang Kav 1 – S Ps. Minggu, Jakarta.
              </p>
              <p className="text-sm text-slate-600">Senin – Jumat : 08.00 – 17.00</p>
              <p className="text-sm text-slate-600">Sabtu – Minggu : Closed</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Kontak</p>
              <p className="text-sm text-slate-600">Fast Respon (1) : <a href="tel:+628111170405" className="hover:text-blue-600">+62 81111 70405</a></p>
              <p className="text-sm text-slate-600">Fast Respon (2) : <a href="tel:+6281318288881" className="hover:text-blue-600">+62 813 1828 8881</a></p>
              <p className="text-sm text-slate-600">Telp : <a href="tel:+622180641070" className="hover:text-blue-600">021 – 8064 1070</a></p>
              <p className="text-sm text-slate-600">Email : <a href="mailto:info@eosteknologi.com" className="hover:text-blue-600">info@eosteknologi.com</a></p>
              <div className="mt-4 flex items-center gap-4 text-slate-600">
                <a href="#" aria-label="Facebook" className="transition hover:text-[color:var(--accent)]"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="transition hover:text-[color:var(--accent)]"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="transition hover:text-[color:var(--accent)]"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="YouTube" className="transition hover:text-[color:var(--accent)]"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} Eos Teknologi. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about-us" className="hover:text-blue-600">About-Us</Link>
              <Link href="/privacy-policy" className="hover:text-blue-600">Privacy-Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
