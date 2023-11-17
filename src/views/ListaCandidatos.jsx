import { PlusIcon, EyeIcon, TrashIcon} from '@heroicons/react/20/solid'
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
          <div className="flex items-center justify-between mb-3">
              <p className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3"> 
                  Erik Jose Macias Hernandez 
              </p>
              <div className='flex gap-4'>
                <Link
                    to="/candidatos/visualizar"
                    className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition delay-50 hover:bg-gray-200"
                    >
                    <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                    Visualizar
                </Link>
                <button
                    type='button'
                    className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition delay-50 hover:bg-gray-200"
                    >
                    <TrashIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                    Eliminar
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}