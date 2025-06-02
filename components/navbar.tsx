"use client";
import Link from "next/link"
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from 'next/navigation';


export const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [shadow, setShadow] = useState<boolean>(false)
  const { items } = useCartStore()

  // Calcola il numero totale di articoli nel carrello
  // Utilizza reduce per sommare le quantità degli articoli
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  // Gestione dell'apertura/chiusura del menu mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Aggiungi l'evento di scroll per gestire l'ombra della navbar
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <nav className={
      shadow
        ? "sticky top-0 z-50 bg-neutral-100 shadow"
        : "sticky top-0 z-50 bg-neutral-100"
    }>
      <div className="container mx-auto flex items-center justify-between p-6">
        <Link href="/" className="hover:text-blue-600">
          My Ecommerce
        </Link >
        <ul className="hidden md:flex space-x-6 ">
          <li className={pathname === '/' ? 'text-[#ff5151]' : ''}>
            <Link className="uppercase text-sm hover:border-b" href="/">Home</Link >
          </li>
          <li className={pathname === '/products' ? 'text-[#ff5151]' : ''}>
            <Link className="uppercase text-sm hover:border-b" href="/products">Prodotti</Link >
          </li>
          <li className={pathname === '/checkout' ? 'text-[#ff5151]' : ''}>
            <Link className="uppercase text-sm hover:border-b" href="/checkout">Checkout</Link >
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-[#ff5151]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5151] text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li className={pathname === '/' ? 'text-[#ff5151]' : ''}>
              <Link href="/" className="block">
                Home
              </Link>
            </li>
            <li className={pathname === '/products' ? 'text-[#ff5151]' : ''}>
              <Link href="/products" className="block">
                Prodotti
              </Link>
            </li>
            <li className={pathname === '/checkout' ? 'text-[#ff5151]' : ''}>
              <Link href="/checkout" className="block">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  )
}
