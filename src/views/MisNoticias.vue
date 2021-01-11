<template>
  <div class="misnoticias container">
    <div class="row">
      <div class="col-12">
        <input class="form-control buscador" type="text" v-model="buscar" placeholder="Buscar">
      </div>
      <div class="col-12" v-if="filtronoticias.length===0">
        <div class="mediom">
          <h2>No hay noticias</h2>
          <i class="fa fa-times caritam"></i>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div 
        class="col-md-4 col-sm-12" 
        v-for="(Noti,index) in filtronoticias" 
        :key="index">
        <div  @click="positionCard(index)">
          <Tarjeta 
            :foto="Noti.Imagen" 
            :title="Noti.Titulo"
            :idx="posicionActual"
            :arr="NoticiaUsuario"/>
        </div>
        <!--
        <Boton @ruta="editarnoticia()">Editar Noticia</Boton>-->
        <router-link :to="{name: 'editarnoticia', params:{id: Noti.id }}">
        <Boton>Editar Noticia</Boton>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-5 col-md-3 container vermas" v-if="filtronoticias.length>0">
        <Boton @ruta="vermas()">Ver Más</Boton>
      </div>
      <div class="col-5 col-md-3 container vermas">
        <Boton @ruta="agregarnoticia()">Agregar Noticia</Boton>
      </div>
    </div>
  </div>
</template>

<script>
  import Tarjeta from "../components/Tarjeta.vue";
  import Boton from "@/components/Boton";
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {
      Tarjeta, 
      Boton
    },
    data(){
      return{
        /*arregloNoticias:[
          {image:require("../assets/cuchillo.png"),titulo:"Robo con cuchillo en la cll.127",resumen:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam odio, gravida porttitor orci nec, interdum imperdiet purus. Donec tristique ultricies fringilla. Morbi nunc eros, suscipit vitae porta ac, imperdiet quis tellus. Vestibulum diam est, congue sed leo at, fermentum tempor purus. Morbi non turpis sed tortor tristique auctor. Sed scelerisque mauris a quam pulvinar laoreet. Nulla facilisi."},
          {image:require("../assets/pistola.png"),titulo:"Robo con pistola en la Kr.30",resumen:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam odio, gravida porttitor orci nec, interdum imperdiet purus. Donec tristique ultricies fringilla. Morbi nunc eros, suscipit vitae porta ac, imperdiet quis tellus. Vestibulum diam est, congue sed leo at, fermentum tempor purus. Morbi non turpis sed tortor tristique auctor. Sed scelerisque mauris a quam pulvinar laoreet. Nulla facilisi."},
          {image:require("../assets/robo 3.png"),titulo:"Robo de cosquilleo en la dig.29",resumen:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam odio, gravida porttitor orci nec, interdum imperdiet purus. Donec tristique ultricies fringilla. Morbi nunc eros, suscipit vitae porta ac, imperdiet quis tellus. Vestibulum diam est, congue sed leo at, fermentum tempor purus. Morbi non turpis sed tortor tristique auctor. Sed scelerisque mauris a quam pulvinar laoreet. Nulla facilisi."},
          {image:require("../assets/carro.png"),titulo:"Robo a carro en la cll.100",resumen:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam odio, gravida porttitor orci nec, interdum imperdiet purus. Donec tristique ultricies fringilla. Morbi nunc eros, suscipit vitae porta ac, imperdiet quis tellus. Vestibulum diam est, congue sed leo at, fermentum tempor purus. Morbi non turpis sed tortor tristique auctor. Sed scelerisque mauris a quam pulvinar laoreet. Nulla facilisi."},
        ],*/
        tamanio: 6,
        buscar:'',
        posicionActual: 0
      };
    },

    computed:{

      filtronoticias: function(){
        if(this.buscar.length>0){
          return this.NoticiaUsuario.filter( foto => foto.Titulo.includes(this.buscar));
        }
        return this.NoticiaUsuario.slice(0, this.tamanio);
      },
      ...mapState(['NoticiaUsuario','usuario'])
    },

    methods:{
      agregarnoticia() {
        this.$router.push('/AgregarNoticia');
      },
      vermas(){
        this.tamanio += 6;
      },
      positionCard(idx) {
        this.posicionActual = idx;
        $("#Noticia").modal("show");
      },
      editarnoticia() {
        this.$router.push('/EditarNoticia');
      },
      ...mapActions(['getNoticiaUsuario'])
    },

    created(){
      this.getNoticiaUsuario()
    }
  };
</script>

<style lang="scss" scoped>
  .misnoticias{
    width: 100%;
    .vermas{
      margin-bottom: 130px;
      margin-top: 30px;
    }
  }
  .container{
    margin-bottom: 1%;
    margin-top: 5px;
  }
  .buscador{
    margin-top: 40px;
    border-color: #31afb4;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
  }
  .caritam{
    font-size: 200px;
  }
  .mediom{
    color:#115471;
    text-align: center;
  }
</style>