export default function TrustedBrands() {
  const brands = [
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Tech Mahindra",
  ];

  return (
    <section className="py-10 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-500 mb-8">
          Trusted by Businesses Across India
        </p>

        <div className="flex flex-wrap justify-center gap-10 text-xl font-semibold text-gray-600">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>

      </div>
    </section>
  );
}