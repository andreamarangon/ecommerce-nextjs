
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.thumbnail && (
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0] || product.thumbnail}
              alt={product.title}
              fill
              priority
              sizes="auto"
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg object-contain"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="text-lg font-semibold text-gray-900">€{product.price}</p>
          <Button className="mt-4 bg-[#ff5151] hover:bg-[#ff3f26] text-white">Vedi Dettagli</Button>
        </CardContent>
      </Card>
    </Link>
  );
};
