import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { createRef } from 'react'

const people = [
  {id: 1, name: 'Aguas Calientes' },
  {id: 2, name: 'Baja California Sur' },
  {id: 3, name: 'Baja California '},
  {id: 4, name: 'Campeche' },
  {id: 5, name: 'Ciudad de México '},
  {id: 6, name: 'Chiapas '},
  {id: 7, name: 'Coahuila Zaragoza '},
  {id: 8, name: 'Colima '},
  {id: 9, name: 'Chihuahua' },
  {id: 10, name: 'Durango' },
  {id: 11, name: 'Guanajuato '},
  {id: 12, name: 'Guerrero' },
  {id: 13, name: 'Hidalgo' },
  {id: 14, name: 'Jalisco' },
  {id: 15, name: 'México '},
  {id: 16, name: 'Morelos' },
  {id: 17, name: 'Nayarit' },
  {id: 18, name: 'Nuevo León' },
  {id: 19, name: 'Oaxaca' },
  {id: 20, name: 'Puebla' },
  {id: 21, name: 'Querétaro' },
  {id: 22, name: 'Quintana Roo '},
  {id: 23, name: 'San Luis Potosí'},
  {id: 24, name: 'Sinaloa'},
  {id: 25, name: 'Sonora'},
  {id: 26, name: 'Tabasco'},
  {id: 27, name: 'Tamaulipas'},
  {id: 28, name: 'Tlaxcala'},
  {id: 29, name: 'Veracruz'},
  {id: 30, name: 'Yucatán'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const estadoRef = createRef();

export default function EstadosLista() {
  const [estadoSelected, setEstadoSelected] = useState(people[0]);

  useEffect(() => {
    estadoRef.current = estadoSelected;
  }, [estadoSelected])
  

  return (
    <Listbox value={estadoSelected} onChange={setEstadoSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 items-center text-gray-900"></Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-auto cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{estadoSelected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ estadoSelected, active }) => (
                      <>
                        <span className={classNames(estadoSelected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                        {estadoSelected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
