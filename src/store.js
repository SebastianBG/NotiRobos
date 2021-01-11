import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import router from './router'

var fire = require("firebase/app");

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Noticias: [],
    NoticiaUsuario: [],
    Noticia: {Titulo: '', Resumen: '', id:''},
    usuario: '',
    error:'',
  },

  mutations: {
    setNoticias(state,Noticias){
      state.Noticias=Noticias
    },
    setNoticia(state, Noticia){
      state.Noticia=Noticia
    },
    eliminarNoticia(state,id){
      state.Noticias=state.Noticias.filter( doc=>{
        return doc.id != id
      })
    },
    setNoticiasUsuario(state,NoticiasU){
      state.NoticiaUsuario=NoticiasU
    },
    setNoticiaUsuario(state,Noticia){
      state.NoticiaUsuario=Noticia
    },
    setUsuario(state,usu){
      state.usuario = usu
    },
    setError(state,usu){
      state.error = usu
    }
  },

  actions: {
    getNoticias({commit}){
      const Noticias =  []
      db.collection('Noticia').get()
      .then(snapshot => {
        snapshot.forEach(doc=>{
          let Noti = doc.data();
          Noti.id=doc.id
          Noticias.push(Noti)
        })
      })

      commit('setNoticias',Noticias)
    },

    getNoticia({commit},id){
      db.collection('Noticia').doc(id).get()
      .then(doc => {
        let Notic=doc.data();
        Notic.id=doc.id
        commit('setNoticia', Notic)
      })
    },

    editarNoticia({commit},Noticia){
      db.collection('Noticia').doc(Noticia.id).update({
        Titulo: Noticia.Titulo
      })
      .then(()=>{
        router.push({name: 'fir'})
      })
    },

    agregarNoticia({commit},Titulo){
      db.collection('Noticia').add({
        Titulo: Titulo,
      })
      .then(doc=>{
        console.log(doc.id);
        router.push({name: 'fir'})
      })
    },

    eliminarNoticia({commit}, id){
      db.collection('Noticia').doc(id).delete()
      .then(()=>{
        console.log('Deleteada la tarea fue');
        commit('eliminarNoticia',id)
      })
    },

    //leer las noticias desde la base de datos grande
    getNoticiaUsuario({commit}){
      const baseusuario = fire.auth().currentUser
      const NoticiasU =  []
      db.collection(baseusuario.email).get()
      .then(snapshot => {
        snapshot.forEach(doc=>{
          //console.log(doc.id);
          //console.log(doc.data());
          let NotiU = doc.data();
          NotiU.id=doc.id
          NoticiasU.push(NotiU)
        })
      })

      commit('setNoticiasUsuario',NoticiasU)
    },

    //leer las noticias desde la base de datos personal
    getNoticiaU({commit},id){
      const baseusuario = fire.auth().currentUser
      db.collection(baseusuario.email).doc(id).get()
      .then(doc => {
        //console.log(doc.data());
        //console.log(doc.id);
        let Notic=doc.data();
        Notic.id=doc.id
        commit('setNoticiaUsuario', Notic)
      })
    },

    editarNoticiaU({commit},Noticia){
      const baseusuario = fire.auth().currentUser
      db.collection('Noticia').doc(Noticia.id).update({
        Titulo: Noticia.Titulo,
        Resumen: Noticia.Resumen
      })
      db.collection(baseusuario.email).doc(Noticia.id).update({
        Titulo: Noticia.Titulo,
        Resumen: Noticia.Resumen
      })
      .then(()=>{
        router.push({name: 'misnoticias'})
      })
    },

    eliminarNoticiaU({commit}, id){
      const baseusuario = fire.auth().currentUser
      db.collection(baseusuario.email).doc(id).delete()
      .then(()=>{
        router.push({name:'misnoticias'})
      })
    },

    agregarNoticiaU({commit},Noticia){
      const baseusuario = fire.auth().currentUser;
      db.collection('Noticia').add({
        Titulo: Noticia[0].titulo,
        Resumen: Noticia[0].resume,
        Imagen: Noticia[0].image,
      })
      db.collection(baseusuario.email).add({
        Titulo: Noticia[0].titulo,
        Resumen: Noticia[0].resume,
        Imagen: Noticia[0].image,
      })
      .then(doc=>{
        router.push({name: 'misnoticias'})
      })
    },
    
    crearUsuario({commit}, usu){
      fire.auth().createUserWithEmailAndPassword(usu.usuario,usu.pass)
      .then(res=>{
        //console.log(res.user.email);
        //console.log(res.user.uid);
        commit('setUsuario',{usuario:res.user.email, uid:res.user.uid})

        //crear colección
        db.collection(res.user.email).add({
          Imagen:'',
          Resumen:'',
          Titulo: ''
        })
        .then(() => {
          router.push({name: 'home'})
        })
      })
      .catch(err=>{
        //console.log(err.message);
        commit('setError',err.message)
      })
    },

    IngresarUsuario({commit}, usu){
      fire.auth().signInWithEmailAndPassword(usu.usuario,usu.pass)
      .then(res=>{
        //console.log(res);
        commit('setUsuario',{usuario:res.user.email, uid:res.user.uid})
        router.push({name: 'home'})
      })
      .catch(err=>{
        //console.log(err);
        commit('setError',err.message)
      })
    },

    DetectarUsuario({commit}, usu){
      if(usu != null){
        commit('setUsuario', {usuario:usu.email, uid:usu.uid})
      }else{
        commit('setUsuario', null)
      }
      
    },

    SacarUsuario({commit}){  
      fire.auth().signOut()
      commit('setUsuario', null)
      router.push({name: 'home'})      
    },
  },

  getters:{
    existeUsuario(state){
      if(state.usuario === null || state.usuario === '' || state.usuario === undefined){
        return false
      }else{
        return true
      }
    }
  },

})
