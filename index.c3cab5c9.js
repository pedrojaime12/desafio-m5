function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire9acc;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},e.parcelRequire9acc=i),i.register("27Lyk",(function(e,t){var o,i;n(e.exports,"register",(()=>o),(n=>o=n)),n(e.exports,"resolve",(()=>i),(n=>i=n));var a={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},i=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i("27Lyk").register(JSON.parse('{"dZpbI":"index.c3cab5c9.js","dwGe3":"fondo.60c87ae2.png","h5stw":"piedra.7de8c9a2.png","hqVYS":"papel.5f334517.png","kuZ4t":"tijera.00169574.png"}'));var a;a=new URL(i("27Lyk").resolve("dwGe3"),import.meta.url).toString();const r={data:{currentGame:{userPlay:"",computerPlay:""},history:[]},getState(){return this.data},setState(n){this.data=n},whoWins(n,e){switch(n+e){case"piedratijera":case"papelpiedra":case"tijerapapel":return 1;case"piedrapapel":case"papeltijera":case"tijerapiedra":return 2;case"piedrapiedra":case"papelpapel":case"tijeratijera":return 3}},pushToHistory(n){this.getState().history(n)}};!function(){const n=r.whoWins("papel","papel");1==n&&console.log("Ganaste!"),2==n&&console.log("Perdiste"),3==n&&console.log("empataste")}();const s=[{path:/\/welcome/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n\n   .root{\n    display:flex;\n    justify-content:center; \n    margin:0;\n    padding:5px;\n    \n   }\n   .imagen{\n    position:relative;\n    width:400px;\n    height: 100vh;\n    top:-5px;\n    right:-80px;\n    left:-20px\n   }\n\n   .title{\n    margin-top: 100px;\n    text-align: center;\n    position:absolute;\n   }\n   .boton-container{\n    position:absolute;\n    bottom:210px;\n\n   }\n   .options-container{\n      position:absolute;\n      bottom: -25px;\n   }\n   ",e.innerHTML=`     \n   <img class="imagen" src=${a}>\n   <div class="title">\n     <my-text variant="title">Piedra</my-text>\n     <my-text variant="title">Papel ó</my-text>\n     <my-text variant="title">Tijeras</my-text>\n   </div>\n     <div class="boton-container">\n     <my-button class="boton-comp"> Empezar !! </my-button>\n   </div>\n   <div class="options-container">\n     <play-options></play-options>\n   </div>\n\n   `,e.className="root",e.appendChild(t),console.log(n),e.querySelector(".boton-comp")?.addEventListener("click",(e=>{n.goTo("play")})),e}},{path:/\/instructions/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n\n   .root{\n    display:flex;\n    justify-content:center; \n    margin:0;\n    padding:5px;\n    \n   }\n   .imagen{\n    position:relative;\n    width:400px;\n    height: 100vh;\n    top:-20px;\n    left:-5px\n   }\n   .text-container{\n    position:absolute;\n    margin: 100px 30px;\n   }\n   .boton-container{\n    position:absolute;\n    bottom:210px;\n\n   }\n   .options-container{\n    position:absolute;\n    bottom: -25px;\n }\n\n   ",e.innerHTML=`     \n   <img class="imagen" src=${a}>\n    <div class="text-container">\n    <my-text variant="body">\n    Presioná jugar\n    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos. </my-text>\n    </div>\n    <div class="boton-container">\n      <my-button> Jugar ! </my-button>\n    </div>\n    <div class="options-container">\n    <play-options></play-options>\n  </div>\n   `,e.className="root",e.appendChild(t),e}},{path:/\/play/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n    .root{\n        display:flex;\n        justify-content:center; \n        margin:0;\n        padding:5px;\n        \n       }\n       .imagen{\n        position:relative;\n        width:400px;\n        height: 100vh;\n        top:-20px;\n        left:-5px\n       }\n       .countdown-container{\n        position:absolute;\n        top: 30%;\n       }\n       .options-container{\n        position:absolute;\n        bottom: -15px;\n       }\n    ",e.innerHTML=`     \n    <img class="imagen" src=${a}>\n     <div class="countdown-container">\n        <count-down></count-down>\n     </div>\n     <div class="options-container">\n     <play-options variant="play" ></play-options>\n     </div>\n\n    `,e.className="root",e.appendChild(t),e}}];function c(n){function e(n){history.pushState({},"",n),t(n)}function t(t){for(const o of s)if(o.path.test(t)){const t=o.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}"/"==location.pathname?e("/welcome"):t(location.pathname)}function l(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"body";var e=this.attachShadow({mode:"open"});const t=document.createElement("div");var o=document.createElement("style");o.innerHTML="\n            .title{\n                font-family : 'Tiro Gurmukhi';\n                font-size: 90px;\n                font-weight: bold;\n                color: #009048;\n                margin: 0 auto;\n            }\n            .body{\n                font-family : 'Tiro Gurmukhi';\n                font-size: 45px;\n                text-align: center;\n                color:black;\n                font-weight: bold;\n            }\n            ",t.className=n,t.textContent=this.textContent,e.appendChild(t),e.appendChild(o)}}customElements.define("my-text",n)}var p;p=new URL(i("27Lyk").resolve("h5stw"),import.meta.url).toString();var d;d=new URL(i("27Lyk").resolve("hqVYS"),import.meta.url).toString();var m;m=new URL(i("27Lyk").resolve("kuZ4t"),import.meta.url).toString(),function(){l(),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.render()}render(){var n=this.attachShadow({mode:"open"});const e=document.createElement("div"),t=document.createElement("style"),o=this.textContent;e.innerHTML=`\n            <button class="button"> ${o} </button>\n            `,t.innerHTML="\n            .button{\n                font-family:'Tiro Gurmukhi';\n                background-color: #006CFC;\n                padding:5px;\n                Width: 320px;\n                Height: 55px;\n                border: solid 3px #001997;\n                border-radius:10px;\n                font-size:30px;\n                color:white;\n                opacity:90%;\n            }\n            .button:hover{\n                opacity:100%;\n            }\n            \n            ",n.appendChild(e),n.appendChild(t)}}),customElements.define("play-options",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"init";var e=this.attachShadow({mode:"open"});const t=document.createElement("div"),o=document.createElement("style");t.className="root",t.innerHTML=`\n            <img class="${n}" src=${p}> \n            <img class="${n}" src=${d}> \n            <img class="${n}" src=${m}> \n            `,o.innerHTML="\n            .init{\n                height: 126px;\n                width: 56px;\n                margin: 0 10px;\n            }\n            .play{\n                height:200px;\n                width:100px;\n                margin:0 10px;\n            }\n         \n            ",e.appendChild(t),e.appendChild(o)}}),customElements.define("count-down",class extends HTMLElement{constructor(){super(),this.render()}render(){var n=this.attachShadow({mode:"open"});const e=document.createElement("div"),t=document.createElement("style");let o=4;const i=setInterval((()=>{o--,0==o&&clearInterval(i),e.innerHTML=`\n                    <h2 class="number"> ${o}</h2>\n                    `}),1e3);t.innerHTML='\n            .number{\n                font-family:"Tiro Gurmukhi";\n                font-size:200px;\n                margin:0;\n            }\n            ',n.appendChild(e),n.appendChild(t)}});c(document.querySelector(".root"))}();
//# sourceMappingURL=index.c3cab5c9.js.map
