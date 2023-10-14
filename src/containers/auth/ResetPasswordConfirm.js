import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { reset_password_confirm } from '../../redux/actions/auth'
import { Circles } from  'react-loader-spinner'
import { Navigate, useParams } from 'react-router'
const ResetPasswordConfirm = ({
  reset_password_confirm,
  loading
}) => {
  const params = useParams()

  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  })

  const { 
    new_password,
    re_new_password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    const uid = params.uid
    const token = params.token

    reset_password_confirm(uid, token, new_password, re_new_password)
    if (new_password === re_new_password)
      setRequestSent(true);
  }

  if (requestSent && !loading)
        return <Navigate to='/' />;

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/308859207_159655673376414_7733759750617869538_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeErc5dpZB5ZwkMIXE2m-ic1rsJ_D4LDf7-uwn8PgsN_v3dB8zV_RBIgM84rWOxrEpaYzJHNaU99mnACQWdLq64n&_nc_ohc=zwQ45HywrMUAX9pSwkh&_nc_ht=scontent.fbog4-2.fna&oh=00_AfB5PzpKMLulKQGfB7_drU-1MPNDJAcgn6W1qQpOtBpYNA&oe=652B82D2"
            alt="Logo Motospit"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Restablecer mi contraseña</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Nueva contraseña
                </label>
                <div className="mt-1">
                  <input
                    name="new_password"
                    value={new_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    placeholder="Contraseña"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Repetir nueva contraseña
                </label>
                <div className="mt-1">
                  <input
                    name="re_new_password"
                    value={re_new_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    placeholder="Repetir Contraseña"
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
                Restablecer contraseña
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
  reset_password_confirm
}) (ResetPasswordConfirm)