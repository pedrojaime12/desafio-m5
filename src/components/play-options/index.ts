const piedra = require("url:../../images/piedra.png");
const papel = require("url:../../images/papel.png");
const tijera = require("url:../../images/tijera.png");

/* const papel = require("url:../../images/fondo.png");
const tijera = require("url:../../images/fondo.png");
 */
export function initPlayOp (){

    customElements.define("play-options" , class extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant") || "init"
            var shadow = this.attachShadow({ mode : "open"})
            
            const div = document.createElement("div")
            const style = document.createElement("style")
            div.className = "root"
            div.innerHTML = `
            <img class="${variant}" src=${piedra}> 
            <img class="${variant}" src=${papel}> 
            <img class="${variant}" src=${tijera}> 
            `;
            
            style.innerHTML = `
            .init{
                height: 126px;
                width: 56px;
                margin: 0 10px;
            }
            .play{
                height:200px;
                width:100px;
                margin:0 10px;
            }
         
            `;
            shadow.appendChild(div)
            shadow.appendChild(style)

        }
    })
}