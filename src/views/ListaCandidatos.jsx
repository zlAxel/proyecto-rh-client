import { PlusIcon, EyeIcon, ArrowPathIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function ListaCandidatos() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2> Lista de Candidatos </h2>
        <Link
          to="/candidatos/crear"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Nuevo Candidato
        </Link>
      </div>


      <div className='mt-16'>
          <div className="flex items-center justify-between">
            <p className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3"> 
                Erik Jose Macias Hernandez 
            </p>
            <div className='flex gap-4'>
              <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
              </button>
              <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}