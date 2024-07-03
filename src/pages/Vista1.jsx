import React from 'react'

const Vista1 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-center'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>Hola! Esta es la Vista 1</h2>
        <div className='mt-4 space-y-2'>
          <div className='h-2 bg-blue-200 rounded-full max-w-md mx-auto' />
          <div className='h-2 bg-green-200 rounded-full max-w-sm mx-auto' />
          <div className='h-2 bg-red-200 rounded-full max-w-xs mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default Vista1
