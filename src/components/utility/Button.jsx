import React from 'react'
import { Spinner } from './Spinner'

export const Button = ({type, className, content, loading}) => {
    const disabled = loading ? 'opacity-80 cursor-no-drop' : ''
    return (
        <button
            type={type}
            className={`flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-300 transition-colors
                        ${className} ${disabled}`}
            disabled={loading}
            >
            {
                loading && (
                    <Spinner />
                )
            }
            {content}
        </button>
    )
}
