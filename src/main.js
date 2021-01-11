import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var fire = require("firebase/app");

Vue.config.productionTip = false

fire.auth().onAuthStateChanged((user)=>{
  console.log(user);

  if(user){
    store.dispatch('DetectarUsuario',{email: user.email, uid: user.uid})
  }
  else{
    store.dispatch('DetectarUsuario', null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


