import { disconnect } from "process";

export function initCountdown (){

    customElements.define("count-down" , class extends HTMLElement{
        constructor(){
            super()
            this.render();
        }
        render(){
            
            var shadow = this.attachShadow({ mode : "open"})
            
            const div = document.createElement("div")
            div.className = "container-number"
            const style = document.createElement("style")
            
            let counter = 4;    
                const intervalId = setInterval(()=>{
                    counter --;            
                    div.innerHTML = `
                    <h2 class="number"> ${counter}</h2>
                    `;
                    if(counter == 0){
                        clearInterval(intervalId)
                        div.innerHTML = 

                        div.innerHTML = `
                        <p class="text"> Se cumplió el tiempo </p>
                        <div class="boton-container">
                        <my-button class="boton"> Volver a jugar </my-button>
                        </div>`
                    }

                }, 1000)
            
            
            style.innerHTML = `
            .number{
                font-family:"Tiro Gurmukhi";
                font-size:200px;
                margin:0;
            }
            .text{
                font-size:35px;
                text-align:center;
            }
            `;

            shadow.appendChild(div)
            shadow.appendChild(style)
            
        }
    })
} 