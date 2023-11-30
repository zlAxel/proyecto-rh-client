import { PlusIcon, EyeIcon, TrashIcon} from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ModalError from '../components/utility/ModalError';
import { deleteCandidato, getCandidatos } from '../data/candidato';
import { useApp } from '../hooks/useApp';

export default function ListaCandidatos() {

  const { openModal, setOpenModal, setAlertaApp } = useApp();
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    getCandidatos().then((data) => {
      setCandidatos(data);
    });
  }, [])
  
  const handleDelete = (id) => {
    deleteCandidato(id).then((data) => {
      setAlertaApp([data])
      
      getCandidatos().then((data) => {
        setCandidatos(data);
      });
    });
  };

  return (

    <div className="px-4 sm:px-6 lg:px-8">
      {/* {alertaApp.length > 0 && ( */}
        <ModalError 
          openModal={openModal}
          setOpenModal={setOpenModal}
          type="success"
        />
      {/* )} */}
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
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.referencia}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {candidato.nombres}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.titulo}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.correo}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidato.puesto}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          to={`/candidatos/visualizar/${candidato.id}`}
                          className="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition duration-300 hover:bg-gray-200"
                          >
                          <EyeIcon className="-ml-0.5 h-4 w-4 text-sky-400" aria-hidden="true" />
                          Visualizar
                        </Link>
                        <button
                          type="button"
                          onClick={ () => handleDelete(candidato.id) }
                          className="relative inline-flex items-center gap-x-1.5 rounded-r-md ml-2 px-3 py-2 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 transition duration-300 hover:bg-gray-200"
                        >
                          <TrashIcon className="-ml-0.5 h-4 w-4 text-sky-400" aria-hidden="true" />
                          Eliminar
                        </button>
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