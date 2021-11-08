<template>
    <article class="pokedex_card" @click="remove">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <p>{{pokemon.name}}</p>
    </article>
</template>

<script>
export default {
    props: ["pokemon"],
    methods: {
        remove() {
            this.$store.dispatch('removePokedex', this.pokemon);
        }
    },
}
</script>

<style lang="scss" scoped>
.pokedex_card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #d8d8d8;
    padding: 10px 30px;
    text-align: center;
    margin-right: 20px;
    cursor: pointer;
    img {
        height: 60%;
    }
    p {
        color: #000;
        font-size: 20px;
        font-weight: 800;

    }
}
</style>