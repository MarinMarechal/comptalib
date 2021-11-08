<template>
    <article class="list_card">
        <img :src="img" :alt="pokemon.name">
        <p>{{pokemon.name}}</p>
    </article>
</template>

<script>
export default {
    props: ["pokemon"],
    data() {
        return {
            img: null
        }
    },
    async created() {
            let res = await this.$axios.get(this.pokemon.url);
            this.img = res.data.sprites.front_default
    },
}
</script>

<style lang="scss" scoped>
.list_card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #d8d8d8;
    padding: 20px;
    cursor: pointer;
    transition: 300ms;
    text-align: center;
    p {
        color: #000;
        font-size: 20px;
        font-weight: 800;

    }

    &:hover {
        // transform: scale(1.03);
        transition: 300ms;
    }
}
</style>