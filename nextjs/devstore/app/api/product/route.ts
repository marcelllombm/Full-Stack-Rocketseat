import data from "@/app/api/products/data.json";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 400 });
  }

  return Response.json(product);
}
