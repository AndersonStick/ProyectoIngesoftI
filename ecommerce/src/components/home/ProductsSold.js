import { Link } from "react-router-dom"

  export default function ProductsSold({data}) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Los más vendidos</h2>
            <a href="/" className="hidden text-sm font-semibold text-custom-hover-blue hover:text-custom-blue sm:block">
              Ver todos los favoritos<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
            {data && 
            data !== null &&
            data !== undefined &&
            data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.photo}
                    alt=""
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <h3 className="mt-4 flex justify-between text-gray-500">
                  {/* <Link to={`/product/${product.id}`}> */}
                    <span className="absolute inset-0" />
                    {product.name}
                  {/* </Link> */}
                </h3>
                <p className="mt-1 text-sm text-gray-900">${product.price}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-6 sm:hidden">
            <Link to="#" className="block text-sm font-semibold text-custom-blue hover:text-custom-blue">
              Ver más productos<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  