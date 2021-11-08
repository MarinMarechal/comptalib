

  const state = () => ({
      pokemons: [],
      pokedex: []
  })
  const getters = {}
  const mutations = {
        setPokemonList(state, payload) {
        state.pokemons = payload;
      },
      addPokedex(state, payload) {
        state.pokedex = [...state.pokedex, payload];
      },
      removePokedex(state, payload) {
        let newPokedex = state.pokedex.filter(e => {
            return e.id != payload.id;
        })
        state.pokedex = newPokedex;
      }
  }

  
  const actions = {
    async nuxtServerInit(vuexContext, context) {
      let res = await this.$axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      
      let newRes = res.data.results.filter(e => {
        return e != undefined;
      })

      vuexContext.commit('setPokemonList', newRes);
    },
    addPokedex(vuexContext, context, payload) {
      vuexContext.commit('addPokedex', context);
    },
    removePokedex(vuexContext, context, payload) {
      vuexContext.commit('removePokedex', context);
    }
  }
  
  export default {
    state,
    getters,
    mutations,
    actions,
  }