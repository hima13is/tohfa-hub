import { connectDB } from "@/lib/mongodb";
import Product from "@/lib/models/Product";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  await connectDB();

  const product = await Product.findOne({
    slug,
  }).lean();

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full"
        />

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-orange-500 mb-6">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-8">
            {product.description}
          </p>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
}