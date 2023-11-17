import { 
  PhotoIcon,
  UserCircleIcon,
  ArrowPathIcon, 
  UserIcon, 
  PhoneIcon, 
  PencilIcon, 
  EnvelopeIcon, 
  UsersIcon,
  UserPlusIcon,
  DocumentArrowDownIcon,

} from '@heroicons/react/20/solid'

import EstadosLista from './EstadosLista';

export default function CrearCandidato() {

  function generateRandomId() {

    // Generar un ID aleatorio (puedes personalizar la lógica para tu caso específico)
    const randomId = Math.floor(Math.random() * Math.pow(10, 4)).toString().padStart(4, '0');  
    // Mostrar el ID aleatorio en el input  
    document.getElementById('randomIdInput').value = `ref-${randomId}`;

  }
  return (
    <form>
      <div className="space-y-12 sm:space-y-16">
        <div className='relative'>
          <div className='absolute py-1'>
            <UserPlusIcon className='h-5 w-5'/>
          </div>
          <h2 className="text-base font-semibold leading-7 text-black-900 pl-10"> Capturar Candidato </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            
          </p>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Referencia
              </label>
              <div>
              <div className="mt-2 flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type=""
                    name="randomIdInput"
                    id="randomIdInput"
                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder="ref-0000"
                    readOnly
                  />
                </div>
                <button
                  type="button"
                  onClick={generateRandomId}
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <ArrowPathIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Generar
                </button>
              </div>
            </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="curp" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                CURP
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="curp"
                    id="curp"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 ease-in sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="curp" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                RFC
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <DocumentArrowDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="rfc"
                    id="rfc"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Foto de Perfil
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex items-center gap-x-3">
                  <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-600 hover:text-white transition duration-300"
                  >
                    Cambiar
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="upload" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Subir Archivos
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-500"
                      >
                        <span>Cargar Archivos</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className='absolute py-1'>
                <UserIcon className='h-5 w-5'/>
            </div>
            <h2 className="text-base font-semibold leading-7 pl-10 text-gray-900">Información Personal</h2>
          </div>
          {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p> */}

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Nombre Completo
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <PencilIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="first-name"
                    id="fist-name"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Apellidos
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <PencilIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Telefono
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Correo Electronico
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                    placeholder="admin@redmex.com"
                  />
                </div>
              </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Ciudad / Estado
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <EstadosLista />
                {/* <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Aguas Calientes</option>
                  <option>Baja California</option>
                  <option>Baja California Sur</option>
                  <option>Campeche</option>
                  <option>Ciudad de México</option>
                  <option>Chiapas</option>
                  <option>Coahuila Zaragoza</option>
                  <option>Colima</option>
                  <option>Chihuahua</option>
                  <option>Durango</option>
                  <option>Guanajuato</option>
                  <option>Guerrero</option>
                  <option>Hidalgo</option>
                  <option>Jalisco</option>
                  <option>México</option>
                  <option>Morelos</option>
                  <option>Nayarit</option>
                  <option>Nuevo León</option>
                  <option>Oaxaca</option>
                  <option>Puebla</option>
                  <option>Querétaro</option>
                  <option>Quintana Roo</option>
                  <option>San Luis Potosí</option>
                  <option>Sinaloa</option>
                  <option>Sonora</option>
                  <option>Tabasco</option>
                  <option>Tamaulipas</option>
                  <option>Tlaxcala</option>
                  <option>Veracruz</option>
                  <option>Yucatán</option>
                  <option>Zacatecas</option>
                </select> */}
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Domicilio
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-16 flex items-center pl-3">
                    <PencilIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Alcaldia
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-16 flex items-center pl-3">
                    <PencilIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Colonia
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-16 flex items-center pl-3">
                    <PencilIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="region"
                    id="region"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Codigo Postal
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-16 flex items-center pl-3">
                    <PencilIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
          </div>
        </div>
        <div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancelar
      </button>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Guardar
      </button>
    </div>
  </form>
  )
}
