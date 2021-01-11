<template>
    <div class="container mitad">
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control cajatexto" v-model="usuario" placeholder="Nombre">
                        <br>
                        <br>
                        <br>
                        <input type="password" class="form-control cajatexto" v-model="pass" placeholder="Contraseña">
                    </div>
                </form>
                <p>{{error}}</p>
            </div>
        </div>
        <div class="row justify-content-between ancho">
            <div class="col-12 col-md-5">
                <Boton @ruta="IngresarUsuario({usuario,pass})" class="letra">Iniciar</Boton>
            </div>
            <div class="col-12 col-md-5 formularios">
                <Boton  @ruta="inicio()" class="letra">Cancelar</Boton>
            </div>
        </div>
    </div>
</template>

<script>
    import Boton from "@/components/Boton";
    import {mapActions,mapState}from "vuex";

    export default {
        components: {
        Boton
        },
        data(){
            return{
                usuario:'',
                pass:''
            }
        },
        methods: {
            inicio(){
                this.$router.push('/');
            },
            ...mapActions(['IngresarUsuario'])
        },
        computed:{
            ...mapState(['error'])
        }
    }

</script>

<style>
    .mitad{
        margin-top: 100px;
        margin-bottom: 30px;
        width: 80%;
    }
    .cajatexto{
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        border-bottom-width: 5px;
        border-bottom-color: #115471;
        color: #7996a3;
        font-size: 20px;
        text-align: center;
    }
    .letra{
        font-size: 20px;
    }
    .ancho{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    .formularios{
        margin-bottom: 130px;
    }
</style>