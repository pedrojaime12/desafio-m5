import { state } from "../../state";
const win = require("url:../../images/win.png");
const lose = require("url:../../images/lose.png");

export function initResultComp (){
    //const lastState = state.getState()
    
    class Result extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            
             
            const variant = this.getAttribute("variant") || ""
            var shadow = this.attachShadow({ mode : "open"})
            
            const div = document.createElement("div")
            var style = document.createElement("style")

            const divWin = document.createElement("div")
            divWin.innerHTML = `
            <div class="win-screen">
            <img class="win" src="${win}">
            </div>
                
                `
                const divLose = document.createElement("div")
                divLose.innerHTML = `
                <div class="lose-screen">
                 <img class="lose" src="${lose}">
                </div>
                `  
                const divDraw = document.createElement("div")
                divDraw.innerHTML = `
                <div class="draw-screen">
                 <h4 class="draw-title"> EMPATE </h4>
                </div>
               `  

               
            style.innerHTML = `
            .win-screen{
                height:45vh;
                width:100%;
                background-color:#d4d64a;
            }
            .lose-screen{             
                height:45vh;
                width:100%;
                background-color:#894949;
            }
            .draw-screen{
                height:45vh;
                width:100%;
                background-color:lightBlue;
            }
            .draw-title{
                font-size:60px;
                font-family:'Tiro Gurmukhi';
                margin: 10px;
            }
            .win{
                width:255px;
                height:255px;
                
        }   
            .lose{
                width:255px;
                height:255px;
            }
            `;

              
            if (variant == "win"){
                div.appendChild(divWin)
            } if (variant == "lose"){
                div.appendChild(divLose)
            } if (variant == "draw"){
                div.appendChild(divDraw)
            }

            shadow.appendChild(style)
            shadow.appendChild(div)
        }
    }
    customElements.define("result-game" , Result)
}