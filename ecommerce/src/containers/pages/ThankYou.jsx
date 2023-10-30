import Layout from '../../hocs/Layout';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import { reset } from '../../redux/actions/payment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ThankYou = ({
    isAuthenticated,
    reset
}) => {

    useEffect(() => {
        reset()
    }, [])

    // Solo puede acceder a esta ruta si esta autenticado 
    if(!isAuthenticated)
        return <Navigate to='/' />;

    return(
        <Layout>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Gracias
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Esperamos que te hayas divertido comprando en Motospit Ecommerce
                    </p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to='/'>
                            <button
                            className="w-48 bg-custom-blue border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custom-blue mb-5">
                            Volver a la tienda
                            </button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
const mapStateToProps =state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps,{
    reset
}) (ThankYou)