import { useEffect, useState } from 'react'
import { getCountryImage } from '../api/rest/getCountryImage'

const useCountryImage = (countryName) => {
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const url = await getCountryImage(countryName)
      setImageUrl(url)
      setLoading(false)
    })()
  }, [countryName])

  return { imageUrl, loading }
}

export default useCountryImage
