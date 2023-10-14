import { connect } from "react-redux";
import Layout from "../../hocs/Layout"
import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
import { 
    get_product,
    get_related_products
} from "../../redux/actions/products";

import { 
    get_items,
    add_item,
    get_total,
    get_item_total
} from "../../redux/actions/cart";

import { useEffect, useState } from "react";
import { HeartIcon } from '@heroicons/react/outline'
import ImageGallery from "../../components/product/ImageGallery";
import { Circles } from  'react-loader-spinner'


const ProductDetail =({
    get_product,
    get_related_products,
    product, 
    get_items,
    add_item,
    get_total,
    get_item_total
})=>{

  const [loading, setLoading] =useState(false);

  // const navigate = useNavigate();

  // const addToCart = async () => {
  //   if (product && product !== null && product !== undefined && product.quantity > 0) { 
  //       setLoading(true)
  //       await add_item(product);
  //       await get_items();
  //       await get_total();
  //       await get_item_total();
  //       setLoading(false)
  //       navigate('/cart')
  //   }
  // }
  
    const params = useParams()
    const productId = params.productId

    useEffect(() => {
        window.scrollTo(0,0)
        get_product(productId)
        get_related_products(productId)
    }, [])
    

    return(
        <Layout>
            <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ImageGallery photo={product && product.photo}/>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product && product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Información del producto</h2>
              <p className="text-3xl text-gray-900">${product && product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Descripción</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product && product.description }}
              />
            </div>

            
            <div className="mt-6">
            <p className="mt-4">
                  {
                      product && 
                      product !== null &&
                      product !== undefined && 
                      product.quantity > 0 ? (
                          <span className='text-green-500'>
                              In Stock
                          </span>
                      ) : (
                          <span className='text-red-500'>
                              Out of Stock
                          </span>
                      )
                  }
              </p>
              
              <div className="mt-4 flex sm:flex-col1">
              
              {loading ? 
              <button
                className="max-w-xs flex-1 bg-custom-blue border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custom-blue sm:w-full">
                  <Circles
                    height="15"
                    width="15"
                    color="#ffffff"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </button>:
                <button
                // onClick={addToCart}
                className="max-w-xs flex-1 bg-custom-blue border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custom-blue sm:w-full">
                  Añadir al carrito
                </button>
                }

                <button
                  type="button"
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Añadir a favoritos</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    product: state.Products.product
})

export default connect(mapStateToProps,{
    get_product,
    get_related_products,
    get_items,
    add_item,
    get_total,
    get_item_total
}) (ProductDetail)