import Layout from "../../hocs/Layout";
import { useParams } from "react-router";
import { useState } from "react";
import { connect } from "react-redux";
import { activate } from "../../redux/actions/auth";
import { Navigate } from "react-router";

import { Circles } from  'react-loader-spinner'

const Activate = ({
  activate, 
  loading
}) =>{

  const params = useParams()

  const [activated, setActivated] = useState(false);

  const activate_account = () => {
    const uid = params.uid
    const token = params.token
    activate(uid, token);
    setActivated(true);
  }

  if (activated && !loading)
    return <Navigate to='/' />;

  return(
    <Layout>
    <div className="relative max-w-7xl my-40 mx-auto px-4 sm:px-6 lg:px-10 sm:static text-center">
        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            ¡Activa tu cuenta aquí!
        </h1>
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="max-w-3xl mx-auto">
            {loading ? 
            <button
              className="inline-flex mt-12 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom-blue hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue">
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
            onClick={activate_account}
            className="inline-flex mt-12 mb-40 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom-blue hover:bg-custom-hover-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue">
            Activa la cuenta
          </button>
          }
          </div>
        </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  loading: state.Auth.loading
})

export default connect(mapStateToProps,{
  activate
}) (Activate)