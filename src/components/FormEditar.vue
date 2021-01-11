<template>
    <div class="container medio">
        <div class="row">
            <div class="col">
                <form >
                    <div class="form-group">
                        <input type="text" class="form-control textos" v-model="NoticiaUsuario.Titulo">
                        <br>
                        <br>
                        <input type="text" class="form-control textos" v-model="NoticiaUsuario.Resumen">
                        <br>
                        <br>
                        <label class="textos">Arma/Tipo:</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Escoja una opción:</option>
                            <option>Cuchillo</option>
                            <option>Pistola</option>
                            <option>Celular</option>
                            <option>Cosquilleo</option>
                            <option>De vehículo</option>
                            <option>Otros</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-between botones">
            <div class="col-12 col-md-4 ">
                <Boton @ruta="editarNoticiaU(NoticiaUsuario)">Guardar</Boton>
            </div>
            <div class="col-12 col-md-4 ">
                <Boton @ruta="eliminarNoticiaU(NoticiaUsuario.id)">Eliminar</Boton>
            </div>
            <div class="col-12 col-md-4 formularios">
                <Boton @ruta="misn()">Cancelar</Boton>
            </div>
        </div>
    </div>
</template>

<script>
    import Boton from "@/components/Boton";
    import {mapActions, mapState} from 'vuex';
    export default {
        name: 'FormEditar',
        data(){
            return{
                id: this.$route.params.id
            }
        },
        components: {
            Boton
        },
        computed:{
            ...mapState(['NoticiaUsuario'])
        },
        methods: {
            misn(){
                this.$router.push('/misnoticias');
            },
            ...mapActions(['getNoticiaU','editarNoticiaU','eliminarNoticiaU'])
        },
        created(){
            this.getNoticiaU(this.id)
        },
    }
</script>

<style>
    .medio{
        margin-top: 70px;
        margin-bottom: 30px;
        width: 80%;
    }
    .textos{
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        border-bottom-width: 5px;
        border-bottom-color: #115471;
        color: #7996a3;
        font-size: 20px;
    }
    .botones{
        font-size: 20px;
        margin-top: 30px;
    }
    .formularios{
        margin-bottom: 130px;
    }
</style>
