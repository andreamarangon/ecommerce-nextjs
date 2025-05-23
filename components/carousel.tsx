"use client"
import { Card, CardContent, CardTitle } from "./ui/card"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types";

interface Props {
  products: Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.title}
            fill
            className="transition-opacity duration-500 ease-in-out object-cover"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.title}
        </CardTitle>
        <p className="text-xl text-white">
          €{currentProduct.price}
        </p>

      </CardContent>
    </Card>
  )
}
