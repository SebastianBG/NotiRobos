(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agregar noticia"],{"12d7":function(t,e,o){},"1a24":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Desputo el que lo lea")]),t._v("\n    "+t._s(t.id)+" - "+t._s(t.Noticia)+"\n    "),o("form",{on:{submit:function(e){return e.preventDefault(),t.editarNoticia(t.Noticia)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.Noticia.Titulo,expression:"Noticia.Titulo"}],attrs:{type:"text"},domProps:{value:t.Noticia.Titulo},on:{input:function(e){e.target.composing||t.$set(t.Noticia,"Titulo",e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Editar")])])])},i=[],s=o("cebc"),n=o("2f62"),r={name:"Editar",data:function(){return{id:this.$route.params.id}},methods:Object(s["a"])({},Object(n["b"])(["getNoticia","editarNoticia"])),created:function(){this.getNoticia(this.id)},computed:Object(s["a"])({},Object(n["d"])(["Noticia"]))},c=r,u=o("2877"),l=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports},"2fef":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container medio"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("form",[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario,expression:"usuario"}],staticClass:"form-control textos",attrs:{type:"text",placeholder:"Nombre:"},domProps:{value:t.usuario},on:{input:function(e){e.target.composing||(t.usuario=e.target.value)}}}),o("br"),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pass1,expression:"pass1"}],staticClass:"form-control textos",attrs:{type:"password",placeholder:"Contraseña:"},domProps:{value:t.pass1},on:{input:function(e){e.target.composing||(t.pass1=e.target.value)}}}),o("br"),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pass2,expression:"pass2"}],staticClass:"form-control textos",attrs:{type:"password",placeholder:"Conf. Contraseña:"},domProps:{value:t.pass2},on:{input:function(e){e.target.composing||(t.pass2=e.target.value)}}})])]),o("p",[t._v(t._s(t.error))])])]),o("div",{staticClass:"row justify-content-between botones"},[o("div",{staticClass:"col-12 col-md-5"},[o("Boton",{attrs:{disabled:!t.desactivar},on:{ruta:function(e){return t.crearUsuario({usuario:t.usuario,pass:t.pass1})}}},[t._v("Guardar")])],1),o("div",{staticClass:"col-12 col-md-5 formularios"},[o("Boton",{on:{ruta:function(e){return t.inicio()}}},[t._v("Cancelar")])],1)])])},i=[],s=o("cebc"),n=o("cdd2"),r=o("2f62"),c={components:{Boton:n["a"]},data:function(){return{usuario:"",pass1:"",pass2:""}},methods:Object(s["a"])({inicio:function(){this.$router.push("/")}},Object(r["b"])(["crearUsuario"])),computed:Object(s["a"])({},Object(r["d"])(["error"]),{desactivar:function(){return this.pass1===this.pass2&&""!=this.pass1}})},u=c,l=(o("7c2d"),o("2877")),d=Object(l["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},"700a":function(t,e,o){},7132:function(t,e,o){},7939:function(t,e,o){"use strict";var a=o("7132"),i=o.n(a);i.a},"7a73":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"registrarse"},[o("FormAgregar")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container medio"},[t._m(0),o("div",{staticClass:"row justify-content-between botones "},[o("div",{staticClass:"col-12 col-md-5 "},[o("Boton",{on:{ruta:function(e){return t.Datos()}}},[t._v("Guardar")])],1),o("div",{staticClass:"col-12 col-md-5 formularios"},[o("Boton",{on:{ruta:function(e){return t.misn()}}},[t._v("Cancelar")])],1)])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("form",[o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control textos",attrs:{type:"text",placeholder:"Titulo:",id:"title",required:""}}),o("br"),o("br"),o("input",{staticClass:"form-control textos",attrs:{type:"text",placeholder:"Detalles:",id:"resum"}}),o("br"),o("br"),o("label",{staticClass:"textos"},[t._v("Arma/Tipo:")]),o("select",{staticClass:"form-control",attrs:{id:"opc"}},[o("option",[t._v("Escoja una opción:")]),o("option",[t._v("Cuchillo")]),o("option",[t._v("Pistola")]),o("option",[t._v("Celular")]),o("option",[t._v("Cosquilleo")]),o("option",[t._v("De vehículo")]),o("option",[t._v("Otros")])])])])])])}],r=o("cebc"),c=o("cdd2"),u=o("2f62"),l={components:{Boton:c["a"]},methods:Object(r["a"])({misn:function(){this.$router.push("/MisNoticias")}},Object(u["b"])(["agregarNoticiaU"]),{Datos:function(){var t,e=document.getElementById("title").value,o=document.getElementById("resum").value,a=document.getElementById("opc").value;"Escoja una opción:"===a||"Otros"===a?t="https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/ladron.png?alt=media&token=95b09a55-db18-4957-aec5-8c203539e809":"Cuchillo"===a?t="https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/cuchillo.png?alt=media&token=e0082903-0ce6-4de2-813d-33110105af2c":"Pistola"===a?t="https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/pistola.png?alt=media&token=c584049a-1cd9-4a5e-93d4-62a700e6a75a":"Cosquilleo"===a?t="https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/ladron.png?alt=media&token=95b09a55-db18-4957-aec5-8c203539e809":"De vehículo"===a?t="https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/carro.png?alt=media&token=b06e09d7-36b7-4a74-9351-188982c2add4":"Celular"===a&&(t="https://firebasestorage.googleapis.com/v0/b/notirobos.appspot.com/o/celular.png?alt=media&token=47a2b564-0525-49d6-9362-9c4c72ef3d07");var i=[{titulo:e,resume:o,image:t}];this.agregarNoticiaU(i)}})},d=l,p=(o("f32e"),o("2877")),m=Object(p["a"])(d,s,n,!1,null,null,null),v=m.exports,f={components:{FormAgregar:v}},b=f,g=Object(p["a"])(b,a,i,!1,null,"445b1eab",null);e["default"]=g.exports},"7c2d":function(t,e,o){"use strict";var a=o("12d7"),i=o.n(a);i.a},"7e55":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Agrgar")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.agregarNoticia(t.Titulo)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.Titulo,expression:"Titulo"}],attrs:{type:"text"},domProps:{value:t.Titulo},on:{input:function(e){e.target.composing||(t.Titulo=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Resumen,expression:"Resumen"}],attrs:{type:"text"},domProps:{value:t.Resumen},on:{input:function(e){e.target.composing||(t.Resumen=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Add")])]),t._v("\n    "+t._s(t.Titulo)+"\n")])},i=[],s=o("cebc"),n=o("2f62"),r={name:"Add",data:function(){return{Titulo:"",Resumen:""}},methods:Object(s["a"])({},Object(n["b"])(["agregarNoticia"]))},c=r,u=o("2877"),l=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports},cdd2:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"btn btn-link boton",attrs:{type:"button"},on:{click:function(e){return t.onclick()}}},[t._t("default")],2)])},i=[],s={methods:{onclick:function(){this.$emit("ruta")}}},n=s,r=(o("7939"),o("2877")),c=Object(r["a"])(n,a,i,!1,null,"bb1ce0fe",null);e["a"]=c.exports},e345:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("router-link",{attrs:{to:{name:"add"}}},[o("button",[t._v("Add")])]),o("ul",t._l(t.Noticias,function(e){return o("li",{key:e.id},[t._v("\n            "+t._s(e.id)+"-"+t._s(e.Titulo)+" - "+t._s(e.Resumen)+"\n            "),o("router-link",{attrs:{to:{name:"edit",params:{id:e.id}}}},[o("button",[t._v("Editar")])]),o("button",{on:{click:function(o){return t.eliminarNoticia(e.id)}}},[t._v("Delete")])],1)}),0)],1)},i=[],s=o("cebc"),n=o("2f62"),r={name:"fir",methods:Object(s["a"])({},Object(n["b"])(["getNoticias","eliminarNoticia"])),created:function(){this.getNoticias()},computed:Object(s["a"])({},Object(n["d"])(["Noticias"]))},c=r,u=o("2877"),l=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=l.exports},f32e:function(t,e,o){"use strict";var a=o("700a"),i=o.n(a);i.a}}]);
//# sourceMappingURL=agregar noticia.d3471230.js.map