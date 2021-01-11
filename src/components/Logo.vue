<template>
    <div>
        <img src="../assets/logo 2.png"  @click="onclick()" class="cursor">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        methods: {
            onclick() {
            // escucha las funciones exteriores
            this.$emit("ruta");
            }
        }
    }
</script>

<style lang="scss" scoped>

    .cursor{
        cursor:pointer;
        width: auto;
    }
</style>