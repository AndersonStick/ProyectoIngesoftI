// import { Link } from "react-router-dom"
const ProductCard =({product})=>{
    return(
        
            <div key={product.id} className="group relative mx-2 mb-7">
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
            </div>
    )
}

export default ProductCard