import useCountryImage from '../../hooks/useCountryImage'
import { ErrorLoadingImage } from '../error/ErrorLoadingImage'
import ImageNotfound from '../error/ImageNotfound'
import { LoadingImage } from '../loading/LoadingImage'

const CountryImage = ({ countryName }) => {
  const { imageUrl, loading, error } = useCountryImage(countryName)

  if (loading) return <LoadingImage />

  if (error) return <ErrorLoadingImage />

  if (!imageUrl) return <ImageNotfound />

  return (
    <img
      src={imageUrl}
      alt={countryName}
      width={200}
      height={200}
      className='rounded-tr-2xl rounded-tl-2xl object-cover w-full h-40'
    />
  )
}

export default CountryImage
