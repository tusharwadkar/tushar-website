'use client'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12 px-4 sm:px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-black tracking-tighter uppercase grayscale opacity-50">Tushar Wadkar.</span>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              © {currentYear} All Rights Reserved.
            </p>
          </div>

          {/* Socials / Links (Minimalist) */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>

          {/* Tagline */}
          <div className="hidden md:block">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/30">
                Design • Develop • Deliver
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
