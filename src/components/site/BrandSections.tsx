import { Megaphone, PenTool, FileText, MapPin, Quote, Plus } from "lucide-react";
import { useState } from "react";

const CONTENT_TYPES = [
  { icon: Megaphone, title: "Repost", desc: "Gunakan kembali konten kreator untuk akun brand." },
  { icon: PenTool, title: "Konten Tanpa Produk", desc: "Kreator membuat konten tanpa perlu mengirim produk." },
  { icon: FileText, title: "Review Produk", desc: "Kirim produk kepada kreator untuk di-review." },
  { icon: MapPin, title: "Hadir di Lokasi", desc: "Undang kreator ke acara atau lokasi tertentu." },
];

const BRANDS = ["Wardah", "IndoFood", "ERIGO", "Public Goods", "DANA", "Hari Merdeka"];

const TESTIMONIALS = [
  { quote: "Sebelumnya kami susah menemukan kreator yang sesuai dengan target pasar. Dengan Creelab, prosesnya jauh lebih cepat dan hasil konten yang dihasilkan lebih berkualitas.", name: "Sarah", role: "Founder Glow Beauty" },
  { quote: "Fitur kampanye terbuka memudahkan kami mendapat banyak pilihan kreator dalam waktu singkat. Bisa membandingkan portofolio sebelum memutuskan.", name: "Rizky", role: "Owner Kost Nusantara" },
  { quote: "Mulai dari brief, revisi, hingga laporan performa konten, semuanya tersedia di satu dashboard. Tim kami jadi lebih efisien saat menjalankan kolaborasi dengan kreator.", name: "Noble", role: "Founder Urban Fashion" },
];

const FAQS = [
  { q: "Bagaimana cara kerja Creelab?", a: "Cari kreator yang sesuai, kirim brief atau buat kampanye terbuka, lalu pantau pembuatan konten hingga selesai melalui dashboard." },
  { q: "Bagaimana cara kreator diseleksi sebelum bergabung dengan Creelab?", a: "Setiap kreator melewati proses verifikasi akun sosial media, portofolio, dan kualitas konten sebelum disetujui." },
  { q: "Berapa lama waktu yang dimiliki kreator untuk menerima pesanan saya?", a: "Kreator memiliki waktu 48 jam untuk meninjau permintaan Anda sebelum diteruskan ke kreator lain." },
  { q: "Bagaimana jika kreator menolak pesanan saya?", a: "Dana akan dikembalikan otomatis dan Anda bisa memilih kreator lain." },
  { q: "Apa perbedaan kampanye terbuka, pesanan langsung, dan undangan kolaborasi?", a: "Kampanye terbuka mengundang banyak kreator; pesanan langsung untuk satu kreator; undangan untuk negosiasi privat." },
  { q: "Bagaimana jika kreator tidak menyelesaikan pekerjaan?", a: "Dana Anda dilindungi escrow dan akan dikembalikan otomatis." },
];

export function BrandSections() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-4 text-center">
        <p className="text-xs text-muted-foreground">Dipercaya oleh 500+ brand</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {BRANDS.map((b) => <span key={b} className="font-display text-lg font-bold tracking-tight">{b}</span>)}
        </div>
      </section>

      <section id="cari-kreator" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full gradient-pink px-4 py-1 text-xs font-semibold text-white">Cari Kreator</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Temukan Kreator yang Tepat dalam Hitungan Menit</h2>
            <div className="mt-8 space-y-6">
              {[
                { t: "Kreator Terverifikasi", d: "Cari ribuan kreator Instagram, TikTok, dan YouTube yang telah diverifikasi." },
                { t: "Kolaborasi dengan Aman", d: "Lakukan transaksi dengan aman melalui Creelab. Dana akan ditahan hingga pekerjaan selesai." },
                { t: "Dapatkan Konten Berkualitas", d: "Dapatkan konten berkualitas tinggi dari para kreator langsung melalui platform." },
              ].map((f) => (
                <div key={f.t}>
                  <h3 className="font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-3xl bg-pink-soft" />
            <div className="aspect-[3/4] mt-12 rounded-3xl bg-mint" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Tersedia untuk Semua Tipe Konten</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {CONTENT_TYPES.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition">
              <c.icon className="h-6 w-6 text-pink" />
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-[400px]">
            <div className="absolute left-0 top-0 h-64 w-56 rounded-3xl bg-secondary" />
            <div className="absolute bottom-0 right-12 h-64 w-56 rounded-3xl bg-pink-soft" />
          </div>
          <div>
            <span className="inline-block rounded-full gradient-pink px-4 py-1 text-xs font-semibold text-white">Kampanye</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Pilih Cara Kolaborasi yang Sesuai dengan Kebutuhanmu</h2>
            <div className="mt-8 space-y-6">
              {[
                { t: "Kampanye Terbuka", d: "Buat kampanye dan terima banyak penawaran. Pilih yang paling cocok untuk brand Anda." },
                { t: "Pesanan Langsung", d: "Pesan langsung ke kreator sesuai dengan paket yang ditawarkan." },
                { t: "Undangan Kolaborasi", d: "Undang kreator pilihan Anda dengan penawaran harga dan brief yang sudah disesuaikan." },
              ].map((f) => (
                <div key={f.t}>
                  <h3 className="font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full gradient-pink px-4 py-1 text-xs font-semibold text-white">Analitik</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Pantau Performa Postingan dengan Lebih Mudah</h2>
            <div className="mt-8 space-y-6">
              {[
                { t: "Semua Data dalam 1 Dashboard", d: "Pantau semua kreator Instagram, TikTok, dan YouTube dengan lebih praktis." },
                { t: "Ukur Hasil Kampanye", d: "Lihat tayangan, interaksi, dan performa setiap konten." },
                { t: "Data yang Selalu Terkini", d: "Perbarui data hingga 2 kali per hari untuk melihat hasil kampanye terbaru." },
              ].map((f) => (
                <div key={f.t}>
                  <h3 className="font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-3xl bg-pink-soft" />
            <div className="absolute bottom-0 left-0 h-56 w-56 rounded-3xl bg-mint" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold md:text-3xl">500+ Brand Berkolaborasi dengan Kreator di Creelab</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border p-6">
              <Quote className="h-6 w-6 text-pink" />
              <p className="mt-4 text-sm leading-relaxed text-foreground">{t.quote}</p>
              <div className="mt-6 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cara-kerja" className="mx-auto max-w-3xl px-6 py-20 scroll-mt-20">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Cara Kerja & Pertanyaan Umum</h2>
        <div className="space-y-2">
          {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-14">
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl font-bold md:text-3xl">Tumbuhkan Brand dengan Konten dari Kreator Terpercaya</h2>
            <p className="mt-4 text-sm text-background/70">Cari kreator, buat kampanye, dan pantau analitik untuk membantu brand Anda tumbuh.</p>
            <button className="mt-6 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90 transition">Gabung Gratis</button>
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-1/2 grid-cols-3 gap-2 p-4 opacity-40 md:grid">
            {Array.from({ length: 9 }).map((_, i) => <div key={i} className="rounded-xl bg-background/20" />)}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`rounded-lg ${open ? "bg-secondary/60" : ""} border-b border-border`}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left">
        <span className="text-sm font-medium">{q}</span>
        <Plus className={`h-4 w-4 shrink-0 transition ${open ? "rotate-45" : ""}`} />
      </button>
      {open && <p className="px-4 pb-5 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
