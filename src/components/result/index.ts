const win = require("url:../../images/win.png");
const lose = require("url:../../images/lose.png");

export function initResultComp (){
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
            <div class="score-container">
                <h4 class="score-title" > Score </h4>
                <div>
                <h5 class="score"> Vos :</h5>
                <h5 class="score"> Máquina :</h5>
                </div>
                </div>
                </div>
                
                `
              const divLose = document.createElement("div")
              divLose.innerHTML = `
              <div class="lose-screen">
              <img class="lose" src="${lose}">
                <div class="score-container">
                  <h4 class="score-title" > Score </h4>
                  <div>
                    <h5 class="score"> Vos :</h5>
                    <h5 class="score"> Máquina :</h5>
                  </div>
                </div>
              </div>
              `  
              const divDraw = document.createElement("div")
              divDraw.innerHTML = `
              <div class="draw-screen">
              <h4 class="draw-title"> EMPATE </h4>
               <div class="score-container">
                <h4 class="score-title" > Score </h4>
                <div>
                 <h5 class="score"> Vos :</h5>
                 <h5 class="score"> Máquina :</h5>
                </div>
               </div>
              </div>
              `  
            
            style.innerHTML = `
            .win-screen{
                padding: 25px 30px; 
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                height:85vh;
                background-color:#d4d64a;
            }
            .lose-screen{
                padding: 25px 30px; 
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                height:85vh;
                background-color:#894949;
            }
            .draw-screen{
                padding: 25px 30px; 
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                height:85vh;
                background-color:lightBlue;
            }
            .draw-title{
                font-size:60px;
                font-family:'Tiro Gurmukhi';
                margin: 10px;
            }
            .score-container{
                width:260px;
                height:217px;
                background-color:white;
                border: black solid 10px;
            }
            .score-title{
                text-align:center;
                font-size:55px;
                margin:0;
            }
            .score{
                font-size:45px;
                test-align:center;
                margin:0;
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