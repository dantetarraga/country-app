import useCountryImage from '../hooks/useCountryImage'

const CountryImage = ({ countryName }) => {
  const { imageUrl, loading } = useCountryImage(countryName)

  if (loading) return <div>Loading...</div>
  if (!imageUrl) return <div>No image found</div>

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
