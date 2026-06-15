import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowLeft, Share2, Heart, Instagram, Music2, Youtube, Star, Check, Lock, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/creator/$id")({
  head: () => ({
    meta: [
      { title: "Anya Geraldine — Beauty Influencer | Creelab" },
      { name: "description", content: "Beauty influencer and model from Bandung. Lihat portofolio, paket konten, dan analitik." },
      { property: "og:title", content: "Anya Geraldine — Beauty Influencer" },
      { property: "og:description", content: "Lihat portofolio, paket konten, dan analitik." },
    ],
  }),
  component: CreatorDetail,
});

const PACKAGES = [
  { icon: Instagram, name: "Instagram Reel (60 Detik)", price: "250.000", desc: "Reel berdurasi 60 detik dengan konsep sesuai brief brand." },
  { icon: Instagram, name: "Instagram Feed (Photo)", price: "100.000", desc: "Foto produk berkualitas tinggi untuk feed Instagram." },
  { icon: Music2, name: "TikTok Video (2 Menit)", price: "400.000", desc: "Video TikTok berdurasi 2 menit dengan konsep yang menarik." },
];

const PORTFOLIO = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&q=80",
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80",
];

function CreatorDetail() {
  const [selected, setSelected] = useState<Record<string, boolean>>({ "Instagram Reel (60 Detik)": true, "TikTok Video (2 Menit)": true });
  const total = PACKAGES.filter((p) => selected[p.name]).reduce((s, p) => s + parseInt(p.price.replace(".", "")), 0);

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/explore" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1.5 hover:text-pink"><Share2 className="h-4 w-4" /> Bagikan</button>
            <button className="flex items-center gap-1.5 hover:text-pink"><Heart className="h-4 w-4" /> Simpan</button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Main */}
          <div>
            <div className="relative h-56 overflow-hidden rounded-2xl bg-pink-soft">
              <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80" alt="Cover" className="h-full w-full object-cover opacity-90" />
            </div>

            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">Beauty Influencer and Model</h1>
                <p className="mt-1 text-sm text-muted-foreground">Anya Geraldine | Bandung</p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">5.0</span>
                  <span className="text-muted-foreground">· 18 Ulasan</span>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80" alt="avatar" className="h-16 w-16 rounded-full object-cover ring-4 ring-background" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs"><Instagram className="h-3 w-3" /> 10K Followers</span>
              <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs"><Music2 className="h-3 w-3" /> 700k Followers</span>
              <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs"><Youtube className="h-3 w-3" /> 100k Followers</span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Hi! I am Anya, I live in Indonesia and now I'm a housewife with another profession of beauty influencer and creator. I made an aesthetic video for brands, and also a product launching videography. I hope we can work together.
            </p>

            <div className="my-8 border-t border-border" />

            {/* Packages */}
            <h2 className="text-lg font-bold">Paket Konten</h2>
            <div className="mt-4 flex gap-6 border-b border-border text-sm">
              {["Semua", "Instagram", "TikTok", "YouTube"].map((t, i) => (
                <button key={t} className={`pb-3 ${i === 0 ? "border-b-2 border-foreground font-semibold" : "text-muted-foreground"}`}>{t}</button>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {PACKAGES.map((p) => (
                <label key={p.name} className="flex cursor-pointer items-start gap-4 rounded-xl border border-border p-4 hover:border-pink/50 transition">
                  <p.icon className="mt-0.5 h-5 w-5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold">{p.name}</span>
                      <span className="text-sm font-semibold">Rp{p.price}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={!!selected[p.name]}
                    onChange={(e) => setSelected({ ...selected, [p.name]: e.target.checked })}
                    className="mt-1 h-4 w-4 accent-pink"
                  />
                </label>
              ))}

              <div className="flex items-start gap-3 rounded-xl border border-pink/30 bg-pink-soft/40 p-4">
                <Plus className="mt-0.5 h-5 w-5 text-pink" />
                <div className="flex-1">
                  <div className="font-semibold text-pink">Undang Kolaborasi</div>
                  <p className="mt-1 text-xs text-foreground/80">Sesuaikan kolaborasi dengan kebutuhan Anda. Ajukan brief, harga, atau persyaratan khusus.</p>
                </div>
              </div>
            </div>

            <div className="my-10 border-t border-border" />

            {/* Analytics locked */}
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-bold">Analitik</h2>
              <span className="text-xs text-muted-foreground">Terakhir diperbarui: Hari ini, 08:41</span>
            </div>
            <div className="relative mt-4 rounded-2xl border border-border p-6">
              <div className="grid grid-cols-3 gap-4 blur-sm">
                {["Followers 5.4M", "Engagement Rate 98%", "Likes 75%"].map((s) => (
                  <div key={s} className="rounded-lg bg-secondary p-4 text-center text-sm">{s}</div>
                ))}
              </div>
              <div className="mt-4 h-40 rounded-lg bg-secondary blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-lg">
                  <Lock className="h-4 w-4" /> Buat akun gratis untuk membuka analitik dari 1000+ kreator
                </div>
              </div>
            </div>

            <div className="my-10 border-t border-border" />

            {/* Portfolio */}
            <h2 className="text-lg font-bold">Portofolio Kolaborasi</h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {PORTFOLIO.map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl">
                  <img src={src} alt={`Portfolio ${i}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            <div className="my-10 border-t border-border" />

            {/* Reviews locked */}
            <h2 className="text-lg font-bold">18 Ulasan <span className="text-yellow-400">★ 5.0</span></h2>
            <div className="relative mt-4 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-secondary" />
                    <div className="text-sm">
                      <div className="font-semibold blur-sm">Brand Reviewer</div>
                      <div className="text-xs text-muted-foreground">2 hari yang lalu</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground blur-sm">Konten yang dihasilkan sangat berkualitas dan sesuai dengan brief yang kami berikan.</p>
                </div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center pt-10">
                <div className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-lg">
                  <Lock className="h-4 w-4" /> Buat akun gratis untuk membuka ulasan dari 1000+ kreator
                </div>
              </div>
            </div>
          </div>

          {/* Sticky booking */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="text-2xl font-bold">Rp{total.toLocaleString("id-ID")}</div>
              <div className="mt-4 space-y-2">
                {PACKAGES.filter((p) => selected[p.name]).map((p) => (
                  <div key={p.name} className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2 text-xs">
                    <span className="flex items-center gap-2"><p.icon className="h-3.5 w-3.5" /> {p.name}</span>
                    <Check className="h-4 w-4 text-pink" />
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-lg gradient-pink py-3 text-sm font-semibold text-white hover:opacity-90 transition">
                Kirim Permintaan
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Kreator akan meninjau permintaan Anda sebelum pembayaran dilakukan.
              </p>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Butuh bantuan? <span className="text-pink font-medium">Hubungi kami</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
