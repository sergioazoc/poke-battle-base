import usePokemon from '@/composables/usePokemon'
const { getPokemonStat } = usePokemon()

const useBattle = () => {
  
  const attack = (attacker, defender) => {
    const attackPower = getPokemonStat(attacker, 'attack')
    const defenderHP = getPokemonStat(defender, 'hp')
    return defenderHP - attackPower > 0 ? defenderHP - attackPower : 0
  }

  const fightPokemons = (pokemon1, pokemon2) => {
    let pokemon1HP = getPokemonStat(pokemon1, 'hp')
    let pokemon2HP = getPokemonStat(pokemon2, 'hp')

    const pokemon1Speed = getPokemonStat(pokemon1, 'speed')
    const pokemon2Speed = getPokemonStat(pokemon2, 'speed')

    while (pokemon1HP > 0 && pokemon2HP > 0) {
      if (pokemon1Speed > pokemon2Speed) {
        pokemon2HP = attack(pokemon1, pokemon2)
        if (pokemon2HP > 0) {
          pokemon1HP = attack(pokemon2, pokemon1)
        }
      } else {
        pokemon1HP = attack(pokemon2, pokemon1)
        if (pokemon1HP > 0) {
          pokemon2HP = attack(pokemon1, pokemon2)
        }
      }
    }

    const winner = pokemon1HP > 0 ? pokemon1.name : pokemon2.name

    return winner
  }

  return {
    fightPokemons
  }
}

export default useBattle