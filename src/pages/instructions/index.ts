const imageURL = require("url:../../images/fondo.png");

export function initInstructions(params){
   const div = document.createElement("div")
   const style = document.createElement("style")
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
   @media (min-width : 800px){
      .imagen{
          width: 100vw;
      }
    }
   .text-container{
    position:absolute;
    margin: 100px 30px;
   }
   .boton-container{
    position:absolute;
    bottom:210px;

   }
   .options-container{
    display:flex;
    position:absolute;
    bottom: -25px;
 };
 

   `   
   div.innerHTML = `     
   <img class="imagen" src=${imageURL}>
    <div class="text-container">
    <my-text variant="body">
    Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos. </my-text>
    </div>
    <div class="boton-container">
      <my-button class="boton-comp"> Jugar ! </my-button>
    </div>
    <div class="options-container">
     <play-options variant="piedra"></play-options>
     <play-options variant="papel"></play-options>
     <play-options variant="tijera"></play-options>
  </div>
   `
   div.className = "root"
   div.appendChild(style)

   const btn = div.querySelector(".boton-comp")
  
   btn?.addEventListener("click", ()=>{
    params.goTo("/desafio-m5/play")
     
   })
   return div

};
