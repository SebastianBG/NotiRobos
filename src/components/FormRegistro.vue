<template>
    <div class="container medio">
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control textos" v-model="usuario" placeholder="Nombre:">
                        <br>
                        <br>
                        <input type="password" class="form-control textos" v-model="pass1" placeholder="Contraseña:">
                        <br>
                        <br>
                        <input type="password" class="form-control textos" v-model="pass2" placeholder="Conf. Contraseña:">
                    </div>
                </form>
                <p>{{error}}</p>
            </div>
        </div>
        <div class="row justify-content-between botones">
            <div class="col-12 col-md-5">
                <Boton @ruta="crearUsuario({usuario:usuario, pass:pass1})" v-if="desactivar">Guardar</Boton>
            </div>
            <div class="col-12 col-md-5 formularios">
                <Boton @ruta="inicio()" >Cancelar</Boton>
            </div>
        </div>
    </div>
</template>

<script>
    import Boton from "@/components/Boton";
    import {mapActions,mapState} from "vuex";

    export default {
        components: {
            Boton
        },
        data(){
            return{
                usuario: '',
                pass1: '',
                pass2: ''
            }
        },
        methods: {
            inicio(){
                this.$router.push('/');
            },
            ...mapActions(['crearUsuario'])
        },
        computed:{
            ...mapState(['error']),
            desactivar(){
                return this.pass1 === this.pass2 && this.pass1 != ''
            }
        }
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
