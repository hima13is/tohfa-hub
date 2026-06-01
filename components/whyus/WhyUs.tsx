export default function WhyUs() {
  const features = [
    {
      title: "Premium Quality",
      description: "High-quality products with professional finishing.",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround and nationwide delivery.",
    },
    {
      title: "Bulk Orders",
      description: "Corporate and event gifting solutions.",
    },
    {
      title: "Custom Designs",
      description: "Personalized products designed your way.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Tohfa Hub
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}