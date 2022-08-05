import {state} from "../../state"


export function initPlay(params){
    document.createElement("h1").textContent = "HOLA soy Play";

(function Play(){
    const juego =  state.whoWins("piedra","papel");
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
}