import Image from "next/image";
import Link from "next/link";

type productsProps = {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });
  const products = await res.json();
  const [firstProduct, ...otherProducts] = products;

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`http://localhost:3000/product/${firstProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 
      overflow-hidden flex justify-center items-end"
      >
        <Image
          src={firstProduct.image}
          alt="moletom branco"
          width={920}
          height={920}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] 
        rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 "
        >
          <span className="text-sm truncate">{firstProduct.title}</span>
          <span
            className="flex h-full items-center justify-center rounded-full bg-violet-500
          px-4 font-semibold"
          >
            {firstProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractiongits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product: productsProps) => {
        return (
          <Link
            key={product.id}
            href={`http://localhost:3000/product/${firstProduct.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 
      overflow-hidden flex justify-center items-end-safe"
          >
            <Image
              src={product.image}
              alt="moletom branco"
              width={920}
              height={920}
              quality={100}
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] 
        rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 "
            >
              <span className="text-sm truncate">{product.title}</span>
              <span
                className="flex h-full items-center justify-center rounded-full bg-violet-500
          px-4 font-semibold"
              >
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
