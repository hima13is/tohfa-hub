import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-orange-500 cursor-pointer">
              Tohfa Hub
            </h1>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link
              href="/"
              className="hover:text-orange-500 transition"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="hover:text-orange-500 transition"
            >
              Shop
            </Link>

            <Link
              href="/corporate"
              className="hover:text-orange-500 transition"
            >
              Corporate
            </Link>

            <Link
              href="/about"
              className="hover:text-orange-500 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">

            <Link
              href="/wishlist"
              className="hover:text-orange-500 transition"
            >
              Wishlist
            </Link>

            <Link
              href="/cart"
              className="hover:text-orange-500 transition"
            >
              Cart
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}