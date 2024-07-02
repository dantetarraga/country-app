import axios from 'axios'

export const ajax = async (config) =>
  await axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => error.response.data)
