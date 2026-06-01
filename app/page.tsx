import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import TrustedBrands from "@/components/common/TrustedBrands";
import WhyUs from "@/components/whyus/WhyUs";
import FeaturedProducts from "@/components/featured/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
    </>
  );
}