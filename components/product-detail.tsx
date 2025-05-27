"use client";
// This component displays the details of a product, including its image, title, description, and price.
import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

export const ProductDetail = ({ product }: { product: Product }) => {
  // Use the cart store to access cart items and methods for adding/removing items.
  const { items, addItem, removeItem } = useCartStore();

  // Find the cart item that matches the product ID
  // If the item exists, get its quantity; otherwise, set it to 0.
  const cartItem = items.find((item) => item.id === product.id);

  // Get the quantity of the cart item, defaulting to 0 if it doesn't exist.
  const quantity = cartItem ? cartItem.quantity : 0;

  // Function to handle adding an item to the cart.
  // It creates a new cart item with the product details and adds it to the cart.
  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.thumbnail && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            src={product.images[0] || product.thumbnail}
            alt={product.title}
            fill
            sizes="auto"
            priority
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
          <Button variant="outline" onClick={() => removeItem(product.id)} >
            –
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={onAddItem}>+</Button>
        </div>
      </div >
    </div >
  )
}
