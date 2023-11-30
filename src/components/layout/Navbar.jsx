import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../public/logo.png'
import { NavLink } from 'react-router-dom'
import { menuApp } from '../../data/menuApp'
import { useAuth } from '../../hooks/useAuth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const { logout } = useAuth({
    middleware: 'auth',
    url: '/auth/login'
  });
  
  const handleLogout = () => {

    logout();
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menú de navegación</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="mt-3.5 flex flex-shrink-0 items-center">
                  <img
                    className="h-20 w-auto"
                    src={Logo}
                    alt="Red Mex"
                  />
                </div>
                <div 
                  className="hidden sm:ml-6 sm:flex sm:space-x-8 [&>a]:inline-flex [&>a]:items-center [&>a]:px-1 [&>a]:pt-1 [&>a]:border-b-2 [&>a]:text-sm [&>a]:font-medium [&>a]:text-gray-500"
                  >
                  {
                    menuApp.map((item, index) => {
                      return (
                        <NavLink
                          key={index}
                          to={item.to}
                          className={ ({isActive}) => 
                            isActive ? 'border-sky-500' : ''
                          }
                          >
                          {item.name}
                        </NavLink>
                      )
                    })
                  }
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Ver notificaciones</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars.githubusercontent.com/u/130427489?v=4"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-semibold')}
                          >
                            Erik José Macías Hernández
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Tu perfil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Configuración
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={ () => handleLogout() }
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                            >
                            <span className='sr-only'>Cerrar sesión</span>
                            Cerrar sesión
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-sky-50 border-sky-500 text-sky-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {/* <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-sky-500 bg-sky-50 py-2 pl-3 pr-4 text-base font-medium text-sky-700"
              >
                Inicio
              </Disclosure.Button> */}
              {
                menuApp.map((item, index) => {
                  return (
                    <NavLink
                    key={index}
                    to={item.to}
                    className="block border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
                    >
                    {item.name}
                  </NavLink>
                  )
                })
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
