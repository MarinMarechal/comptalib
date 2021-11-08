<template>
    <div class="search">
        <v-text-field type="text" v-model="search" label="Chercher pokemon"></v-text-field>
        <button @click="filtrer">Filtrer</button>
        <button @click="reset">reset</button>
    </div>
</template>


<script>
export default {
    props: ["pokemons"],
    data() {
        return {
            search: null
        }
    },
    methods: {
        filtrer() {
            if (this.search != null) {
                let search = this.regex(this.search);
                let result = this.pokemons.filter(e => {
                    return e.name.includes(search);
                })
                this.$emit("search", result);
            }
        },
        reset() {
            this.$emit("reset");
        },
        regex(string) {

            let r = string.toLowerCase();
            r = r.replace(new RegExp(/\s/g), "");
            r = r.replace(new RegExp(/[àáâãäå]/g), "a");
            r = r.replace(new RegExp(/æ/g), "ae");
            r = r.replace(new RegExp(/ç/g), "c");
            r = r.replace(new RegExp(/[èéêë]/g), "e");
            r = r.replace(new RegExp(/[ìíîï]/g), "i");
            r = r.replace(new RegExp(/ñ/g), "n");
            r = r.replace(new RegExp(/[òóôõö]/g), "o");
            r = r.replace(new RegExp(/œ/g), "oe");
            r = r.replace(new RegExp(/[ùúûü]/g), "u");
            r = r.replace(new RegExp(/[ýÿ]/g), "y");
            r = r.replace(new RegExp(/\W/g), "");
            return r;
        }
    },
}
</script>

<style lang="scss">
.search {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0 0 10px #d8d8d8;
    padding: 10px;
    width: 100%;
    button {
        background-color: $blue;
        color: #fff;
        padding: 10px 20px;
        border: 1px solid $blue;
        transition: 300ms;
        &:hover {
            background-color: transparent;
            color: $blue;
            transition: 300ms;
        }
    }
}
</style>