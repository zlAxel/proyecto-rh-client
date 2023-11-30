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
import { createRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCandidato, getCandidato, updateCandidato } from '../../data/candidato';
import { useApp } from '../../hooks/useApp';
import ModalError from '../utility/ModalError';

import EstadosLista, { estadoRef } from './EstadosLista';

export default function CrearCandidato(tipo) {
  const { id } = useParams();

  if( tipo.visualizar ) {
    
    getCandidato(id).then((data) => {
      const candidato = data;
      referenciaRef.current.value    = candidato.referencia;
      curpRef.current.value          = candidato.curp;
      rfcRef.current.value           = candidato.rfc;
      nivelEstudiosRef.current.value = candidato.nivel_estudio;
      puestoRef.current.value        = candidato.puesto;
      nombreRef.current.value        = candidato.nombres;
      apellidosRef.current.value     = candidato.apellidos;
      telefonoRef.current.value      = candidato.telefono;
      correoRef.current.value        = candidato.correo;
      domicilioRef.current.value     = candidato.domicilio;
      alcaldiaRef.current.value      = candidato.alcaldia;
      coloniaRef.current.value       = candidato.colonia;
      codigoPostalRef.current.value  = candidato.codigo_postal;
      estadoRef.current.name         = candidato.estado;
    });
  }

  const navigate = useNavigate();

  const referenciaRef    = createRef();
  const curpRef          = createRef();
  const rfcRef           = createRef();
  const nivelEstudiosRef = createRef();
  const puestoRef        = createRef();
  const nombreRef        = createRef();
  const apellidosRef     = createRef();
  const telefonoRef      = createRef();
  const correoRef        = createRef();
  const domicilioRef     = createRef();
  const alcaldiaRef      = createRef();
  const coloniaRef       = createRef();
  const codigoPostalRef  = createRef();

  // const [errores, setErrores] = useState([]);
  
  const { openModal, setOpenModal, setAlertaApp, alertaApp } = useApp();


  function generateRandomId() {

    if( tipo.visualizar ) return;
    // Generar un ID aleatorio (puedes personalizar la lógica para tu caso específico)
    const randomId = Math.floor(Math.random() * Math.pow(10, 4)).toString().padStart(4, '0');  
    // Mostrar el ID aleatorio en el input  
    referenciaRef.current.value = `ref-${randomId}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const candidato = {
      referencia: referenciaRef.current.value,
      curp: curpRef.current.value,
      rfc: rfcRef.current.value,
      nivel_estudio: nivelEstudiosRef.current.value,
      puesto: puestoRef.current.value,
      nombres: nombreRef.current.value,
      apellidos: apellidosRef.current.value,
      telefono: telefonoRef.current.value,
      correo: correoRef.current.value,
      domicilio: domicilioRef.current.value,
      alcaldia: alcaldiaRef.current.value,
      colonia: coloniaRef.current.value,
      codigo_postal: codigoPostalRef.current.value,
      estado: estadoRef.current.name,
    };
    
    if( tipo.visualizar ){
      await updateCandidato(id, candidato).then((data) => {
        setAlertaApp([data])
        navigate('/candidatos/lista');
      }).catch((error) => {
        setAlertaApp(Object.values(error?.response?.data?.errors));
        setOpenModal(true);
      });
      return;
    }
    await createCandidato(candidato).then((data) => {
      setAlertaApp([data])
      navigate('/candidatos/lista');
    }).catch((error) => {
      setAlertaApp(Object.values(error?.response?.data?.errors));
      setOpenModal(true);
    });
  };

  const handleClickCancelar = () => {
    navigate('/candidatos/lista');
  };

  return (
    <form>
      { alertaApp.length > 0 &&  
      <ModalError 
        openModal={openModal}
        setOpenModal={setOpenModal}
        type='error'
      />
      }
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
                    ref={referenciaRef}
                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder="ref-0000"
                    readOnly
                  />
                </div>
                <button
                  type="button"
                  onClick={generateRandomId}
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-sky-600 hover:text-white transition duration-300"
                >
                  <ArrowPathIcon className="-ml-0.5 h-5 w-5 text-gray-400 hover:text-white transition duration-300" aria-hidden="true" />
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
                    ref={curpRef}
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
                    ref={rfcRef}
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="curp" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Nivel de estudios
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <DocumentArrowDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="nivel_estudios"
                    id="nivel_estudios"
                    ref={nivelEstudiosRef}
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="curp" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Puesto
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
                    <DocumentArrowDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="puesto"
                    id="puesto"
                    ref={puestoRef}
                    className="block w-full rounded-md border-0 py-1.5 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 transition duration-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            {/* <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="upload" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Subir documentación
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-2xl justify-center rounded-lg border border-gray-900/25 px-6 hover:border-sky-700 border-double duration-300 py-10">
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
            </div> */}
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
                    ref={nombreRef}
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
                    ref={apellidosRef}
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
                    ref={telefonoRef}
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
                    ref={correoRef}
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
                    ref={domicilioRef}
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
                    ref={alcaldiaRef}
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
                    ref={coloniaRef}
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
                    ref={codigoPostalRef}
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
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => handleClickCancelar() }>
        Regresar
      </button>
          <button
          type="submit"
          onClick={ e => handleSubmit(e) }
          className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Guardar
        </button>
    </div>
  </form>
  )
}
