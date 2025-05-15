import Link from "next/link"

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
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  )
}
