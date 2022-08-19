const piedra = require("url:../../images/piedra.png");
const papel = require("url:../../images/papel.png");
const tijera = require("url:../../images/tijera.png");



export function initPlayOp (){
    class Plays extends HTMLElement{
        shadow: ShadowRoot;
        variants : string[] = ["piedra", "papel", "tijera"]
        
        
        constructor(){
            
            super();
            this.shadow = this.attachShadow({ mode : "open"})
               
            const type = this.getAttribute("type") || "init"
            const variant = this.getAttribute("variant") || "piedra";
            
        const style = document.createElement("style")
        style.innerHTML = `
        .init{
            height: 126px;
            width: 56px;
            margin: 0 10px;
            hover: click;
        }
        .play{
            height:200px;
            width:100px;
            margin:0 10px;
            hover: click;
        }
        
        `;
        this.shadow.appendChild(style)
        const div = document.createElement("div")
        this.shadow.appendChild(div)
        
        
        
        
        if(variant == "piedra"){   
            div.innerHTML = `
            <img id="piedra" class="${type}" src=${piedra}> 
            `
            }
            if(variant == "papel"){
                div.innerHTML = `
            <img id="papel" class="${type}" src=${papel}> 
            `
            }
            if(variant == "tijera"){
                div.innerHTML = `
            <img id="tijera" class="${type}" src=${tijera}> 
            `
            }
        };
    }
    customElements.define("play-options" , Plays)
}
