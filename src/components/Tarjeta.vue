<template>
    <div class="cursor" data-toggle="modal" data-target="#Noticia">
        <div class="row">
            <div class="col" >
                <img :src="foto" class="imagen">
                <slot></slot>
            </div>
        </div>
        <br>
        <div class="row ">
            <div class="col">
                <h5 class=" borde ">{{title}}</h5>
            </div>
        </div>
        <Modal :arrM="arr" :idxM="idx"/>
    </div>
</template>

<script>
    import Modal from "./Modal.vue";
    export default {
        components: {
            Modal
        },
         props:{
            foto: {
            type: String,
            default: ""
            },
            title:{
            type: String,
            default: ""
            },
            resumen:{
            type: String,
            default:""
            },
            idx: {
            type: Number,
            default: 0
            },
            arr: {
            type: Array,
            default: []
            }
        },
        methods: {
            onclick() {
           
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cursor{
        cursor:pointer;        
        margin-top: 5%;
    }
    .imagen{
        width: 100%;
    }
    .borde{
        color: #31afb4;
        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
    }
</style>