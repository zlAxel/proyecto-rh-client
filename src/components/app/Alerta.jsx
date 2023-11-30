import { XCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Alerta = ({errores}) => {
  return (
    <div className="mt-8 rounded-md bg-red-200 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Tienes {errores.length} { errores.length === 1 ? 'alerta' : 'alertas'}: 
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
                {errores.map(error => (
                    <li key={error}>{error}.</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alerta