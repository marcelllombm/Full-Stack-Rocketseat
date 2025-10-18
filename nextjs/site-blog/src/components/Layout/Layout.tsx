import Head from "next/head";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.variable} relative flex 
    min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Head>
        <title>Meu Site Incrível - Página Inicial</title>
        <meta name="description" content="Bem-vindo ao meu site incrível. Confira nossos conteúdos e blog." />
      </Head>
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>
      <Footer />
    </div>
  );
};
