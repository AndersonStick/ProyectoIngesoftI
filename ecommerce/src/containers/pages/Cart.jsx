import Layout from "../../hocs/Layout"
import { connect } from "react-redux"
import {
    remove_item,
    update_item,
    get_items,
    get_total,
    get_item_total
} from "../../redux/actions/cart";
import { useEffect, useState } from "react";
import CartItem from "../../components/cart/CartItem";
import { Link } from "react-router-dom";
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { setAlert } from "../../redux/actions/alert";

const Cart = ({
    get_items,
    get_total,
    get_item_total,
    isAuthenticated,
    items,
    amount,
    compare_amount,
    total_items,
    remove_item,
    update_item,
    setAlert
}) => {

    const [render, setRender] = useState(false);    // Puedo mostrar o no información

    useEffect(() => {
        window.scrollTo(0, 0);
        get_items()
        get_total()
        get_item_total()
    }, [render])

    const showItems = () => {
        return(
            <div>
                {//Mapear los datos
                    items && 
                    items !== null && 
                    items !== undefined && 
                    items.length !== 0 && 
                    items.map((item, index)=>{
                        let count = item.count;
                        return (
                            <div key={index}>
                                <CartItem 
                                    item={item}
                                    count={count}
                                    update_item={update_item}
                                    remove_item={remove_item}
                                    render={render}
                                    setRender={setRender}
                                    setAlert={setAlert}
                                />
                            </div>
                        );
                    })
                }
            </div>
        )
    }

//     const showWishlistItems = () => {
//       return(
//           <div>
//               {
//                   wishlist_items && 
//                   wishlist_items !== null && 
//                   wishlist_items !== undefined && 
//                   wishlist_items.length !== 0 && 
//                   wishlist_items.map((item, index)=>{
//                       let count = item.count;
//                       return (
//                           <div key={index}>
//                               <WishlistItem 
//                                   item={item}
//                                   count={count}
//                                   update_item={update_item}
//                                   remove_wishlist_item={remove_wishlist_item}
//                                   render={render}
//                                   setRender={setRender}
//                                   setAlert={setAlert}
//                               />
//                           </div>
//                       );
//                   })
//               }
//           </div>
//       )
//   }

    const checkoutButton = () => {
        if (total_items < 1) {
            return(
                <>
                <Link to='/shop'>
                    <button
                    className="w-full bg-custom-blue border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custom-blue">
                    Buscar repuestos
                    </button>
                </Link>
                </>
            )
        } else if (!isAuthenticated) {
            return(<>
            <Link to='/login'>
                <button
                className="w-full bg-custom-blue border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custom-blue">
                Iniciar Sesión
                </button>
            </Link>
            </>
            )
        } else {
            return(
                <>
                <Link to='/checkout'>
                    <button
                    className="w-full bg-custom-blue border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custom-blue">
                    Proceder con el pago
                    </button>
                </Link>
                </>
            )
           
        }
    }

    return (
        <Layout>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Carrito con ({total_items}) elementos</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                        Elementos en tu carrito
                        </h2>

                        <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                        {showItems()}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                        Resumen de orden
                        </h2>

                        <dl className="mt-6 space-y-4">

                        <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">${compare_amount}</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex items-center text-sm text-gray-600">
                            <span>Envío estimado</span>
                            <a href="/" className="m|l-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Más información de como se calcula el total|</span>
                                <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex text-sm text-gray-600">
                            <span>Impuestos estimados</span>
                            <a href="/" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Learn more about how tax is calculated</span>
                                <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900">Total</dt>
                            <dd className="text-base font-medium text-gray-900">${amount}</dd>
                        </div>
                        </dl>

                        <div className="mt-6">
                        {checkoutButton()}
                        </div>
                    </section>
                    </div>
                    
                    {/* {showWishlistItems()} */}

                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    items: state.Cart.items,
    amount: state.Cart.amount,
    compare_amount: state.Cart.compare_amount,
    total_items: state.Cart.total_items
})

export default connect(mapStateToProps,{
    get_items,
    get_total,
    get_item_total,
    remove_item,
    update_item,
    setAlert
}) (Cart)