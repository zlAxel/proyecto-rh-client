import Logo from '/logo.png'; 
import { createRef, useState } from 'react';

const emailRef = createRef();
const passwordRef = createRef();

const [ errores, setErrores ] = useState([])

const handleSubmit = async e => {
    e.preventDefault();
    
    const datos = {
        email: emailRef.current.value,
        password: passwordRef.current.value
    }
    try {
        const { data } = await clienteAxios.post('/api/login', datos);

        console.log(data);
    } catch (error) {
      setErrores(Object.values(error.response.data.errors))
    }

}


export default function Login() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-44 w-auto"
              src={Logo}	
              alt="RED"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
          </div>
  
          <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className='!mt-12'>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition duration-300 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  