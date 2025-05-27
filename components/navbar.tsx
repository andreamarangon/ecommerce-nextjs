import Link from "next/link"
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="hover:text-blue-600">
          My Ecommerce
        </Link >
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">Home</Link >
          </li>
          <li className="hover:text-blue-600">
            <Link href="/products">Products</Link >
          </li>
          <li className="hover:text-blue-600">
            <Link href="/checkout">Checkout</Link >
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <Link href="/checkout">
            <ShoppingCartIcon className="h-6 w-6 hover:text-blue-600" />
          </Link >

        </div>
      </div>
    </nav>
  )
}
