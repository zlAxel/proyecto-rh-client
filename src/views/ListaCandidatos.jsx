import { PlusIcon, EyeIcon, TrashIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const candidatos = [
  {
    id: 1,
    name: 'Erik Jose Macias Hernandez',
    title: 'Ingeniero en Sistemas Computacionales',
    role: 'Desarrollador Web',
    email: 'erikmacias.14@outlook.com'},
  {
    id: 2,
    name: 'Erik Jose Macias Hernandez',
    title: 'Ingeniero en Sistemas Computacionales',
    role: 'Desarrollador Web',
    email: 'erikmacias.14@outlook.com'},
  {
    id: 3,
    name: 'Erik Jose Macias Hernandez',
    title: 'Ingeniero en Sistemas Computacionales',
    role: 'Desarrollador Web',
    email: 'erikmacias.14@outlook.com'},
  ]

export default function ListaCandidatos() {
  return (
    // <div>
    //   <div className='flex items-center justify-between'>
    //     <h2> Lista de Candidatos </h2>
    //     <Link
    //       to="/candidatos/crear"
    //       className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //       >
    //       <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
    //       Nuevo Candidato
    //     </Link>
    //   </div>


    //   <div className='mt-16'>
    //       <div className="flex items-center justify-between mb-3">
    //           <p className="block text-sm font-medium leading-6 text-gray-900 sm:pt-3"> 
    //               Erik Jose Macias Hernandez 
    //           </p>
    //           <div className='flex gap-4'>
    //             <Link
    //                 to="/candidatos/visualizar"
    //                 className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition duration-300 hover:bg-gray-200"
    //                 >
    //                 <EyeIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
    //                 Visualizar
    //             </Link>
    //             <button
    //                 type='button'
    //                 className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition duration-300 hover:bg-gray-200"
    //                 >
    //                 <TrashIcon className="-ml-0.5 h-5 w-5 text-sky-400" aria-hidden="true" />
    //                 Eliminar
    //             </button>
    //           </div>
    //       </div>
    //   </div>
    // </div>

    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Lista Candidatos</h1>
          <p className="mt-2 text-sm text-gray-700">
            Esta lista muestra todos los candidatos incluyendo datos como nombre, titulo, correo electrónico y puesto.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
          to="/candidatos/crear"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Nuevo Candidato
          </Link>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      ID
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Titulo
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Correo electrónico
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Puesto
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {candidatos.map((candidato) => (
                    <tr key={candidato.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.id}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {candidato.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.role}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to="/candidatos/visualizar"
                          className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition duration-300 hover:bg-gray-200"
                        >
                          <EyeIcon className="-ml-0.5 h-4 w-4 text-sky-400" aria-hidden="true" />
                          Visualizar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}