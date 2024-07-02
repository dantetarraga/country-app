import { axiosClient } from '../../config/axiosClient'

export const getCountryImage = async (nameCountry) => {
  const response = await axiosClient.get(`?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${nameCountry}&image_type=photo`)

  return response.data.hits[3]?.webformatURL || null
}
