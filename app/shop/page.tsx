"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Shop
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product: any) => (
          <Link
            key={product._id}
            href={`/products/${product.slug}`}
          >
            <div className="bg-white rounded-xl shadow overflow-hidden cursor-pointer">

              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-4">

                <h3 className="font-semibold">
                  {product.name}
                </h3>

                <p className="text-orange-500 font-bold">
                  ₹{product.price}
                </p>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}