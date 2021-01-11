<template>
  <div class="row home">
      <div class="col-md-5 col-12 centrar">
        <img src="../../src/assets/logo.png" class=" logo">
      </div>
      <div class="col-md-7 col-12 derecha">
        <div class="row titulo">
          <div class="col-md-12 col-12 text-center">
            <h3 v-if="existeUsuario">Bienvenido {{usuario.usuario}}</h3>
            <h3 v-if="!existeUsuario">Bienvenido </h3>
            <h2>Nos preocupamos por una <br> ciudad segura</h2>
          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-md-4 col-7">
            <Boton             
            @ruta="noticiaspag()">Noticias Página
            </Boton>
          </div>
          <div class="col-md-4 col-7">
            <Boton             
            @ruta="misnoticias()">Mis Noticias
            </Boton>
          </div>
        </div>
      </div>  
      <div class="row preguntas">
        <div class="col-md-6 col-12">
          <InfPagina 
          titulo="¿Miedo en la ciudad?" 
          texto="Gracias a esta página podrás ver los lugares en los que han robado a nuestros usuarios desde cualquier lugar en el que te encuentres.
          "/> 
        </div>
        <div class="col-md-6 col-12">
          <InfPagina 
          titulo="¿Robos qué reportar?" 
          texto="Regístrate en nuestra página y ayuda así a las demás personas a enterarse de los lugares más frecuentes de robo y prevenirlos.
          "/> 
        </div>
      </div>  
    </div>
</template>

<script>
  import Logo from "@/components/Logo";
  import Boton from "@/components/Boton";
  import InfPagina from "@/components/InfPagina";  
  import {mapActions, mapState, mapGetters} from 'vuex';

  export default {
    
    components: {
      Logo,
      Boton,
      InfPagina,
    },
    computed:{
      ...mapState(['usuario']),
      ...mapGetters(['existeUsuario'])
    },
    methods: {
      noticiaspag() {
        this.$router.push('/NoticiasPag');
      },
      misnoticias() {
        if(this.existeUsuario){
          this.$router.push('/misnoticias');
        }else{
          this.$router.push('/iniciar');
        }
      },
      ...mapActions(['getNoticiaUsuario'])
    }    
  };
</script>

<style lang="scss">
  .home{
    margin: 20px;
    margin-bottom: 130px;
  }
  .logo{
    width: auto;
  }
  .derecha{
    margin-top: 5%;
  }
  .titulo{
    text-align: center;
    color: #115471;
  }
  h2{
    font-size: 50px;
  }
  .preguntas{
    margin-top: 30px;
  }
  .centrar{
    text-align: center;
    margin-top: 5%;
  }

</style>