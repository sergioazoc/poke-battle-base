import { ref } from 'vue'
import { getPokemon } from '@/services/pokemon.services'

const usePokemon = () => {
  const pokemons = ref()
  const isLoading = ref(false)

  const loadPokemons = async () => {
    try {
      isLoading.value = true
      const pokemon1 = await getPokemon(getRandomId())
      const pokemon2 = await getPokemon(getRandomId())
      pokemons.value = [pokemon1, pokemon2]
      isLoading.value = false
    } catch (error) {
      throw new Error(error)
    }
  }

  const getRandomId = () => {
    return Math.floor(Math.random() * 151) + 1
  }

  const getPokemonStat = (pokemon, statName) => {
    return pokemon.stats.find(stat => stat.stat.name === statName).base_stat
  }

  loadPokemons()

  return {
    pokemons,
    isLoading,
    loadPokemons,
    getPokemonStat
  }
}

export default usePokemon