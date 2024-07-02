const CountryLoading = () => {
  return (
    <div className='flex items-center flex-col justify-center h-screen bg-gray-100 gap-2'>
      <div className='flex items-center justify-center bg-gray-100'>
        <div className='relative w-24 h-24 animate-spin'>
          <div className='absolute w-full h-full border-8 border-t-blue-300 border-b-red-300 rounded-full' />
          <div className='absolute w-full h-full border-8 border-l-white border-r-green-300 rounded-full animate-pulse' />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-2xl'>🌍</span>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>Explorando el mundo...</h2>
        <p className='text-gray-600'>Preparando información de países</p>
        <div className='mt-4 space-y-2'>
          <div className='h-2 bg-blue-200 rounded-full max-w-md mx-auto' />
          <div className='h-2 bg-green-200 rounded-full max-w-sm mx-auto' />
          <div className='h-2 bg-red-200 rounded-full max-w-xs mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default CountryLoading
