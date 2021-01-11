<template>
  <div >
      <Cabecera />
      <router-view />
      <Pies />
  </div>
</template>

<script>
  import Cabecera from "./components/Cabecera";
  import Pies from "./components/Pies";
  export default {
    name: "App",
    components: {
      Cabecera,
      Pies
    },  
  };
</script>