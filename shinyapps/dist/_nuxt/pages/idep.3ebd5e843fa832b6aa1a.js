webpackJsonp([6],{"1HGy":function(t,e,i){"use strict";function o(t){i("zNhJ")}var n=i("3U7Q"),r=i("VU/8"),a=o,s=r(null,n.a,!1,a,null,null);e.a=s.exports},"3U7Q":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"VueToNuxtLogo"},[i("div",{staticClass:"Triangle Triangle--two"}),i("div",{staticClass:"Triangle Triangle--one"}),i("div",{staticClass:"Triangle Triangle--three"}),i("div",{staticClass:"Triangle Triangle--four"})])}],r={render:o,staticRenderFns:n};e.a=r},FCmb:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear forwards 3.5s;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear forwards 3s;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},I7dF:function(t,e,i){var o=i("Ivja");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("490da095",o,!0)},Ivja:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},P4a7:function(t,e,i){"use strict";var o=i("1HGy"),n=i("usoK");e.a={components:{Logo:o.a},data:function(){return{ideps:[],message:""}},mounted:function(){var t=this;n.a.ref("usersShiny").once("value").then(function(e){t.ideps=e.val(),e.forEach(function(e){var i=e.val();void 0==i.connections?(console.log(i.id,"free"),t.message=i.id+" is ideal. After 3 seconds, you will be redirected ",setInterval(function(){window.location.href="http://bioinformatics.sdstate.edu/"+i.id},3e3)):console.log(i.id,length(i.connections))})})}}},TdnR:function(t,e,i){"use strict";function o(t){i("I7dF")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("P4a7"),r=i("X+AL"),a=i("VU/8"),s=o,l=a(n.a,r.a,!1,s,null,null);e.default=l.exports},"X+AL":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("div",[i("logo"),i("h1",{staticClass:"title"},[t._v("\n      idep-loader\n    ")]),i("h2",{staticClass:"subtitle"},[t._v("\n      Welcome to iDep sss\n    ")]),i("h2",{staticClass:"subtitle"},[t._v("\n      You will be redirected to ideal iDep application. \n      "+t._s(t.message)+"\n    ")]),i("ul",{staticClass:"list"},t._l(t.ideps,function(e){return i("li",[i("div",{staticClass:"f4"},[t._v(t._s(e.id))]),t._l(e.connections,function(e,o){return i("div",[t._v(t._s(o))])})],2)}))],1)])},n=[],r={render:o,staticRenderFns:n};e.a=r},usoK:function(t,e,i){"use strict";var o=i("Sazm"),n=i.n(o),r={apiKey:"AIzaSyBO4CCJzL7U9pFSEv-9ETqVt5dzMNKiwk4",authDomain:"bcloud.firebaseapp.com",databaseURL:"https://bcloud.firebaseio.com",projectId:"firebase-bcloud",storageBucket:"firebase-bcloud.appspot.com",messagingSenderId:"172712893865"},a=n.a.initializeApp(r);e.a=a.database()},zNhJ:function(t,e,i){var o=i("FCmb");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("ecf45a0c",o,!0)}});
//# sourceMappingURL=idep.3ebd5e843fa832b6aa1a.js.map