import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md gradient-pink text-white font-bold text-sm">D</div>
          <span className="font-display text-lg font-bold tracking-tight">CREELAB</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/explore" className="text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Eksplor</Link>
          <Link to="/" hash="cara-kerja" className="text-muted-foreground hover:text-foreground transition">Cara Kerja</Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground border-b-2 border-foreground pb-1" }}>Untuk Brand</Link>
          <Link to="/for-creator" className="text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground border-b-2 border-foreground pb-1" }}>Untuk Kreator</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-pink hover:opacity-80">Masuk</button>
        </div>
      </div>
    </header>
  );
}
