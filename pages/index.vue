<template>
    <main>
        <section class="search">
            <Search :pokemons="filteredItems" @search="search" @reset="reset" />
        </section>
        <section class="pokemon_list" :key="isFiltered">
            <div v-for="pokemon in filteredItems" :key="pokemon.name">
                <ListCard :pokemon="pokemon" @click.native="toPokemon(pokemon.name)">
                </ListCard>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            filteredItem: [],
            isFiltered: false
        }
    },
    computed: {
        pokemons() {
            return this.$store.state.pokemons;
        }
    },
    methods: {
        toPokemon(name) {
            this.$router.push(`/${name}`)
        },
        search(result) {
            this.filteredItems = result;
            this.isFiltered = true;
        },
        reset() {
            this.filteredItems = this.pokemons;
            this.isFiltered = false;
        }
    },
    created() {
        this.filteredItems = [...this.$store.state.pokemons];
    },
}
</script>

<style lang="scss" scoped>
.pokemon_list {
    padding: 40px;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    height: 100%;
    margin-top: 100px;
    width: 100vw;
}
</style>
