import Layout from "../../hocs/Layout";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-gray-900 text-center">
          <h1 className="text-7xl font-extrabold mb-4">ERROR 404</h1>
          <p className="text-lg mb-8">
            La página que estás buscando no existe.
          </p>
          <Link to="/" className="text-custom-blue hover:text-custom-hover-blue">
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Error404;