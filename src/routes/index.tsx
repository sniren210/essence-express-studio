import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TypingText } from "@/components/site/TypingText";
import { BrandSections } from "@/components/site/BrandSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creelab — Cara Mudah Mendapatkan Konten Berkualitas dari Kreator" },
      { name: "description", content: "Cari kreator, buat kampanye, dan pantau analitik untuk membantu brand Anda tumbuh." },
      { property: "og:title", content: "Creelab — Untuk Brand" },
      { property: "og:description", content: "Cari kreator, buat kampanye, dan pantau analitik untuk membantu brand Anda tumbuh." },
    ],
  }),
  component: BrandPage,
});

const TYPING_WORDS = [
  "Konten Review Produk",
  "Video Promosi",
  "Testimoni Pelanggan",
  "Foto Produk",
  "Video TikTok",
  "Konten Instagram",
  "Video YouTube",
];

function BrandPage() {
  return (
    <Layout>
      <section className="relative px-6 pt-20 pb-10 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Cara Mudah untuk Mendapatkan<br />
          <TypingText words={TYPING_WORDS} className="mt-3 inline-block" />
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Cari kreator, buat kampanye, dan pantau analitik untuk membantu brand Anda tumbuh.
        </p>
        <button className="mt-8 rounded-lg bg-foreground px-7 py-3 text-sm font-semibold text-background hover:opacity-90 transition">
          Gabung Gratis
        </button>
      </section>
      <BrandSections />
    </Layout>
  );
}
