import { Link } from "react-router-dom";

export default function ProductsArrival({
      data
  }) {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Los más recientes</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            { data &&
            data !== null &&
            data !== undefined &&
            data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.photo}
                    alt="Foto del producto"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <h3 className="mt-4 flex justify-between text-gray-500">
                  <Link to={`/product/${product.id}`}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-900">
                {product.price.toLocaleString('es-CO', {
                  style: 'currency',
                  currency: 'COP',
                  minimumFractionDigits: 0, // Muestra solo el número entero
                  maximumFractionDigits: 0 // Muestra solo el número entero
                })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }