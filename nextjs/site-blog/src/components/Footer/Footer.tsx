import Link from "next/link";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="flex md:flex-row justify-between gap-8 py-8 ">
          <Logo />
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="/termos-de-uso" className="hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-primary">
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
