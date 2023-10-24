import Layout from "../../hocs/Layout";
import { useState, useEffect } from 'react';
import React from "react";
import { connect } from "react-redux";
import { signup } from '../../redux/actions/auth';
import { Circles } from  'react-loader-spinner';


function Signup({
  signup,
  loading
}) {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
  })

  const { 
    first_name,
    last_name,
    email,
    password,
    re_password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    signup(
      first_name,
      last_name,
      email,
      password,
      re_password
      )
     setAccountCreated(true);
     window.scrollTo(0,0)
  }

    
  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/308859207_159655673376414_7733759750617869538_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeErc5dpZB5ZwkMIXE2m-ic1rsJ_D4LDf7-uwn8PgsN_v3dB8zV_RBIgM84rWOxrEpaYzJHNaU99mnACQWdLq64n&_nc_ohc=c0P8P5BilDAAX8hwao6&_nc_ht=scontent.fbog4-2.fna&oh=00_AfCs3wWvJLASIX6L1GVxzq4DGaIvmOoRM4kyyQAhO3917A&oe=653D4F12"
            alt="Logo motospit"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Crear una nueva cuenta</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Agrega tu información para crear una cuenta en nuestro Ecommerce
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  Nombre(s)
                </label>
                <div className="mt-1">
                  <input
                    name="first_name"
                    value={first_name}
                    onChange={e=>onChange(e)}
                    type="text"
                    placeholder="Nombres"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Apellido(s)
                </label>
                <div className="mt-1">
                  <input
                    name="last_name"
                    value={last_name}
                    onChange={e=>onChange(e)}
                    type="text"
                    placeholder="Apellidos"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
                  />
                </div>
              </div>
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Repetir Contraseña
                </label>
                <div className="mt-1">
                  <input
                    name="re_password"
                    value={re_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    placeholder="Repetir contraseña"
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
                  Registrar
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
   signup
}) (Signup)