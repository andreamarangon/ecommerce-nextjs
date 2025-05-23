import { ProductCard } from "./product-card";
import { Product } from "@/types";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Cerca prodotto..."
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
