(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4Qew":function(t,e,s){var a={"./afm.png":"r/Qb","./brivl.png":"n15z","./cameo_airfold.png":"C0Cf","./deepcodebase_overview.png":"9X+8","./fusion-block.png":"zUqe","./hongxin.jpg":"X+z2","./tvr.png":"dAWB","./tvr_illustration.png":"YfcK","./vtt.png":"pgFx"};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4Qew"},"9X+8":function(t,e,s){t.exports=s.p+"assets/img/deepcodebase_overview.f9516b36.png"},C0Cf:function(t,e,s){t.exports=s.p+"assets/img/cameo_airfold.5718b67a.png"},"X+z2":function(t,e,s){t.exports=s.p+"assets/img/hongxin.25406a49.jpg"},YfcK:function(t,e,s){t.exports=s.p+"assets/img/tvr_illustration.1bc4ab21.png"},dAWB:function(t,e,s){t.exports=s.p+"assets/img/tvr.0166b70c.png"},iyQ6:function(t,e,s){"use strict";s.r(e);s("Junv"),s("ToJy");var a={props:{href:String},methods:{jump:function(t){window.location=t}}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex-shrink-0 hover:bg-blue-700 border-blue-700 text-blue-800\n         hover:text-white text-sm border-2 px-3 rounded shadow\n        cursor-pointer transition-all duration-100 mr-2",on:{click:function(e){return t.jump(t.href)}}},[t._t("default")],2)}),[],!1,null,null,null).exports,r=s("ChFw"),o={components:{"a-btn":i,GoogleColabIcon:r.c,GitHubIcon:r.b,GoogleScholarIcon:r.d,AdobeAcrobatReaderIcon:r.a},metaInfo:function(){return{title:"Xin Hong",titleTemplate:null}},methods:{compare_pub:function(t,e){return t.year>e.year?1:t.year<e.year?-1:t.pdf>e.pdf?1:t.pdf<e.pdf?-1:0}},computed:{me:function(){return this.$page.metadata.me},publications:function(){return this.me.cluster.publications.sort(this.compare_pub).reverse()}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","//cdn.clustrmaps.com/map_v2.js?cl=374151&w=a&t=tt&d=2aJ6BDWYMWIFRD7ZCecw8HTEpJgFvXZj4gPf96mQlHM&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=6b7280"),t.setAttribute("id","clustrmaps"),document.getElementById("counter-wrap").appendChild(t)}},p=null,l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"border-b border-gray-300"},[a("div",{staticClass:"flex flex-wrap px-5 py-16 mx-auto max-w-3xl sm:flex-no-wrap"},[a("div",{staticClass:"w-40 mr-10"},[t.me.photo?a("img",{staticClass:"rounded shadow-lg",attrs:{src:s("4Qew")("./"+t.me.photo)}}):t._e()]),a("div",{},[a("p",{staticClass:"text-3xl mt-8 sm:mt-2"},[t.me.name?a("span",[t._v(t._s(t.me.name))]):t._e(),t.me.name_cn?a("span",[t._v("「"+t._s(t.me.name_cn)+"」")]):t._e()]),t.me.photo?a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-3 max-w-sm sm:max-w-md",domProps:{innerHTML:t._s(t.me.bio)}}):a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-5",domProps:{innerHTML:t._s(t.me.bio)}}),t.me.email||t.me.github||t.me.scholar||t.me.cv?a("div",{staticClass:"mt-3 text-blue-900 flex",attrs:{set:t.me_prev=!1}},[t.me.email?a("p",[a("a",{staticClass:"flex items-start",attrs:{href:"mailto:"+t.me.email,set:t.me_prev=!0}},[t._v("\n              Email\n            ")])]):t._e(),t.me_prev?a("p",{staticClass:"mx-1"},[t._v("/")]):t._e(),t.me.github?a("p",[a("a",{staticClass:"flex items-start",attrs:{href:t.me.github,set:t.me_prev=!0}},[t._v("\n              Github\n            ")])]):t._e(),t.me_prev?a("p",{staticClass:"mx-1"},[t._v("/")]):t._e(),t.me.scholar?a("p",[a("a",{staticClass:"flex items-start",attrs:{href:t.me.scholar}},[t._v("\n              Google Scholar\n            ")])]):t._e(),t.me_prev?a("p",{staticClass:"mx-1"},[t._v("/")]):t._e(),t.me.cv?a("p",[a("a",{staticClass:"flex items-start",attrs:{href:t.me.cv}},[t._v(" CV ")])]):t._e()]):t._e()])])]),a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"border-b border-gray-300"},[a("div",{staticClass:"sm:px-0 px-5 my-16 max-w-3xl mx-auto"},[a("p",{staticClass:"text-2xl mb-8 font-medium"},[t._v("Research")]),t.me.interests?a("p",{staticClass:"my-8"},[t._v("\n        "+t._s(t.me.interests)+"\n      ")]):t._e(),t._l(t.publications,(function(e){return a("div",{key:e.title,staticClass:"sm:flex py-5 sm:py-0"},[a("div",{staticClass:"\n            sm:p-5 sm:pl-0\n            pl-0\n            w-full\n            sm:w-1/4\n            flex flex-col\n            justify-center\n          "},[e.img?a("img",{attrs:{src:s("4Qew")("./"+e.img)}}):t._e()]),a("div",{staticClass:"\n            sm:p-5\n            py-2\n            sm:pr-0\n            pr-0\n            w-full\n            sm:w-3/4\n            flex flex-col\n            justify-center\n          "},[a("p",{staticClass:"font-bold"},[e.homepage||e.code||e.pdf?a("a",{attrs:{href:e.homepage||e.code||e.pdf}},[a("span",{staticClass:"link"},[t._v(t._s(e.title))])]):a("span",{},[t._v(t._s(e.title))])]),a("div",{staticClass:"text-sm"},[a("p",{},t._l(e.authors,(function(s,n){return a("span",{key:s},[s==t.$page.metadata.me.name?a("span",{staticClass:"font-bold"},[t._v(t._s(s))]):a("span",[t._v(t._s(s))]),n!=e.authors.length-1?a("span",[t._v(", ")]):t._e()])})),0),a("p",{},[a("span",{staticClass:"italic"},[e.proceeding_abbr?a("span",[t._v(t._s(e.proceeding_abbr))]):a("span",[t._v(t._s(e.proceeding))])]),a("span",[t._v(", "+t._s(e.year))]),e.honor?a("span",{staticClass:"font-bold"},[t._v(","+t._s(e.honor))]):t._e()])]),a("div",{staticClass:"flex items-center",attrs:{set:t.previous=!1}},[e.homepage?a("div",[a("a",{attrs:{href:e.homepage}},[a("span",{attrs:{set:t.previous=!0}},[t._v("Project Page")])])]):t._e(),e.code?a("div",[t.previous?a("span",{staticClass:"mx-1"},[t._v("/")]):t._e(),a("a",{attrs:{href:e.code}},[a("span",{attrs:{set:t.previous=!0}},[t._v("Code")])])]):t._e(),e.notebook?a("div",[t.previous?a("span",{staticClass:"mx-1"},[t._v("/")]):t._e(),a("a",{attrs:{href:e.notebook}},[a("span",{attrs:{set:t.previous=!0}},[t._v("Colab Demo")])])]):t._e(),e.pdf?a("div",[t.previous?a("span",{staticClass:"mx-1"},[t._v("/")]):t._e(),a("a",{attrs:{href:e.pdf}},[a("span",{attrs:{set:t.previous=!0}},[t._v("Paper")])])]):t._e()])])])}))],2),a("div",{staticClass:"sm:px-0 px-5 my-16 max-w-3xl mx-auto"},[a("p",{staticClass:"text-2xl mb-4 font-medium"},[t._v("Project")]),t._l(t.me.cluster.projects,(function(e){return a("div",{key:e.title,staticClass:"sm:flex py-5 sm:py-0"},[a("div",{staticClass:"\n            sm:p-5 sm:pl-0\n            pl-0\n            w-full\n            sm:w-1/4\n            flex flex-col\n            justify-center\n            scale-150\n          "},[e.img?a("img",{attrs:{src:e.img.startsWith("http")?e.img:s("4Qew")("./"+e.img)}}):t._e()]),a("div",{staticClass:"\n            sm:p-5\n            py-2\n            sm:pr-0\n            pr-0\n            w-full\n            sm:w-3/4\n            flex flex-col\n            justify-center\n          "},[a("p",{staticClass:"font-bold"},[e.homepage||e.code?a("a",{attrs:{href:e.homepage||e.code}},[a("span",{staticClass:"link"},[t._v(t._s(e.title))])]):a("span",{},[t._v(t._s(e.title))])]),a("p",{staticClass:"mt-2"},[t._v(t._s(e.brief))])])])}))],2),a("div",{staticClass:"sm:px-0 px-5 my-16 max-w-3xl mx-auto"},[a("p",{staticClass:"text-2xl mb-4 font-medium"},[t._v("Review Experiences")]),a("p",{staticClass:"py-5"},[t._v(t._s(t.me.review_experiences))])])]),a("div",{},[a("div",{staticClass:"px-5 py-16 max-w-3xl mx-auto flex justify-center"},[a("div",{staticClass:"w-64",attrs:{id:"counter-wrap"}})])])])}),[],!1,null,null,null);"function"==typeof p&&p(l);e.default=l.exports},n15z:function(t,e,s){t.exports=s.p+"assets/img/brivl.68921958.png"},pgFx:function(t,e,s){t.exports=s.p+"assets/img/vtt.90c0152b.png"},"r/Qb":function(t,e,s){t.exports=s.p+"assets/img/afm.c5b7fa75.png"},zUqe:function(t,e,s){t.exports=s.p+"assets/img/fusion-block.6fb11b23.png"}}]);