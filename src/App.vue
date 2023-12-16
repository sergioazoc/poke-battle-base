<script setup>
import { ref } from 'vue'
import usePokemon from '@/composables/usePokemon'
import useBattle from '@/composables/useBattle'
import PokemonCard from '@/components/PokemonCard.vue'

const { pokemons, isLoading, loadPokemons } = usePokemon()
const { fightPokemons } = useBattle()

const winner = ref()

const startFight = () => {
  const [pokemon1, pokemon2] = pokemons.value
  winner.value = fightPokemons(pokemon1, pokemon2)
}

const reset = () => {
  winner.value = null
  loadPokemons()
}


</script>

<template>
  <div>
    <h1>
      PokeBattle
    </h1>
    
    <div>
      <button
        @click="reset"
      >
        Cargar Pokemons
      </button>
    </div>
    
    <div
      v-if="isLoading"
    >
      Cargando pokemons...  
    </div>

    <div v-else>
      <div>
        <PokemonCard
          v-bind="pokemons[0]"
          :is-winner="pokemons[0].name === winner"
        />

        <p>V/S</p>

        <PokemonCard
          v-bind="pokemons[1]"
          :is-winner="pokemons[1].name === winner"
        />
      </div>

      <button
        :disabled="winner"
        @click="startFight"
      >
        ¡A Luchar!
      </button>
    </div>
  </div>
</template>