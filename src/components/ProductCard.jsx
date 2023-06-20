import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-slate-900 rounded-lg shadow-md p-4  w-1/2">
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex items-center mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          {product.discount && (
            <span className="text-red-500 ml-2">
              {product.discount}% off
            </span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-500">Sold by: {product.seller}</span>
          <span className="text-gray-500 mx-2">|</span>
          <span className="text-gray-500">
            Ratings: {product.rating}/5
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
          {product.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}
