parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"l5ll":[function(require,module,exports) {
function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,a=document.getElementById("video"),o=document.querySelectorAll(".video__ball");function l(t,n,r){var a,o=e(t);try{for(o.s();!(a=o.n()).done;){var l=a.value;window.innerWidth<768?l.style.transform="translate("+(Math.random()*(2*n)-n)+"rem, "+(Math.random()*(2*r)-r)+"rem) scale("+(.2+.5*Math.random())+")":l.style.transform="translate("+(Math.random()*(2*n)-n)+"rem, "+(Math.random()*(2*r)-r)+"rem) scale("+(.4+1.1*Math.random())+")"}}catch(i){o.e(i)}finally{o.f()}}function i(e,t,n,a){l(t,n,a),r=setInterval(l,4e3,t,n,a),e.addEventListener("mouseleave",function(){s(e,t)},{once:!0})}function s(t,n){clearInterval(r),console.log("stopBalls runs and clearInterval(mbId)");var a,o=e(n);try{var l=function(){var e=a.value;e.style.transition="all 0.5s linear",window.innerWidth<425?e.style.transform="translate(0, 0) scale(0.35)":window.innerWidth<768?e.style.transform="translate(0, 0) scale(0.5)":window.innerWidth<1024?e.style.transform="translate(0, 0) scale(0.75)":e.style.transform="translate(0, 0)",setTimeout(function(){e.style.transition="all 12s linear"},16)};for(o.s();!(a=o.n()).done;)l()}catch(s){o.e(s)}finally{o.f()}t.addEventListener("mouseenter",function(){i(t,n,80,40)},{once:!0})}a.addEventListener("mouseenter",function(){i(a,o,80,40)},{once:!0});var c=document.getElementById("video2"),d=document.querySelectorAll(".video__ball_ytb");c.addEventListener("mouseenter",function(){i(c,d,80,40)},{once:!0});var u=document.querySelector(".video__btn"),m=document.querySelector(".video__btn_2");function f(t){clearInterval(r),clearInterval(v);var n,a=e(t);try{var o=function(){var e=n.value;e.style.transition="all 0.5s linear",window.innerWidth<425?e.style.transform="translate(0, 0) scale(0.35)":window.innerWidth<768?e.style.transform="translate(0, 0) scale(0.5)":window.innerWidth<1024?e.style.transform="translate(0, 0) scale(0.75)":e.style.transform="translate(0, 0)",setTimeout(function(){e.style.transition="all 12s linear"},16)};for(a.s();!(n=a.n()).done;)o()}catch(l){a.e(l)}finally{a.f()}}u.addEventListener("click",function(){f(o)}),m.addEventListener("click",function(){f(d)});var v,y=document.querySelector(".video-cnt"),h=document.querySelector(".video__btn"),_=document.querySelector(".video__mov"),w=document.querySelector(".video__clip");h.onclick=function(){_.style.display="flex",setTimeout(function(){w.play()},600)},_.onclick=function(t){if(t.target===_){w.pause(),w.classList.remove("video__clip_in"),w.classList.add("video__clip_out"),w.style.animationPlayState="running",setTimeout(function(){w.classList.remove("video__clip_out"),w.classList.add("video__clip_in"),_.style.display="none"},500);var n=document.getElementById("video"),r=document.querySelectorAll(".video__ball");function a(t,n,r){var a,o=e(t);try{for(o.s();!(a=o.n()).done;){var l=a.value;window.innerWidth<768?l.style.transform="translate("+(Math.random()*(2*n)-n)+"rem, "+(Math.random()*(2*r)-r)+"rem) scale("+(.2+.5*Math.random())+")":l.style.transform="translate("+(Math.random()*(2*n)-n)+"rem, "+(Math.random()*(2*r)-r)+"rem) scale("+(.4+1.1*Math.random())+")"}}catch(i){o.e(i)}finally{o.f()}}o=n,l=r,i=80,s=40,setTimeout(function(){a(l,i,s)},500),v=setInterval(a,4e3,l,i,s),o.addEventListener("mouseleave",function(){clearInterval(v),console.log("stopBallsAftMod runs and clearInterval(mbIdAftMod)")},{once:!0})}var o,l,i,s};
},{}]},{},["l5ll"], null)
//# sourceMappingURL=../js/moveBalls.747a49cf.js.map