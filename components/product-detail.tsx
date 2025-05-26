import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";

export const ProductDetail = ({ product }: { product: Product }) => {

  /*   const { items, addItem, removeItem } = useCartStore();
    const cartItem = items.find((item) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
  
    const onAddItem = () => {
      addItem({
        id: product.id,
        name: product.title,
        price: product.price as number,
        imageUrl: product.images ? product.images[0] : null,
        quantity: 1,
      });
    };
   */

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.thumbnail && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            src={product.images[0] || product.thumbnail}
            alt={product.title}
            fill
            sizes="auto"
            className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg object-cover"
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        {product.description && (
          <p className="text-gray-700 mb-4">{product.description}</p>
        )}
        {product.price && (
          <p className="text-lg font-semibold text-gray-900">
            €{product.price}
          </p>
        )}
        <div className="flex items-center space-x-4">
          <Button variant="outline" /* onClick={() => removeItem(product.id)} */>
            –
          </Button>
          <span className="text-lg font-semibold">{ }</span>
          <Button /* onClick={onAddItem} */>+</Button>
        </div>
      </div>
    </div>
  )
}
