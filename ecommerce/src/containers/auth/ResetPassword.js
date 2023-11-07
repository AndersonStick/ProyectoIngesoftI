import Layout from '../../hocs/Layout';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { reset_password } from '../../redux/actions/auth';
import { Circles } from  'react-loader-spinner';
import { Navigate } from 'react-router';


const ResetPassword = ({
  reset_password,
  loading
}) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
  })

  const { 
    email,
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    reset_password(email);
    setRequestSent(true)
  }

  if (requestSent && !loading)
        return <Navigate to='/' />;

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/299573120_390962279840498_6685377062908282532_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfMlsfkEnF-am2ad-GZCmcr4zD9KSUWvyvjMP0pJRa_C4oKbpiRxdfRRiLZvQx4uTXiGku0Wh5ZpOX0pLDaLS1&_nc_ohc=ldXy9uhn2HAAX90_Q_T&_nc_ht=scontent.fbog2-5.fna&oh=00_AfCxD5dcyTWhGeXkdtEDSiTbYNZohanlph9k7vQq081Viw&oe=654F46D5"
            alt="Logo Motospit"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Recuperación de contraseña</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ingresa tu correo electrónico registrado para recuperar tu contraseña 
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
                  />
                </div>
              </div>
              <div>
                {loading ? 
                <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-blue hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-blue hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
                >
                Enviar
                </button>
                }
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
  reset_password
}) (ResetPassword)