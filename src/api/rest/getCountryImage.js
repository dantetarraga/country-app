import { axiosClient } from '../../config/axiosClient'

export const getCountryImage = async (nameCountry) => {
  try {
    const response = await axiosClient.get(`?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${nameCountry}&image_type=photo`)
    return { image: response.data.hits[3]?.webformatURL || null, error: null }
  } catch (error) {
    return { imageUrl: null, error: error.response.data || 'Error fetching image' }
  }
}
