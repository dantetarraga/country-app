import { useEffect, useState } from 'react'
import { getCountryImage } from '../api/rest/getCountryImage'

const useCountryImage = (countryName) => {
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { image, error } = await getCountryImage(countryName)
      setImageUrl(image)
      setError(error)
      setLoading(false)
    })()
  }, [countryName])

  return { imageUrl, loading, error }
  // return { imageUrl: null, loading: false, error: null }
}

export default useCountryImage
