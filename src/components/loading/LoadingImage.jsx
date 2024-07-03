import React from 'react'

export const LoadingImage = () => {
  return (
    <div className='w-full h-40 bg-gray-200 rounded-tr-2xl rounded-tl-2xl animate-pulse flex items-center justify-center'>
      <svg className='w-10 h-10 text-gray-400 animate-spin' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
      </svg>
    </div>
  )
}
