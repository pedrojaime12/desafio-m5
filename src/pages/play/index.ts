const imageURL = require("url:../../images/fondo.png");
import {state} from "../../state"


export function initPlay(params){
    const div = document.createElement("div")
    const style = document.createElement("style");
    style.innerHTML = `
    .root{
        display:flex;
        justify-content:center; 
        margin:0;
        padding:5px;
        
       }
       .imagen{
        position:relative;
        width:400px;
        height: 100vh;
        top:-20px;
        left:-5px
       }
       .countdown-container{
        position:absolute;
        top: 30%;
       }
       .options-container{
        position:absolute;
        bottom: -15px;
       }
    `
  
    div.innerHTML = `     
    <img class="imagen" src=${imageURL}>
     <div class="countdown-container">
        <count-down></count-down>
     </div>
     <div class="options-container">
     <play-options variant="play" ></play-options>
     </div>

    `
    div.className = "root"
    div.appendChild(style)
 
    return div;
    
}

(function whoWins(){
    const juego =  state.whoWins("papel","papel");
    if(juego==1){
        console.log("Ganaste!");
    }
    if(juego==2){
        console.log("Perdiste");
    }
    if(juego==3){
        console.log("empataste");
    }
    
})();
