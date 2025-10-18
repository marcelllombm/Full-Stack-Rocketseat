import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial" className="relative block w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14">
      <Image
        className="h-8 w-28"
        src="/LogoSite.svg"
        alt="Logo 
      site"
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
      />
    </Link>
  );
};
