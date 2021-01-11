import Vue from 'vue'
import Router from 'vue-router'

var fire = require("firebase/app");

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/noticiaspag',
      name: 'noticiaspag',
      component: () => import(/* webpackChunkName: "noticias pag" */ './views/NoticiasPag.vue')
    },
    {
      path: '/registrarse',
      name: 'registrarse',
      component: () => import(/* webpackChunkName: "registrarse" */ './views/Registrarse.vue')
    },
    {
      path: '/misnoticias',
      name: 'misnoticias',
      component: () => import(/* webpackChunkName: "mis noticias" */ './views/MisNoticias.vue'),
    },
    {
      path: '/iniciar',
      name: 'iniciar',
      component: () => import(/* webpackChunkName: "iniciar" */ './views/Iniciar.vue')
    },
    {
      path: '/editarnoticia/:id',
      name: 'editarnoticia',
      component: () => import(/* webpackChunkName: "editar noticia" */ './views/EditarNoticia.vue')
    },
    {
      path: '/agregarnoticia',
      name: 'agregarnoticia',
      component: () => import(/* webpackChunkName: "agregar noticia" */ './views/AgregarNoticia.vue')
    },
    {
      path: '/fir',
      name: 'fir',
      component: () => import(/* webpackChunkName: "agregar noticia" */ './views/fir.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "agregar noticia" */ './views/Auth.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import(/* webpackChunkName: "agregar noticia" */ './views/Editar.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "agregar noticia" */ './views/Add.vue')
    },
  ]
})

export default router;
