<template>
    <div>
        <h1>Desputo el que lo lea</h1>
        {{id}} - {{Noticia}}
        <form @submit.prevent="editarNoticia(Noticia)">
            <input type="text" v-model="Noticia.Titulo">
            <button type="submit">Editar</button>
        </form>
    </div>
    

</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getNoticia','editarNoticia'])
    },
    created(){
        this.getNoticia(this.id)
    },
    computed:{
        ...mapState(['Noticia'])
    }
}
</script>

<style>

</style>
