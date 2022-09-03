const imageURL = require("url:../../images/fondo.png");
import {state} from "../../state"

export function initPlay(params){
    state.loadLocalHistory()
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
    div.querySelector(".countdown-container")?.addEventListener("click", ()=>{
        params.goTo("/desafio-m5/play")})

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
   @media (min-width : 800px){
    .imagen{
        width: 100vw;
    }
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
        
        const comparacion = ResultGame(userPlay,computerPlay);

        (function count() {
            const lastState = state.getState();
      
            const score = lastState.history;
            
            if (comparacion == 1) {
                score.userWin++;
            } else if (comparacion == 2) {
                score.computerWin++;
            }
            state.saveHistory(score);
          })();
         
        const userCount = state.getState().history
       var pcCount = state.getState().history;

        let counter = 2;    
                setInterval(()=>{
                    counter --;            
                    if(counter == 0){
                        if(comparacion == 1){
                            return div.innerHTML = `
                            <div class="container-result" style=" 
                            background-color:#d4d64a;   
                            height:100vh;
                            min-width:300px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;">
                            <result-game class="result" variant="win"></result-game>
                            <div class="score-container" style="
                            width:260px;
                            height:217px;
                            background-color:white;
                            border: black solid 10px;">
                              <h4 class="score-title" style="
                              text-align:center;
                              font-size:55px;
                              margin:0;" > Score </h4>
                              <div>
                              <h5 class="score-user" style="font-size:45px;
                              test-align:center;
                              margin:0;"> Vos : ${userCount}</h5>
                                <h5 class="score-pc" style="font-size:45px;
                                test-align:center;
                                margin:0;"> Máquina : ${pcCount} </h5>
                                </div>
                                </div>
                                <div class="button-container" style="width:100%; height: 10vh; background-color:#d4d64a;text-align:center; display:flex; justify-content:center; align-items:center;"> 
                                <my-button class="boton" style="margin-bottom:10px;"> Volver a jugar </my-button>
                                </div> 
                                </div>
                                ` }
                                if(comparacion == 2){
                                    return div.innerHTML = `
                                    <div class="container-result" style="
                                        height:100vh;
                                        background-color:#894949;   
                                        min-width:300px;
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: center;
                                        align-items: center;">
                                    <result-game variant="lose"></result-game>
                                    <div class="score-container" style="
                                        margin: 0 auto;
                                        width:260px;
                                        height:217px;
                                        background-color:white;
                                        border: black solid 10px;">
                                    <h4 class="score-title" style="
                                        text-align:center;
                                        font-size:55px;
                                        margin:0;" > Score 
                                    </h4>
                                    <div>
                                    <h5 class="score-user" style="font-size:45px;
                                        test-align:center;
                                        margin:0;"> Vos : ${userCount}
                                    </h5>
                                    <h5 class="score-pc" 
                                        style="font-size:45px;
                                        test-align:center;
                                        margin:0;"> Máquina : ${pcCount} 
                                    </h5>
                                    </div>
                                    </div>
                                    <div class="button-container" style="width:100%; height: 10vh; background-color:#894949;text-align:center; display:flex; justify-content:center; align-items:center;"> 
                                    <my-button class="boton" style="margin-bottom:10px;"> Volver a jugar </my-button>
                                </div> 
                              </div>
                            `
                        }
                        if(comparacion == 3){
                            return div.innerHTML = `
                            <div class="container-result" style=" 
                            height:100vh;
                            background-color:lightBlue;   
                            min-width:300px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;">
                                <result-game variant="draw"></result-game>
                                <div class="score-container" style="
                                width:260px;
                                height:217px;
                                background-color:white;
                                border: black solid 10px;">
                                 <h4 class="score-title" style="
                                 text-align:center;
                                 font-size:55px;
                                 margin:0;" > Score </h4>
                                 <div>
                                   <h5 class="score-user" style="font-size:45px;
                                   test-align:center;
                                   margin:0;"> Vos : ${userCount}</h5>
                                   <h5 class="score-pc" style="font-size:45px;
                                   test-align:center;
                                   margin:0;"> Máquina : ${pcCount} </h5>
                                 </div>
                                </div>
                                <div class="button-container" style="width:100%; height: 10vh; background-color:lightBlue; text-align:center; display:flex; justify-content:center; align-items:center;"> 
                                <my-button class="boton" style="margin-bottom:10px;"> Volver a jugar </my-button>
                                 </div> 
                                </div>
                                `
                            } 
                        }   
                        div.querySelector(".button-container")?.addEventListener("click", ()=>{
                             params.goTo("/desafio-m5/play")
                        })
                    }, 1000)

        div.appendChild(style)

    function ResultGame(userPlay,computerPlay){
        const juego =  state.whoWins({userPlay,computerPlay});
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
   
