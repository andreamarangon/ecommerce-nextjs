import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/lib/api";
import { ChevronRightIcon } from "@heroicons/react/24/outline"


export default async function Home() {
  const products = await getAllProducts(3);

  return (
    <div>
      <section className="py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold md:text-6xl leading-20">
              Benvenuto sul mio Ecommerce
            </h2>
            <p className="text-neutral-600">
              Scopri gli ultimi prodotti ai migliori prezzi.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5151] hover:bg-[#ff3f26] text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Vedi tutti i prodotti <ChevronRightIcon />
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={products[0].images[0]}
            className="rounded"
            width={450}
            height={450}
            priority
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products} />
      </section>
    </div>
  );
}
