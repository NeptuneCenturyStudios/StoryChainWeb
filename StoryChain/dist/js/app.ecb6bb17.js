(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("span",[e._v(e._s(e.appName))])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v(e._s(e.name))]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1),a("v-main",[a("v-container",[a("router-view")],1)],1)],1)},s=[],o=a("5530"),i=a("2f62"),l={name:"App",title:"Home",components:{},data:function(){return{}},computed:Object(o["a"])({},Object(i["b"])({name:"name",appName:"appName"}))},c=l,d=a("2877"),u=a("6544"),p=a.n(u),v=a("7496"),m=a("40dc"),f=a("8336"),h=a("a523"),g=a("132d"),b=a("adda"),w=a("f6c4"),y=a("2fa4"),x=Object(d["a"])(c,n,s,!1,null,null,null),_=x.exports;p()(x,{VApp:v["a"],VAppBar:m["a"],VBtn:f["a"],VContainer:h["a"],VIcon:g["a"],VImg:b["a"],VMain:w["a"],VSpacer:y["a"]});var V=a("a65d"),k=a.n(V),C=a("7bb1"),O=(a("c789"),a("f309"));r["a"].use(O["a"]);var j=new O["a"]({theme:{dark:!1}}),P=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mx-auto text-center",staticStyle:{"max-width":"30rem"}},[e._m(0),a("div",[a("v-btn",{staticClass:"mr-3",attrs:{color:"primary",to:{name:"sign-in"}}},[e._v(" Sign In ")]),a("v-btn",{attrs:{color:"primary",to:{name:"sign-up"}}},[e._v(" Sign Up ")])],1)])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"text-h1"},[e._v("Welcome!")]),a("p",{staticClass:"text-h4"},[e._v("Sign in or sign up to start playing!")])])}],q={mounted:function(){},name:"Home"},E=q,T=Object(d["a"])(E,S,$,!1,null,"32054cfc",null),N=T.exports;p()(T,{VBtn:f["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-center"},[a("v-overlay",{attrs:{absolute:!0,value:e.loading}}),a("div",[a("p",{staticClass:"text-h4"},[e._v(" Ready to resume the fun? ")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("v-card",{attrs:{elevation:"2","max-width":"25rem",loading:e.loading}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-title",[a("p",{staticClass:"text-h6 text--secondary"},[e._v(" Sign into your account now! ")])]),a("v-card-text",[a("ValidationProvider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Email",type:"email",required:"",hint:"example@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("span",{staticClass:"red--text"},[e._v(e._s(t.errors[0]))])]}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("span",{staticClass:"red--text"},[e._v(e._s(t.errors[0]))])]}}],null,!0)}),a("v-switch",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" Remember me ")]},proxy:!0}],null,!0)}),a("router-link",{attrs:{to:{name:"forgot-password"}}},[e._v("Forgot password?")])],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:r},on:{click:e.signIn}},[e._v(" Sign In ")]),a("v-btn",{attrs:{to:{name:"home"},disabled:e.loading}},[e._v(" Cancel ")])],1)],2)]}}])}),a("p",{staticClass:"text--secondary mt-3"},[e._v(" Don't have an account? "),a("router-link",{attrs:{to:{name:"sign-up"}}},[e._v("Sign up!")])],1)],1)],1)},B=[],I=a("1da1"),M=(a("96cf"),a("bc3a")),F=a.n(M),A=a("3835"),L=(a("4fad"),a("99af"),a("a15b"),{handleError:function(e){if(e.response&&e.response.data){var t=[];if("string"===typeof e.response.data)r["a"].toasted.error("Whoops, something happened. Maybe try that again later?",{duration:2e3,iconPack:"material",icon:"lock"});else if(e.response.data.errors){for(var a=0,n=Object.entries(e.response.data.errors);a<n.length;a++){var s=Object(A["a"])(n[a],2),o=(s[0],s[1]);t=t.concat(o)}r["a"].toasted.error(t.join("<br />"),{icon:"error"})}}}}),U=a("4c93");Object(C["c"])("required",Object(o["a"])(Object(o["a"])({},U["b"]),{},{message:"{_field_} is required."})),Object(C["c"])("email",U["a"]);var H={title:"Sign In",data:function(){return{loading:!1,email:null,password:null}},methods:{signIn:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.loading=!0,t.prev=2,t.next=5,F.a.post(a.$hostName+"/api/v1/account/sign-in",{email:a.email,password:a.password});case 5:r=t.sent;try{localStorage.setItem("auth",r.data.token),a.$router.push({name:"dashboard"})}catch(n){a.$toasted.error("Hmm, we couldn't save your account access token for some reason.")}t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),L.handleError(t.t0);case 12:return t.prev=12,a.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()}}},W=H,D=a("b0af"),J=a("99d9"),z=a("a797"),G=a("8e36"),K=a("b73d"),Q=a("8654"),X=Object(d["a"])(W,R,B,!1,null,null,null),Y=X.exports;p()(X,{VBtn:f["a"],VCard:D["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VOverlay:z["a"],VProgressLinear:G["a"],VSwitch:K["a"],VTextField:Q["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-center"},[a("v-overlay",{attrs:{absolute:!0,value:e.loading}}),a("div",[a("p",{staticClass:"text-h4"},[e._v(" Ready to join the fun? ")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("v-card",{attrs:{elevation:"2","max-width":"25rem",loading:e.loading}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-title",[a("p",{staticClass:"text-h6 text--secondary"},[e._v(" Create your account now! ")])]),a("v-card-text",[a("ValidationProvider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Email",type:"email",required:"",hint:"example@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("span",{staticClass:"red--text"},[e._v(e._s(t.errors[0]))])]}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Password",type:e.showPassword?"text":"password",required:"","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",hint:"Make it secure"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("span",{staticClass:"red--text"},[e._v(e._s(t.errors[0]))])]}}],null,!0)}),a("p",[e._v(" By creating your account, you agree to the terms and privacy policy. ")])],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:r},on:{click:e.signUp}},[e._v(" Sign Up ")]),a("v-btn",{attrs:{to:{name:"home"},disabled:e.loading}},[e._v(" Cancel ")])],1)],2)]}}])})],1)],1)},ee=[];Object(C["c"])("required",Object(o["a"])(Object(o["a"])({},U["b"]),{},{message:"{_field_} is required."})),Object(C["c"])("email",U["a"]);var te={title:"Sign Up",data:function(){return{loading:!1,showPassword:!1,email:null,password:null}},methods:{signUp:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.loading=!0,t.prev=2,t.next=5,F.a.post(a.$hostName+"/api/v1/account/sign-up",{email:a.email,password:a.password});case 5:r=t.sent;try{localStorage.setItem("auth",r.data.token),a.$router.push({name:"dashboard"})}catch(n){a.$toasted.error("Hmm, we couldn't save your account access token for some reason.")}t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),L.handleError(t.t0);case 12:return t.prev=12,a.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()}}},ae=te,re=Object(d["a"])(ae,Z,ee,!1,null,null,null),ne=re.exports;p()(re,{VBtn:f["a"],VCard:D["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VOverlay:z["a"],VProgressLinear:G["a"],VTextField:Q["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-center"},[a("v-overlay",{attrs:{absolute:!0,value:e.loading}}),a("div",[a("p",{staticClass:"text-h4"},[e._v(" Forgot your password? ")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("v-card",{attrs:{elevation:"2","max-width":"25rem",loading:e.loading}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-title",[a("p",{staticClass:"text-h6 text--secondary"},[e._v(" Enter your email address and we'll send you a link to reset it. ")])]),a("v-card-text",[a("ValidationProvider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Email",type:"email",required:"",hint:"example@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("span",{staticClass:"red--text"},[e._v(e._s(t.errors[0]))])]}}],null,!0)})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:r},on:{click:e.resetPassword}},[e._v(" Reset ")]),a("v-btn",{attrs:{to:{name:"home"},disabled:e.loading}},[e._v(" Cancel ")])],1)],2)]}}])})],1)],1)},oe=[];Object(C["c"])("required",Object(o["a"])(Object(o["a"])({},U["b"]),{},{message:"{_field_} is required."})),Object(C["c"])("email",U["a"]);var ie={title:"Forgot Password",data:function(){return{loading:!1,email:null}},methods:{resetPassword:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.loading=!0,t.prev=2,t.next=5,F.a.post(a.$hostName+"/api/v1/account/forgot-password",{email:a.email});case 5:a.$toasted.success("We just sent you an email with instructions on how to reset your password.",{icon:"check"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),L.handleError(t.t0);case 11:return t.prev=11,a.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[2,8,11,14]])})))()}}},le=ie,ce=Object(d["a"])(le,se,oe,!1,null,null,null),de=ce.exports;p()(ce,{VBtn:f["a"],VCard:D["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VOverlay:z["a"],VProgressLinear:G["a"],VTextField:Q["a"]});var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-center"},[a("v-overlay",{attrs:{absolute:!0,value:e.loading}}),a("div",[a("p",{staticClass:"text-h4"},[e._v(" Change password ")]),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("v-card",{attrs:{elevation:"2","max-width":"25rem",loading:e.loading}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-card-title",[a("p",{staticClass:"text-h6 text--secondary"},[e._v(" Let's get your password fixed! ")])]),a("v-card-text",[a("ValidationProvider",{attrs:{name:"Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Password",type:e.showPassword?"text":"password",required:"","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",hint:"Make it secure"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("span",{staticClass:"red--text"},[e._v(e._s(t.errors[0]))])]}}],null,!0)})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:r},on:{click:e.changePassword}},[e._v(" Change Password ")]),a("v-btn",{attrs:{to:{name:"home"},disabled:e.loading}},[e._v(" Cancel ")])],1)],2)]}}])})],1)],1)},pe=[];Object(C["c"])("required",Object(o["a"])(Object(o["a"])({},U["b"]),{},{message:"{_field_} is required."}));var ve={title:"Change Password",data:function(){return{loading:!1,showPassword:!1,email:null,password:null}},methods:{changePassword:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.loading=!0,t.prev=2,t.next=5,F.a.post(a.$hostName+"/api/v1/account/change-password",{email:a.email,password:a.password});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](2),L.handleError(t.t0);case 10:return t.prev=10,a.loading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[2,7,10,13]])})))()}}},me=ve,fe=Object(d["a"])(me,ue,pe,!1,null,null,null),he=fe.exports;p()(fe,{VBtn:f["a"],VCard:D["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VOverlay:z["a"],VProgressLinear:G["a"],VTextField:Q["a"]});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Dashboard "),a("v-btn",{on:{click:e.update}},[e._v(" Change Name ")])],1)},be=[],we={data:function(){return{}},methods:{update:function(){this.$store.commit("updateName","Foo Bar")}}},ye=we,xe=Object(d["a"])(ye,ge,be,!1,null,null,null),_e=xe.exports;p()(xe,{VBtn:f["a"]}),r["a"].use(P["a"]);var Ve=new P["a"]({routes:[{path:"/",name:"home",component:N},{path:"/sign-in",name:"sign-in",component:Y},{path:"/sign-up",name:"sign-up",component:ne},{path:"/forgot-password",name:"forgot-password",component:de},{path:"/change-password/?:userId&:code",name:"post",component:he,props:!0},{path:"/dashboard",name:"dashboard",component:_e}]});a("b0c0");r["a"].use(i["a"]);var ke=new i["a"].Store({state:{appName:"Plot Mash",name:"Test"},mutations:{updateName:function(e,t){e.name=t}}});function Ce(e){var t=e.$options.title;if(t)return("function"===typeof t?t.call(e):t)+" - ".concat(e.$store.state.appName)}var Oe={created:function(){var e=Ce(this);e&&(document.title=e)}};r["a"].use(k.a,{duration:2e3,iconPack:"material"}),r["a"].mixin(Oe),r["a"].config.productionTip=!0,r["a"].prototype.$hostName="https://localhost:44324",r["a"].component("ValidationProvider",C["b"]),r["a"].component("ValidationObserver",C["a"]),new r["a"]({vuetify:j,router:Ve,store:ke,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.ecb6bb17.js.map