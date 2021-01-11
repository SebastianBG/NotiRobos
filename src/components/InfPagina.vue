<template>
    <div class="letras">
        <h1>{{titulo}}</h1>
        <p>{{texto}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            
            titulo: String,
            texto: String            
        }
    }
</script>

<style  lang="scss" scoped>
    h1{
        color: #31afb4;
    }

    p{
        color:#115471;
    }
    .letras{
        text-align: center;
    }
</style>
