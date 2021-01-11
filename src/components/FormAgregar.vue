<template>
    <div class="container medio">
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control textos" placeholder="Titulo:" id="title" required>
                        <br>
                        <br>
                        <input type="text" class="form-control textos" placeholder="Detalles:" id="resum">
                        <br>
                        <br>
                        <label class="textos">Arma/Tipo:</label>
                        <select class="form-control" id="opc">
                            <option>Escoja una opción:</option>
                            <option>Cuchillo</option>
                            <option>Pistola</option>
                            <option>Celular</option>
                            <option>Cosquilleo</option>
                            <option>De vehículo</option>
                            <option>Otros</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-between botones ">
            <div class="col-12 col-md-5 ">
                <Boton @ruta="Datos()">Guardar</Boton>
            </div>
            <div class="col-12 col-md-5 formularios">
                <Boton @ruta="misn()">Cancelar</Boton>
            </div>
        </div>
    </div>
</template>

<script>
    import Boton from "@/components/Boton";
    import {mapActions} from 'vuex'
    export default {
        components: {
            Boton
        },
        methods: {
            misn(){
                this.$router.push('/MisNoticias');
            },

            ...mapActions(['agregarNoticiaU']),

            Datos(){
                let tle=document.getElementById("title").value;
                let rsm=document.getElementById("resum").value;
                let opn=document.getElementById("opc").value;
                let img;
                if(opn==='Escoja una opción:' || opn==='Otros' ){
                    img='https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/ladron.png?alt=media&token=95b09a55-db18-4957-aec5-8c203539e809';
                }
                else if(opn==='Cuchillo'){
                    img='https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/cuchillo.png?alt=media&token=e0082903-0ce6-4de2-813d-33110105af2c';
                }
                else if(opn==='Pistola'){
                    img='https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/pistola.png?alt=media&token=c584049a-1cd9-4a5e-93d4-62a700e6a75a';
                }
                else if(opn==='Cosquilleo'){
                    img='https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/ladron.png?alt=media&token=95b09a55-db18-4957-aec5-8c203539e809';
                }
                else if(opn==='De vehículo'){
                    img='https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/carro.png?alt=media&token=b06e09d7-36b7-4a74-9351-188982c2add4';
                }
                else if(opn==='Celular'){
                    img='https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/celular.png?alt=media&token=47a2b564-0525-49d6-9362-9c4c72ef3d07';
                }

                let Noticianueva=[{titulo:tle,resume:rsm,image:img}];
                
                this.agregarNoticiaU(Noticianueva);
            },

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
