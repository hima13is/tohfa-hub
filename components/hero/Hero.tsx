import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
              Personalized Gifts & Corporate Gifting
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Make Every Gift
              <span className="text-orange-500"> Memorable</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Discover custom keychains, personalized t-shirts,
              wooden gifts, print materials and premium corporate gifting
              solutions for every occasion.
            </p>

            <div className="flex gap-4">

              <button className="bg-orange-500 px-8 py-4 rounded-lg font-semibold">
                Shop Now
              </button>

              <button className="border border-gray-500 px-8 py-4 rounded-lg font-semibold">
                Bulk Orders
              </button>

            </div>

          </div>

          <div className="relative">

            <Image
              src="/images/gift-hero.jpg"
              alt="Tohfa Hub Gifts"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}