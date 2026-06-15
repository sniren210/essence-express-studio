import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Search, MapPin, Instagram, Music2, Youtube, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Eksplor Kreator — Creelab" },
      { name: "description", content: "Tempat Brand & Kreator Bertemu. Kolaborasi dengan kreator Instagram, TikTok, dan YouTube." },
      { property: "og:title", content: "Eksplor Kreator — Creelab" },
      { property: "og:description", content: "Tempat Brand & Kreator Bertemu." },
    ],
  }),
  component: ExplorePage,
});

const IMGS = [
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=500&q=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
];

const CATEGORIES = [
  { name: "Kecantikan", img: "https://images.unsplash.com/photo-1522335789203-aaa2f3c2c0f3?w=600&q=80" },
  { name: "Fashion", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" },
  { name: "Gaming", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80" },
  { name: "Makanan & Minuman", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
];

function CreatorCard({ i, label }: { i: number; label: string }) {
  return (
    <Link to="/creator/$id" params={{ id: String(i + 1) }} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <img src={IMGS[i % IMGS.length]} alt={label} className="h-full w-full object-cover transition group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3 text-white text-xs">
          <div className="flex items-center gap-1 text-[10px] opacity-80"><MapPin className="h-3 w-3" /> Jakarta</div>
          <div className="mt-1 font-semibold">{label} <span className="text-yellow-400">★ 5.0</span></div>
          <div className="mt-1 flex items-center gap-2 text-[10px]">
            <span className="flex items-center gap-0.5"><Instagram className="h-3 w-3" /> 200k</span>
            <span className="flex items-center gap-0.5"><Music2 className="h-3 w-3" /> 408k</span>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm font-medium">{label}</div>
      <div className="text-xs text-muted-foreground">Mulai dari Rp650.000</div>
    </Link>
  );
}

function Section({ title, icon, names }: { title: string; icon: React.ReactNode; names: string[] }) {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold">{icon} {title}</h2>
          <p className="text-xs text-muted-foreground">Kreator populer di {title}</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-pink">Lihat Semua <ChevronRight className="h-4 w-4" /></button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-4">
        {names.map((n, i) => <CreatorCard key={n} i={i} label={n} />)}
      </div>
    </div>
  );
}

function ExplorePage() {
  return (
    <Layout>
      <section className="px-6 pt-14 pb-10 text-center">
        <h1 className="text-3xl font-bold text-pink md:text-5xl">Tempat Brand & Kreator Bertemu</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">Kolaborasi dengan kreator Instagram, TikTok, dan YouTube dalam satu platform.</p>

        <div className="mx-auto mt-8 flex max-w-3xl items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm">
          <div className="flex-1 px-4 py-2 text-left">
            <div className="text-[10px] font-semibold text-muted-foreground">Platform</div>
            <div className="text-sm">Instagram</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex-1 px-4 py-2 text-left">
            <div className="text-[10px] font-semibold text-muted-foreground">Lokasi</div>
            <div className="text-sm">Jakarta</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex-1 px-4 py-2 text-left">
            <div className="text-[10px] font-semibold text-muted-foreground">Kategori</div>
            <div className="text-sm text-muted-foreground">Pilih kategori</div>
          </div>
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-mint">
            <Search className="h-4 w-4" />
          </button>
        </div>

        <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
          {["Produk", "Acara", "Last Minute", "Harga", "Followers"].map((f) => (
            <span key={f} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs">{f}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <Section title="Instagram" icon={<Instagram className="h-5 w-5 text-pink" />} names={["Renata Moelok", "Dr. Tirta", "Awkarin", "Ferry Irwandi"]} />
        <Section title="TikTok" icon={<Music2 className="h-5 w-5 text-pink" />} names={["Tara Arts", "Jenny Kim", "Indah Nada", "Jerome S."]} />
        <Section title="YouTube" icon={<Youtube className="h-5 w-5 text-pink" />} names={["Gerry Girianza", "Jovi Adhiguna", "Kimi Hime", "Ria Sukma"]} />

        <div className="mt-12">
          <h2 className="text-lg font-bold">Kategori Populer</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full gradient-pink px-4 py-1 text-xs font-semibold text-white">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
