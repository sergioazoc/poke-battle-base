import api from "@/api"

const getPokemon = async (id) => {
  try {
    const response = await api.get(`/pokemon/${id}`)
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw error
    }
  }
}

export {
  getPokemon
}