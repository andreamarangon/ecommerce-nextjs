import { ProductList } from "@/components/product-list";
import { getAllProducts } from "@/lib/api";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-center mb-8">
        Tutti gli Articoli
      </h1>
      <ProductList products={products} />
    </div>
  )
}
