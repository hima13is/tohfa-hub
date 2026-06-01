const categories = [
  {
    name: "Custom Keychains",
    icon: "🔑",
  },
  {
    name: "Custom T-Shirts",
    icon: "👕",
  },
  {
    name: "Wooden Gifts",
    icon: "🪵",
  },
  {
    name: "Corporate Gifts",
    icon: "🎁",
  },
  {
    name: "Print Materials",
    icon: "🖨️",
  },
  {
    name: "Photo Gifts",
    icon: "📸",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-sm border p-6 text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-5xl mb-4">
                {category.icon}
              </div>

              <h3 className="font-semibold">
                {category.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}