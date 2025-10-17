import { Header } from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
    </div>
  );
}
