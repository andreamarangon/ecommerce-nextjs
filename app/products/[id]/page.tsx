import { getProductById } from "@/lib/api";
import { ProductDetail } from "@/components/product-detail";
import { Product } from "@/types";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product: Product = await getProductById(id);

  //const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={product} />;
}