parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.body;function e(e){n.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="success">\n      '.concat(e,"\n    </div>\n  "))}function t(e){n.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="warning">\n      '.concat(e,"\n    </div>\n  "))}var o=new Promise(function(e,t){n.addEventListener("mousedown",function(){e("First promise was resolved")}),setTimeout(function(){t(new Error("First promise was rejected"))},3e3)}),i=new Promise(function(e){n.addEventListener("mousedown",function(n){0!==n.button&&2!==n.button||e("Second promise was resolved")})}),s=new Promise(function(e,t){n.addEventListener("mousedown",function(t){0===t.button&&n.addEventListener("mousedown",function(n){2===n.button&&e("Third promise was resolved")}),2===t.button&&n.addEventListener("mousedown",function(n){0===n.button&&e("Third promise was resolved")})})});o.then(e).catch(t),i.then(e).then(e),s.then(e);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a2258ff2.js.map