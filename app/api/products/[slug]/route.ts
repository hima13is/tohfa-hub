import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/lib/models/Product";

 export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;{
  try {
    await connectDB();

    const product = await Product.findOne({
      slug: clsslug,
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product not found",
      },
      {
        status: 404,
      }
    );
  }
}