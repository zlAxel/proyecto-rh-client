import Logo from '/logoAuth.png'; 
import { createRef, useEffect, useState } from 'react';
import Alerta from '../../components/app/Alerta'
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/utility/Button';

export default function Login() {
  
  const emailRef = createRef();
  const passwordRef = createRef();
  
  const [ errores, setErrores ] = useState([]);
  const [loadingButton, setLoadingButton] = useState(false);
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  });
  
  const handleSubmit = async e => {
      e.preventDefault();

      setLoadingButton(true);
      
      const datos = {
          email: emailRef.current.value,
          password: passwordRef.current.value
      }

      await login(datos, setErrores);
  }

  useEffect(() => {
    if (errores.length > 0) {
      setLoadingButton(false);
    }
  }, [errores])
  
  
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-32 mb-12 w-auto"
              src={Logo}	
              alt="RED"
              />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
          </div>
  
          <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-6" action="#" method="POST">
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
                    ref={emailRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition duration-300 sm:text-sm sm:leading-6"
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
                    ref={passwordRef}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition duration-300 sm:text-sm sm:leading-6"
                    />
                </div>
              </div>
              <div className='!mt-12'>
                <Button 
                  type='submit' 
                  content='Iniciar sesión'
                  loading={loadingButton}
                />
              </div>
            </form>
                  {errores.length > 0 && <Alerta errores={errores} setLoadingButton={setLoadingButton} /> }
          </div>
        </div>
      </>
    )
  }
  