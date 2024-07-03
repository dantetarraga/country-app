const ErrorFallback = () => {
  return (
    <div className='text-center min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full'>
        <h2 className='text-2xl font-bold text-red-600 mb-4'>Oops! Algo salió mal</h2>
        <p className='text-gray-600 mb-4'>Ocurrió un error inesperado.</p>
      </div>
    </div>
  )
}

export default ErrorFallback
