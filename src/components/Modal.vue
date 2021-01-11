<template>
    <div class="modal fade" id="Noticia" role="dialog"  tabindex="-1" aria-labelledby="NoticiaLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="NoticiaLabel">{{arrM[idxM].Titulo}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img :src="arrM[idxM].Imagen" class="imagenM">
                </div>
                <div class="modal-footer">
                    <p>{{arrM[idxM].Resumen}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            idxM: {
                type: Number,
                default: 0
            },
            arrM: {
                type: Array,
                default: []
            },
            resumenM:{
                type: String,
                default:""
            },   
        },
    }
</script>

<style lang="scss" scoped>
    .imagenM{
        width: 100%;
    }
</style>