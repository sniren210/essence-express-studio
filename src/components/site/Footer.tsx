import { Instagram, Music2, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4">
        {[
          { title: "Bantuan", items: ["Hubungi Kami", "Cara Kerja", "Pertanyaan yang Sering Diajukan"] },
          { title: "Untuk Brand", items: ["Temukan Kreator", "Luncurkan Kampanye", "Kreator Teratas"] },
          { title: "Untuk Kreator", items: ["Jelajahi Proyek", "Temukan Brand"] },
          { title: "Creelab", items: ["Blog", "Tentang Kami", "Kebijakan Privasi", "Ketentuan Layanan"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-semibold">{col.title}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {col.items.map((i) => <li key={i} className="hover:text-foreground cursor-pointer transition">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© 2026 Creelab. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <MessageCircle className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Music2 className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
