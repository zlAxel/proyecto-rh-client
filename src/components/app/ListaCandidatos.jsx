import { PlusIcon, EyeIcon, ArrowPathIcon} from '@heroicons/react/20/solid'

export default function ListaCandidatos() {
  return (
    <>
    <div className='float-right'>
      <button
        
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Nuevo Candidato
      </button>
    </div>

    <h2> Lista de Candidatos </h2>

    <div className='mt-16'>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="" className='className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3'> 
                Erik Jose Macias Hernandez 
            </label>
            <div>
              <div className="mt-2 flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick=""
                  className="relative ml-96 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
                </button>
              </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="" className='className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3'> 
                Erik Jose Macias Hernandez 
            </label>
            <div>
              <div className="mt-2 flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick=""
                  className="relative ml-96 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
                </button>
              </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="" className='className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3'> 
                Erik Jose Macias Hernandez 
            </label>
            <div>
              <div className="mt-2 flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick=""
                  className="relative ml-96 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
                </button>
              </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="" className='className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3'> 
                Erik Jose Macias Hernandez 
            </label>
            <div>
              <div className="mt-2 flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick=""
                  className="relative ml-96 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
                </button>
              </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="" className='className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3'> 
                Erik Jose Macias Hernandez 
            </label>
            <div>
              <div className="mt-2 flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick=""
                  className="relative ml-96 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                  Visualizar
                </button>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}