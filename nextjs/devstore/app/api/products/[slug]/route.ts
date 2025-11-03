import data from "../data.json";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const featuredProducts = data.products.filter((product) => product.featured);
  return Response.json(featuredProducts);
}
