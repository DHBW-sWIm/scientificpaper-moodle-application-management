(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0995b4e6"],{"03aa":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("Manager für angelegte wissenschaftliche Betreuer")]),s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("Wissenschaftliche Betreuer können hier verwaltet werden. Hinweis: Ziel ist die Verwendung normaler Moodle Accounts.")]),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Suche",type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._m(0)]),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(1),s("tbody",t._l(t.filteredItems,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.firstname))]),s("td",[t._v(t._s(e.lastname))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(t.formatGender(e.gender)))]),s("td",[t._v(t._s(new Date(1e3*parseInt(e.birthdate)).toLocaleDateString()))]),s("td",[t._v(t._s(e.languages))]),s("td",[t._v(t._s(e.address))]),s("td",[t._v(t._s(e.city))]),s("td",[t._v(t._s(e.postalcode))]),s("td",[t._v(t._s(e.phone))]),s("td",[t._v(t._s(e.email))]),s("td",[t._v(t._s(e.iban))]),s("td",[t._v(t._s(e.specialisation))]),s("td",[t._v(t._s(e.topictype))]),s("td",[t._v(t._s(e.supportperiod))]),s("td",[t._v(t._s(e.bachelor))]),s("td",[t._v(t._s(parseInt(e.peryear)+1))]),s("td",[t._v(t._s(parseInt(e.atthesametime)+1))]),s("td",[t._v(t._s(new Date(1e3*parseInt(e.timecreated)).toLocaleDateString()))]),s("td",[t._v(t._s(new Date(1e3*parseInt(e.timemodified)).toLocaleDateString()))])])})),0)])]),s("div",{ref:"modalStudents",staticClass:"modal fade",attrs:{id:"modalStudents",tabindex:"-1",role:"dialog","aria-labelledby":"modalStudents","aria-hidden":"true"}},[t._m(2)]),s("Infotoast",{ref:"infotoastref",attrs:{message:t.toastmessage}}),s("Docusign",{ref:"docusigner"})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group col-4 d-flex justify-content-end"},[s("button",{staticClass:"btn btn-primary"},[t._v("Neuer Supervisor")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Supervisor ID")]),s("th",{attrs:{scope:"col"}},[t._v("Vorname")]),s("th",{attrs:{scope:"col"}},[t._v("Nachname")]),s("th",{attrs:{scope:"col"}},[t._v("Titel")]),s("th",{attrs:{scope:"col"}},[t._v("Geschlecht")]),s("th",{attrs:{scope:"col"}},[t._v("Geburtstag")]),s("th",{attrs:{scope:"col"}},[t._v("Sprachen")]),s("th",{attrs:{scope:"col"}},[t._v("Adresse")]),s("th",{attrs:{scope:"col"}},[t._v("Stadt")]),s("th",{attrs:{scope:"col"}},[t._v("Postleitzahl")]),s("th",{attrs:{scope:"col"}},[t._v("Telefonnummer")]),s("th",{attrs:{scope:"col"}},[t._v("E-Mail")]),s("th",{attrs:{scope:"col"}},[t._v("IBAN")]),s("th",{attrs:{scope:"col"}},[t._v("Spezialisierung")]),s("th",{attrs:{scope:"col"}},[t._v("Topictyp")]),s("th",{attrs:{scope:"col"}},[t._v("Verfügbare Perioden")]),s("th",{attrs:{scope:"col"}},[t._v("Bachelorarbeit")]),s("th",{attrs:{scope:"col"}},[t._v("Pro Jahr")]),s("th",{attrs:{scope:"col"}},[t._v("Zur gleichen Zeit")]),s("th",{attrs:{scope:"col"}},[t._v("Angelegt")]),s("th",{attrs:{scope:"col"}},[t._v("Geändert")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Modal")])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"container"},[t._v("Modal")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Änderungen sichern")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Schließen")])])])])}],o=(s("4de4"),s("c975"),s("ac1f"),s("841c"),s("bc3a")),n=s.n(o),i=s("5bf1"),c=s("19a0"),l={name:"About",components:{Infotoast:i["a"],Docusign:c["a"]},computed:{filteredItems:function(){var t=this;return this.supervisors.filter((function(e){return e.firstname.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.lastname.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.address.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.city.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.phone.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.email.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.iban.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.specialisation.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.topictype.toLowerCase().indexOf(t.search.toLowerCase())>-1}))}},data:function(){return{search:"",showModal:!1,supervisors:[],toastmessage:""}},props:{token:{type:String,default:""}},beforeCreate:function(){},mounted:function(){this.getSupervisors()},created:function(){},methods:{formatGender:function(t){var e="";switch(t){case"0":e="männlich";break;case"1":e="weiblich";break;case"2":e="divers";break;default:e="ungültig";break}return e},getSupervisors:function(){var t=this;this.$emit("loading","10%",!1),this.supervisors=[];var e={headers:{"Content-Type":"application/json;charset=UTF-8"}};n.a.get("https://scientific-paper.swimdhbw.de//webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"local_spsupman_get_supervisors",moodlewsrestformat:"json"}},e).then((function(e){e.data.exception?(t.$emit("loading","100%",!0),t.$emit("ajaxerror")):(t.supervisors=e.data,t.$emit("loading","100%",!0))})).catch((function(e){console.log(e),t.$emit("loading","100%",!0),t.$emit("ajaxerror")}))}}},d=l,u=s("2877"),f=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=f.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"19a0":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},r=[],o={name:"Docusign",props:{},data:function(){return{toastmessageDocu:"leer"}},components:{},methods:{signApi:function(t){""!=t&&window.open(t,"_blank")}}},n=o,i=s("2877"),c=Object(i["a"])(n,a,r,!1,null,null,null);e["a"]=c.exports},"1dde":function(t,e,s){var a=s("d039"),r=s("b622"),o=s("2d00"),n=r("species");t.exports=function(t){return o>=51||!a((function(){var e=[],s=e.constructor={};return s[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,s){"use strict";var a=s("23e7"),r=s("b727").filter,o=s("1dde"),n=s("ae40"),i=o("filter"),c=n("filter");a({target:"Array",proto:!0,forced:!i||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"5bf1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"absolute",bottom:"50px",right:"50px"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[s("div",{staticClass:"toast",attrs:{id:"infotoast","data-autohide":"true","data-delay":"5000"}},[t._m(0),s("div",{staticClass:"toast-body"},[t._v(t._s(t.message))])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toast-header"},[s("strong",{staticClass:"mr-auto"},[t._v("Hinweis")]),s("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})])}],o=s("1157"),n=s.n(o),i={name:"Toast",props:{message:String},data:function(){return{}},methods:{open:function(){n()("#infotoast").toast("show")}}},c=i,l=s("2877"),d=Object(l["a"])(c,a,r,!1,null,null,null);e["a"]=d.exports},"65f0":function(t,e,s){var a=s("861d"),r=s("e8b5"),o=s("b622"),n=o("species");t.exports=function(t,e){var s;return r(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?a(s)&&(s=s[n],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},"841c":function(t,e,s){"use strict";var a=s("d784"),r=s("825a"),o=s("1d80"),n=s("129f"),i=s("14c3");a("search",1,(function(t,e,s){return[function(e){var s=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s):new RegExp(e)[t](String(s))},function(t){var a=s(e,t,this);if(a.done)return a.value;var o=r(t),c=String(this),l=o.lastIndex;n(l,0)||(o.lastIndex=0);var d=i(o,c);return n(o.lastIndex,l)||(o.lastIndex=l),null===d?-1:d.index}]}))},a640:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&a((function(){s.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,s){var a=s("83ab"),r=s("d039"),o=s("5135"),n=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(o(i,t))return i[t];e||(e={});var s=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,d=o(e,0)?e[0]:c,u=o(e,1)?e[1]:void 0;return i[t]=!!s&&!r((function(){if(l&&!a)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:c}):t[1]=1,s.call(t,d,u)}))}},b727:function(t,e,s){var a=s("0366"),r=s("44ad"),o=s("7b0b"),n=s("50c4"),i=s("65f0"),c=[].push,l=function(t){var e=1==t,s=2==t,l=3==t,d=4==t,u=6==t,f=5==t||u;return function(v,p,h,_){for(var m,b,g=o(v),w=r(g),C=a(p,h,3),x=n(w.length),y=0,S=_||i,O=e?S(v,x):s?S(v,0):void 0;x>y;y++)if((f||y in w)&&(m=w[y],b=C(m,y,g),t))if(e)O[y]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return y;case 2:c.call(O,m)}else if(d)return!1;return u?-1:l||d?d:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c975:function(t,e,s){"use strict";var a=s("23e7"),r=s("4d64").indexOf,o=s("a640"),n=s("ae40"),i=[].indexOf,c=!!i&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),d=n("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?i.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,s){var a=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-0995b4e6.aac71fe4.js.map