<template>
  <div>
    <button type="button" class="btn btn-link boton" @click="onclick()">
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
  },
};
</script>

<style lang="scss" scoped>

  .boton{
    display: inline-block;
    background: #31afb4;
    color: white;   
    font-size: 1.25em;
    margin-top: 20px;
    /*margin-bottom: 130px;*/
    text-align: center;
    width: 100%;
    border-radius: 50px;
    border-radius: 50px;
    text-decoration: none;
  }

</style>
