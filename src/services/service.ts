import axios from "axios"

const getUser = async (userName: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    return response.data
  } catch (error) {
    throw(error)
  }
}

export { getUser }