<template>
    <div>
        <div class="footer">
            <div class="row justify-content-between">  
                <div class="col-md-3 col-6 desarrolladores">
                    <h4>Desarrollado por: MMEDIOS</h4>
                </div>
                <div class="col-md-6 col-6 contacto">
                    <h4>Contactanos: <br> u1201792@unimilitar.edu.co <br> u1201794@unimilitar.edu.co <br> u1201609@unimilitar.edu.co</h4> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Red from "./Red";
    import Logo from "./Logo";
    export default {
    name: "App",
    components: {
        Red,
        Logo
    },
};
</script>

<style lang="scss"  scoped>
    .footer{
        background-color: #115471;
        padding: 5px;
        margin-left: 0;
        margin-right: 0;
        margin-top: 150px;
        position:fixed;
        bottom:0px;
        width:100%;
    }
    .desarrolladores{
        color: white;
    }
    .face{
        padding-left: 50px;
    }
    .carta{
        padding-left: 20px;
    }
    .logo{
        width: auto; 
    }
</style>