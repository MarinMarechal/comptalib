<template>
    <div class="layout">
        <section class="main">
            <Nuxt />
        </section>
        <section class="pokedex">
            <h2>Pokedex</h2>
            <div class="pokedex_list">
                <PokedexCard v-for="pokemon in pokedex" :key="pokemon.name" :pokemon="pokemon">
                </PokedexCard>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  computed: {
    pokedex() {
      return this.$store.state.pokedex;
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
    display: block;
    height: 100vh;
    width: 100vw;
    background-color: #f0f0f0;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 200px;
    grid-gap: 30px;
    .main {
        overflow-y: scroll;
    }
    .pokedex {
        background-color: $blue;
        padding: 20px;
        h2 {
            color: #fff;
            margin-bottom: 10px;
        }
        .pokedex_list {
          height: 120px;
          display: flex;
          overflow-x: auto;
          width: 100vw;
          padding-right: 20px;
        }
    }
}
</style>
