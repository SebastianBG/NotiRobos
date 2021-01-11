<template>
  <div>
    <button type="button" class="btn btn-link boton-azul" @click="onclick()">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onclick() {
      // escucha las funciones exteriores
      this.$emit("ruta");
    }
  }
};
</script>

<style lang="scss" scoped>

  .boton-azul{
    display: inline-block;
    background: #115471;
    color: white;   
    font-size: 1.25em;
    margin-top: 20px;
    text-align: center;
    width: 80%;
    border-radius: 50px;
    text-decoration: none;
    border-color: white;
    border-width: 2px;
  }

  // Media
  
  @media all and (max-width: 768px) {
    .boton-azul{ 
      display: inline-block;
      font-size: 1.0em;
      width: 100%;
      //margin-left: 30px;
    }
  }

</style>