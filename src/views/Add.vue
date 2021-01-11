<template>
    <div>
        <h1>Agrgar</h1>
        <form @submit.prevent="agregarNoticia(Titulo)">
            <input type="text" v-model="Titulo">
            <input type="text" v-model="Resumen">
            <button type="submit">Add</button>
        </form>
        {{Titulo}}
    </div>
</template> 

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Add',
    data(){
        return{
            Titulo: '',
            Resumen:''
        }
    },
    methods:{
        ...mapActions(['agregarNoticia']),
    }
}
</script>

<style>

</style>
