import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Megaphone, DollarSign, Shield, Calendar, Plus, MapPin, Instagram, Music2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/for-creator")({
  head: () => ({
    meta: [
      { title: "Creelab — Untuk Kreator" },
      { name: "description", content: "Temukan peluang kolaborasi dan hasilkan pendapatan dari Instagram, TikTok, dan YouTube." },
      { property: "og:title", content: "Creelab — Untuk Kreator" },
      { property: "og:description", content: "Temukan peluang kolaborasi dan hasilkan pendapatan dari Instagram, TikTok, dan YouTube." },
    ],
  }),
  component: CreatorPage,
});

const STEPS = [
  { n: "1", t: "Buat Profil Kreator", d: "Hubungkan akun Instagram, TikTok, atau YouTube dan tampilkan informasi tentang dirimu.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { n: "2", t: "Tawarkan Layanan", d: "Atur layanan, harga, dan jenis konten agar brand dapat mengajukan kerja sama denganmu.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
  { n: "3", t: "Mulai Hasilkan Uang", d: "Terima proyek dari brand, selesaikan kolaborasi, dan dapatkan pembayaran dengan aman.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80" },
];

const CATEGORIES = ["Kecantikan", "Fashion", "Makanan & Minuman", "Model", "Gaya Hidup", "Kesehatan & Kebugaran", "Edukasi", "Gaming", "Travel"];

const FEATURES = [
  { icon: Megaphone, t: "Dapatkan Proyek dari Brand", d: "Temukan kampanye dan peluang kolaborasi yang sesuai dengan niche kamu." },
  { icon: DollarSign, t: "Atur Harga Kamu Sendiri", d: "Atur layanan dan harga kolaborasi sesuai nilai yang kamu tawarkan." },
  { icon: Shield, t: "Kelola Kolaborasi Lebih Mudah", d: "Kelola brief, revisi, dan komunikasi dalam satu dashboard." },
  { icon: Calendar, t: "Pantau Penghasilan Kamu", d: "Lihat penghasilan dan riwayat pencairan dana secara transparan." },
];

const CREATORS = [
  { name: "Renata Moelok", loc: "Jakarta", rating: "5.0", followers: "200k", price: "1.850.000", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" },
  { name: "Dr. Tirta", loc: "Surabaya", rating: "5.0", followers: "498k", tiktok: "708k", price: "4.000.000", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Awkarin", loc: "Jakarta", rating: "5.0", followers: "110k", price: "800.000", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80" },
  { name: "Ferry Irwandi", loc: "Jakarta", rating: "5.0", followers: "327.3k", price: "150.000", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

const FAQS = [
  { q: "Bagaimana cara mendapatkan proyek dari brand?" , a: "Lengkapi profil kreator Anda dan brand akan menemukan Anda berdasarkan niche dan portofolio." },
  { q: "Apakah saya bisa menentukan harga sendiri?", a: "Ya, Anda bebas mengatur harga setiap layanan." },
  { q: "Bagaimana cara menerima pembayaran?", a: "Pembayaran dicairkan ke rekening Anda setelah proyek selesai." },
  { q: "Apakah ada biaya untuk bergabung dengan Creelab?", a: "Tidak! Bergabung dengan Creelab sebagai konten kreator sepenuhnya gratis. Kami hanya mengambil biaya Platform Fee (10%) dan PPh (2.5%) saat Anda menyelesaikan kolaborasi proyek." },
  { q: "Apa saja jenis kolaborasi yang tersedia?", a: "Kampanye terbuka, pesanan langsung, dan undangan kolaborasi." },
  { q: "Apakah saya bisa menolak tawaran dari brand?", a: "Tentu, Anda berhak menerima atau menolak tawaran apapun." },
  { q: "Bagaimana jika saya perlu revisi konten?", a: "Setiap paket memiliki ketentuan revisi yang dapat Anda tetapkan." },
  { q: "Platform apa saja yang didukung oleh Creelab?", a: "Instagram, TikTok, dan YouTube." },
  { q: "Apakah ada kontrak yang mengikat?", a: "Tidak ada kontrak jangka panjang. Setiap proyek berdiri sendiri." },
];

function CreatorPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Brand Mencari Kreator Seperti Kamu</h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">Temukan peluang kolaborasi dan hasilkan pendapatan dari Instagram, TikTok, dan YouTube.</p>
        <button className="mt-8 rounded-lg bg-foreground px-7 py-3 text-sm font-semibold text-background hover:opacity-90 transition">Gabung Gratis</button>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-bold md:text-3xl">Dapatkan Proyek dalam 3 Langkah</h2>
        <p className="mt-2 text-sm text-muted-foreground">Buat profil, tawarkan layanan, dan mulai berkolaborasi dengan brand pilihanmu.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={s.img} alt={s.t} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-pink/40" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold">{s.n}. {s.t}</h3>
                <p className="mt-2 text-xs text-white/85">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-pink md:text-3xl">Disukai oleh 1000+ Kreator</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => <span key={c} className="rounded-full bg-mint px-5 py-2 text-sm font-medium">{c}</span>)}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition">
              <f.icon className="h-6 w-6 text-pink" />
              <h3 className="mt-4 font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creators */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {CREATORS.map((c, i) => (
            <a href={`/creator/${i + 1}`} key={c.name} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white text-xs">
                  <div className="flex items-center gap-1 text-[10px] opacity-80"><MapPin className="h-3 w-3" /> {c.loc}</div>
                  <div className="mt-1 font-semibold">{c.name} <span className="text-yellow-400">★ {c.rating}</span></div>
                  <div className="mt-1 flex items-center gap-2 text-[10px]">
                    <span className="flex items-center gap-0.5"><Instagram className="h-3 w-3" /> {c.followers}</span>
                    {c.tiktok && <span className="flex items-center gap-0.5"><Music2 className="h-3 w-3" /> {c.tiktok}</span>}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm font-medium">{c.name}</div>
              <div className="text-xs text-muted-foreground">Mulai dari Rp{c.price}</div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-2">
          {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 3} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-14">
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl font-bold md:text-3xl">Dapatkan Penghasilan Proyek dari Brand Favoritmu</h2>
            <p className="mt-4 text-sm text-background/70">Bergabunglah dengan 1000+ kreator yang menggunakan Creelab untuk mendapatkan proyek.</p>
            <button className="mt-6 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90 transition">Gabung Gratis</button>
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-1/2 grid-cols-3 gap-2 p-4 opacity-40 md:grid">
            {Array.from({ length: 9 }).map((_, i) => <div key={i} className="rounded-xl bg-background/20" />)}
          </div>
        </div>
      </section>
    </Layout>
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
