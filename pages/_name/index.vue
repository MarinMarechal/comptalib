<template>
    <div class="pokemon_page">
        <div class="card" v-if="!$fetchState.pending">
            <div class="image">
                <img :src="pokemon.sprites.front_default" alt="">
            </div>
            <h2>{{pokemon.name}}</h2>
            <p>Height: {{pokemon.height}} <br> Base Experience: {{pokemon.base_experience}}</p>
            <hr>
            <h3>abilities</h3>
            <ul style="margin-left:20px">
                <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
                    {{ ability.ability.name }}
                </li>
    
            </ul>
            <button @click="addPokedex">
                Ajouter au Pokedex
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemon: {},
        }
    },
    async fetch() {
        let pokemonData = this.$store.state.pokemons.find(e => {
            return e.name === this.$route.params.name;
        })
        let pokemon = await this.$axios.get(pokemonData.url);
        this.pokemon = pokemon.data;
    },
    methods: {
        addPokedex() {
            // console.log(this.pokemon);
            this.$store.dispatch("addPokedex", this.pokemon);
        }
    },
}
</script>

<style lang="scss" scoped>
.pokemon_page {
    // background-color: $blue;
    height: 100vh;
    width: 100vw;
    padding-top: 30px;
    .card {
        max-width: 374px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px #d8d8d8;
        padding: 30px;
        margin: auto;
        .image {
            height: auto;
            position: relative;
            &::before {
                content: "";
                display: block;
                padding-top: 50%;
            }
            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        h2 {
            margin-bottom: 10px;
        }
        hr {
            margin: 20px 0;
        }
        ul {
            margin: 10px 0;
        }
        button {
            background-color: $blue;
            color: #fff;
            padding: 10px 20px;
            margin-top: 20px;
            border: 1px solid $blue;
            transition: 300ms;
            &:hover {
                background-color: transparent;
                color: $blue;
                transition: 300ms;
            }
        }
    }

}
</style>