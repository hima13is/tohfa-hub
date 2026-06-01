type ProductProps = {
  name: string;
  image: string;
  price: number;
};

export default function ProductCard({
  name,
  image,
  price,
}: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <img
        src={image}
        alt={name}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold mb-2">
          {name}
        </h3>

        <p className="text-orange-500 font-bold">
          ₹{price}
        </p>

      </div>

    </div>
  );
}