import { Fragment, useEffect, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { NavLink, Link } from 'react-router-dom'
import { Navigate } from 'react-router'
import Alert from '../../components/alert'

import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/solid'

import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { get_categories } from '../../redux/actions/categories'
import { get_search_products } from '../../redux/actions/products'
import SearchBox from './SearchBox'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar({
  isAuthenticated,
  // user,
  logout,
  get_categories,
  categories,
  get_search_products,
  total_items
}) {

  // eslint-disable-next-line
  const [redirect, setRedirect] = useState(false);

  const [render, setRender] = useState(false);
  const [formData, setFormData] = useState({
    category_id: 0,
    search: ''
  });
  const { category_id, search } = formData;

  useEffect(() => {
    get_categories()
  }, [])
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    get_search_products(search, category_id);
    setRender(!render);
  }

  if(render){
    return <Navigate to='/search' />;
  }

  const logoutHandler = () => {
    logout()
    setRedirect(true);
  }

  if (redirect){
    window.location.reload(false)
    return <Navigate to='/' />;
  }

  const authLinks = (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-custom-blue">
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Historial de compras
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Cerrar Sesión
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )

  const guestLinks = (
    <Fragment>
      <Link to="/login" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Iniciar Sesión
      </Link>
      <Link
        to="/signup"
        className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-custom-blue hover:bg-custom-hover-blue"
      >
        Registrarse
      </Link>
    </Fragment>
  )

  return (
    <>
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1 sm:px-6 sm:py-1 lg:px-8 md:justify-start md:space-x-10">
          <div>
              <Link to="/" className="flex">
                <span className="sr-only">Logo Motospit</span>
                <img
                  className="h-8 w-auto sm:h-20"
                  src="https://scontent.fbog18-2.fna.fbcdn.net/v/t39.30808-6/308859207_159655673376414_7733759750617869538_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeErc5dpZB5ZwkMIXE2m-ic1rsJ_D4LDf7-uwn8PgsN_v3dB8zV_RBIgM84rWOxrEpaYzJHNaU99mnACQWdLq64n&_nc_ohc=OLvffabm-XAAX8V-JHG&_nc_zt=23&_nc_ht=scontent.fbog18-2.fna&oh=00_AfCSv91VxUFsRCjd8drehSE3iCfa-woSKgQjQerMuznx1g&oe=65492C92"
                  alt="Logo Motospit"
                />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Link to="/cart" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-blue">
              <span className="sr-only">Abrir menu</span>
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-blue">
              <span className="sr-only">Abrir menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              
              <NavLink to="/shop" className="mt-2 text-base font-medium text-gray-500 hover:text-gray-900">
                Catálogo
              </NavLink>
              {
              window.location.pathname==='/search'?
              <></>:
              <SearchBox 
                search={search}
                onChange={onChange}
                onSubmit={onSubmit}
                categories={categories}
              />
              }
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link to="/cart">
                <ShoppingCartIcon className="h-8 w-8 cursor-pointer text-gray-300 mr-4"/>
                <span className="text-xs absolute top-1 mt-3 ml-4 bg-red-500 text-white font-semibold rounded-full px-2 text-center">{total_items}</span>
              </Link>
              {
                isAuthenticated ? authLinks:guestLinks
              }
            </div>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://scontent.fbog18-2.fna.fbcdn.net/v/t39.30808-6/308859207_159655673376414_7733759750617869538_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeErc5dpZB5ZwkMIXE2m-ic1rsJ_D4LDf7-uwn8PgsN_v3dB8zV_RBIgM84rWOxrEpaYzJHNaU99mnACQWdLq64n&_nc_ohc=OLvffabm-XAAX8V-JHG&_nc_zt=23&_nc_ht=scontent.fbog18-2.fna&oh=00_AfCSv91VxUFsRCjd8drehSE3iCfa-woSKgQjQerMuznx1g&oe=65492C92"
                    alt="Logo Motospit"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-blue">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="mt-8 text-base">
                    <a href='/shop' className="font-medium text-custom-blue hover:text-custom-blue">
                      {' '}
                      Ver todos los productos <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                <a
                  href="/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-custom-blue hover:bg-custom-hover-blue"
                >
                  Registrarse
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  ¿Usuario registrado?{' '}
                  <a href="/login" className="text-custom-blue hover:text-custom-hover-blue">
                    Iniciar Sesión
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    <Alert/>
  </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
  categories: state.Categories.categories,
  total_items: state.Cart.total_items
})

export default connect(mapStateToProps,{
  logout,
  get_categories,
  get_search_products
}) (Navbar)