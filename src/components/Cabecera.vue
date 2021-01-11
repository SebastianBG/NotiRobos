<template>
  <div class="row header">
    <div class="col-md-8 col-4">
        <Logo @ruta="home()"/> 
    </div>
    <div class="col-md-2 col-4 text-right">
        <BotonR @ruta="registro()" v-if="!existeUsuario">Registrarse</BotonR>
    </div>   
    <div class="col-md-2 col-4 text-left">
        <BotonR @ruta="iniciar()" v-if="!existeUsuario">Iniciar</BotonR>
        <BotonR @ruta="SacarUsuario()" v-if="existeUsuario">Salir</BotonR>
    </div> 
  </div>
</template>

<script>
    import BotonR from "./BotonR";
    import Logo from "./Logo";
    import {mapActions, mapGetters} from "vuex";

    export default {
    name: "App",
    components: {
        BotonR,
        Logo
    },
    methods: {
        home(){
        this.$router.push('/');
        },
        iniciar() {
        this.$router.push('/iniciar');
        },
        registro() {
        this.$router.push('/registrarse');
        },
        ...mapActions(['SacarUsuario'])
    },
    computed:{
        ...mapGetters(['existeUsuario'])
    }
};
</script>

<style lang="scss"  scoped>
    .header{
        background-color: #115471;
        padding: 20px;        
        margin-left: 0;
        margin-right: 0;
    }
</style>
