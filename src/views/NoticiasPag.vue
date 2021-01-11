<template>
  <div class="noticiaspag container">
    <div class="row">
      <div class="col-12 busca">
        <input class="form-control buscador" type="text" v-model="buscar" placeholder="Buscar">
      </div>
      <div class="col-12 medio" v-if="filtronoticias.length===0">
        <div >
          <br>
          <br>
          <h2>No hay noticias</h2>
          <i class="fa fa-times carita"></i>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-md-4 col-sm-12" v-for="(noti,index) in filtronoticias" :key="index" @click="positionCard(index)">
        <Tarjeta 
        :foto="noti.Imagen" 
        :title="noti.Titulo"
        :idx="posicionActual" 
        :arr="filtronoticias"/>
      </div>
    </div>
    <div class="row" v-if="filtronoticias.length>0">
      <div class="col-5 col-md-3 container vermas">
        <Boton @ruta="vermas()" v-if="(filtronoticias.length === tamanio)">Ver Más</Boton>
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
        tamanio: 6,
        buscar:'',
        posicionActual: 0,
        

      };
    },
    computed:{
      ...mapState(['Noticias']),
      
      filtronoticias(){
        if(this.buscar.length>0){
          //return this.arregloNoticias.filter( foto => foto.titulo.includes(this.buscar));
          return this.Noticias.filter( foto => foto.Titulo.includes(this.buscar));
        }
        //return this.arregloNoticias.slice(0, this.tamanio);
        return this.Noticias.slice(0, this.tamanio);
      },
      
    },
    methods:{
      vermas(){
        this.tamanio += 6;
        console.log(this.filtronoticias.length);
        console.log(this.tamanio);
      },
      positionCard(idx) {
        this.posicionActual = idx;
        $("#Noticia").modal("show");
      },
      ...mapActions(['getNoticias'])
    },
    created(){
      this.getNoticias()
    }
  };
</script>

<style lang="scss" scoped>
  .noticiaspag{
    width: 100%;
    .vermas{
      margin-bottom: 130px;
    }
  }
  .container{
    margin-bottom: 1%;
  }
  .buscador{
    margin-top: 40px;
    border-color: #31afb4;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
  }
  .carita{
    font-size: 200px;
  }
  .medio{
    color:#115471;
    text-align: center;
  }

</style>