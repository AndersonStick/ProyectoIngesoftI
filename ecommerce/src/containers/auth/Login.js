import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../../redux/actions/auth'
import { Circles } from  'react-loader-spinner'
import { Navigate } from 'react-router'
const Login = ({
  login,
  loading
}) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { 
    email,
    password,
  } = formData;

  const [activated, setActivated] = useState(false);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    login(email, password);
    setActivated(true);
  }

  if (activated)
    return <Navigate to='/' />;

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/299573120_390962279840498_6685377062908282532_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEfMlsfkEnF-am2ad-GZCmcr4zD9KSUWvyvjMP0pJRa_C4oKbpiRxdfRRiLZvQx4uTXiGku0Wh5ZpOX0pLDaLS1&_nc_ohc=m0Z8fg5xH04AX8-LApv&_nc_ht=scontent.fbog2-5.fna&oh=00_AfCvZqkqxeSOzq6z238vq3EiRurikdFgjacgD3ksIDNnDA&oe=651FD0D5"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingresa a tu cuenta</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ingresa tus datos o  {' '}
            <Link to="/signup" className="font-medium text-custom-hover-blue hover:text-custom-blue">
              Crea tu cuenta en nuestro ecommerce
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    type="email"
                    placeholder="example@mail.com"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    placeholder="Contraseña"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Recuérdame
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/reset_password" className="font-medium text-custom-hover-blue hover:text-custom-blue">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <div>
                {loading ? 
                <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-blue hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
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
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-blue hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ingresar
            </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
const mapStateToProps = state => ({
  loading: state.Auth.loading
})

export default connect(mapStateToProps, {
  login
}) (Login)