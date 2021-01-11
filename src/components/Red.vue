<template>  
    <div> 
        <div v-if="reds === 1">
        <i class="fa fa-facebook-square fa-3x "></i>
        </div>
        <div v-else-if="reds === 2">
            <i class="fa fa-twitter-square fa-3x "></i>
        </div>   
        <div v-else-if="reds === 3">
            <i class="fa fa-envelope  fa-3x"></i>
        </div>  
    </div>  
</template>

<script>
    export default {
        data(){
            return{
                reds:0
            };
        },
        props:{
            cond: Number
        },
        mounted(){
            if(this.cond){
                this.reds=this.cond;
            }
        }
    }
</script>

<style lang="scss" scoped>

 i{
    color: white;
 }
  
</style>