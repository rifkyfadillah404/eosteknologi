"use client";

import { ArrowRight, Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import {
  FormEvent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ConsultationConfig = {
  source?: string;
};

type ConsultationContextValue = {
  open: (config?: ConsultationConfig) => void;
  close: () => void;
};

const ConsultationModalContext = createContext<ConsultationContextValue | null>(null);

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  notes: "",
};

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState(initialState);
  const [source, setSource] = useState<string | undefined>(undefined);

  const open = useCallback((config?: ConsultationConfig) => {
    setSource(config?.source);
    setFormState(initialState);
    setError(null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    if (!isSubmitting) {
      setIsOpen(false);
      setError(null);
    }
  }, [isSubmitting]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isSubmitting) return;

      const data = new FormData(event.currentTarget);
      const name = (data.get("name") as string | null)?.trim() ?? "";
      const email = (data.get("email") as string | null)?.trim() ?? "";
      const company = (data.get("company") as string | null)?.trim() ?? "";
      const phone = (data.get("phone") as string | null)?.trim() ?? "";
      const notes = (data.get("notes") as string | null)?.trim() ?? "";

      if (!name || !email || !company) {
        setError("Nama, email, dan nama perusahaan wajib diisi.");
        return;
      }

      setError(null);
      setIsSubmitting(true);

      const bodyLines = [
        `Nama: ${name}`,
        `Email: ${email}`,
        `Perusahaan: ${company}`,
        `Nomor Telepon: ${phone || "-"}`,
        source ? `Sumber permintaan: ${source}` : undefined,
        "",
        "Ringkasan Kebutuhan:",
        notes || "(belum diisi)",
      ].filter(Boolean) as string[];

      const params = new URLSearchParams({
        subject: "Brief Project EOS",
        body: bodyLines.join("\n"),
      });

      event.currentTarget.reset();
      setFormState(initialState);

      window.location.href = `mailto:info@eosteknologi.com?${params.toString()}`;

      setTimeout(() => {
        setIsSubmitting(false);
        setIsOpen(false);
      }, 120);
    },
    [isSubmitting, source]
  );

  const contextValue = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ConsultationModalContext.Provider value={contextValue}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-6">
          <div
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
            onClick={close}
            aria-hidden
          />
          <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_38px_110px_rgba(15,23,42,0.32)] lg:max-h-[88vh] lg:grid-cols-[0.46fr_0.54fr]">
            <div className="relative hidden bg-slate-950/95 text-white lg:flex">
              <Image
                src="/assets/logo/gedung.jpg"
                alt="Gedung kantor EOS"
                fill
                className="object-cover opacity-60"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
              <div className="relative flex min-h-full flex-col justify-between p-8">
                <div className="space-y-4">
                  <span className="inline-flex w-max items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                    Konsultasi EOS
                  </span>
                  <p className="text-3xl font-semibold leading-tight">Roadmap digital plant siap dimulai dari brief Anda.</p>
                </div>
                <div className="space-y-3 text-sm text-slate-200">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-200" /> info@eosteknologi.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-200" /> +62 81111 70405 / +62 813 1828 8881
                  </p>
                  <p className="text-slate-300">
                    Tim kami siap meninjau brief Anda dan menjadwalkan sesi diskusi dalam 1x24 jam kerja.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative flex max-h-[88vh] flex-col bg-white">
              <button
                type="button"
                onClick={close}
                className="absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                aria-label="Tutup form konsultasi"
                disabled={isSubmitting}
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="space-y-2 pr-6 sm:pr-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Brief proyek
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">Kirim detail kebutuhan Anda</h3>
                  <p className="text-sm text-slate-600">
                    Lengkapi form singkat ini untuk membantu tim EOS menyiapkan sesi konsultasi dan estimasi implementasi yang relevan.
                  </p>
                </div>

                <div className="mt-6 space-y-5 pr-1">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-left text-sm font-semibold text-slate-700">
                      <span>Nama lengkap*</span>
                      <input
                        name="name"
                        type="text"
                        required
                        defaultValue={formState.name}
                        placeholder="Nama Anda"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25"
                      />
                    </label>
                    <label className="space-y-2 text-left text-sm font-semibold text-slate-700">
                      <span>Email bisnis*</span>
                      <input
                        name="email"
                        type="email"
                        required
                        defaultValue={formState.email}
                        placeholder="nama@perusahaan.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25"
                      />
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-left text-sm font-semibold text-slate-700">
                      <span>Nama perusahaan*</span>
                      <input
                        name="company"
                        type="text"
                        required
                        defaultValue={formState.company}
                        placeholder="PT Contoh Industri"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25"
                      />
                    </label>
                    <label className="space-y-2 text-left text-sm font-semibold text-slate-700">
                      <span>Nomor telepon</span>
                      <input
                        name="phone"
                        type="tel"
                        defaultValue={formState.phone}
                        placeholder="08xxxxxxxxxx"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25"
                      />
                    </label>
                  </div>
                  <label className="space-y-2 text-left text-sm font-semibold text-slate-700">
                    <span>Ringkasan kebutuhan atau tantangan*</span>
                    <textarea
                      name="notes"
                      required
                      rows={5}
                      defaultValue={formState.notes}
                      placeholder="Ceritakan modul yang dibutuhkan, jumlah plant, target go-live, atau integrasi yang harus disiapkan."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25"
                    />
                  </label>

                  {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white/95 p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    Dengan menekan "Siapkan email", Anda akan diarahkan ke email client untuk meninjau dan mengirim brief ke tim EOS.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(59,130,246,0.3)] transition hover:shadow-[0_24px_60px_rgba(59,130,246,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Menyiapkan..." : "Siapkan email"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) throw new Error("useConsultationModal harus dipakai di dalam ConsultationModalProvider");
  return ctx;
}
