const imageURL = require("url:../../images/fondo.png");
import {state, state} from "../../state"

export function initPlay(params){

    const div = document.createElement("div")
    div.innerHTML = `     
    <img class="imagen" src=${imageURL}>
     <div class="countdown-container" >
        <count-down class="countdown"></count-down>
     </div>
       <div class="options-play">
     <play-options class="piedra" type="play" variant="piedra"> </play-options>
     <play-options class="papel" type="play" variant="papel"> </play-options>
     <play-options class="tijera" type="play" variant="tijera"> </play-options>
       </div>
    `
   // const cd = div.querySelector(".countdown")
    // const divNumber = cd?.shadowRoot?.querySelector(".container-number")
    
   /*  
    if(div.querySelector(".countdown")?.textContent == ""){console.log("");
    } */

const style = document.createElement("style");
style.innerHTML = `
body{
    margin:0
}
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
   .options-play{
    position:absolute;
    display:flex;
    bottom: -15px;
    opacity:85%;
    cursor:pointer;
   }
   .options-play :hover{
    background:lightBlue;
   }
   `
   div.appendChild(style);
 
    div.className = "root"
  
    const piedra = div.querySelector(".piedra")
    piedra?.addEventListener("click", ()=>{
        initGame("piedra")
        
    })
    
    const papel = div.querySelector(".papel")
    papel?.addEventListener("click", ()=>{
        initGame("papel")
        
    })
    
    const tijera = div.querySelector(".tijera")
    tijera?.addEventListener("click", ()=>{
        initGame("tijera")
         
    })

    function movPC (){
        const opciones = ["piedra","papel","tijera"]
        const random = Math.floor(Math.random()*3);
        const mov = opciones[random];
        return (mov)
    }
    
    function initGame(movUser:string){
        const computerPlay = movPC() 
        const userPlay = movUser;


        

        showGame(userPlay,computerPlay)

        function showGame(user,pc){
            console.log(user,pc);
            return   div.innerHTML = `
            <div style= "display: flex;
            align-items: center;
            justify-content: center;">
              <img class="imagen" src=${imageURL}>
              <div style= "
                 position: absolute;
                 display: flex;
                 flex-direction: column;
                 align-items: center;">

              <play-options style="transform: rotate(180deg)" type="play" variant="${pc}"> </play-options>
              <play-options type="play" variant="${user}"> </play-options>

              </div>
            </div>
            `
        }
       // clearInterval(intervalId)
        const comparacion = ResultGame(userPlay,computerPlay);
        let counter = 2;    
                setInterval(()=>{
                    counter --;            
                    if(counter == 0){
                        if(comparacion == 1){
                            return div.innerHTML = `
                            <div class="container-result">
                             <result-game class="result" variant="win"></result-game>
                             <div class="button-container" style="width:100%; height: 10vh; background-color:#d4d64a;text-align:center; display:flex; justify-content:center; align-items:center;"> 
                            <my-button class="boton" style="margin-bottom:10px;"> Volver a jugar </my-button>
                             </div> 
                            </div>
                            ` }
                            if(comparacion == 2){
                                return div.innerHTML = `
                            <div class="container-result">
                             <result-game variant="lose"></result-game>
                            <div class="button-container" style="width:100%; height: 10vh; background-color:#894949;text-align:center; display:flex; justify-content:center; align-items:center;"> 
                             <my-button class="boton" style="margin-bottom:10px;"> Volver a jugar </my-button>
                             </div> 
                            </div>
                            `
                            }
                            if(comparacion == 3){
                                return div.innerHTML = `
                                <div class="container-result">
                                <result-game variant="draw"></result-game>
                                <div class="button-container" style="width:100%; height: 10vh; background-color:lightBlue; text-align:center; display:flex; justify-content:center; align-items:center;"> 
                                <my-button class="boton" style="margin-bottom:10px;"> Volver a jugar </my-button>
                                 </div> 
                                </div>
                                `
                            } 
                        }   
                        div.querySelector(".button-container")?.addEventListener("click", ()=>{
                             document.location.reload()
                        })
                    }, 1000)

        div.appendChild(style)

    function ResultGame(userPlay,computerPlay){
        const juego =  state.whoWins(userPlay,computerPlay);
        if(juego==1){
            return 1
        }
        if(juego==2){    
            return 2
        }
        if(juego==3){
            return 3
    }
};
}

return div;
}
