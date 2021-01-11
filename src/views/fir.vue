<template>
    <div>
        <router-link :to="{name: 'add'}">
            <button>Add</button>
        </router-link>
        <ul>
            <li v-for="item of Noticias" :key=item.id>
                {{item.id}}-{{item.Titulo}} - {{item.Resumen}}
                <router-link :to="{name: 'edit', params:{id: item.id }}">
                    <button>Editar</button>
                </router-link>
                <button @click="eliminarNoticia(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'fir',
    methods:{
        ...mapActions(['getNoticias','eliminarNoticia'])
    },
    created(){
        this.getNoticias()
    },
    computed:{
        ...mapState(['Noticias'])
    }
}
</script>

<style>

</style>
