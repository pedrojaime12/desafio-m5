const imageURL = require("url:../../images/fondo.png");

export function initWelcome(params){
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
    top:-5px;
    right:-80px;
    left:-20px
   }

   @media (min-width : 800px){
    .imagen{
        width: 100vw;
    }
  }

   .title{
    margin-top: 100px;
    text-align: center;
    position:absolute;
   }
   .boton-container{
    position:absolute;
    bottom:210px;

   }
   .options-container{
      display:flex;
      position:absolute;
      bottom: -25px;
   }
   `   
   div.innerHTML = `     
   <img class="imagen" src=${imageURL}>
   <div class="title">
     <my-text variant="title">Piedra</my-text>
     <my-text variant="title">Papel ó</my-text>
     <my-text variant="title">Tijeras</my-text>
   </div>
     <div class="boton-container">
     <my-button class="boton-comp"> Empezar !! </my-button>
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
    params.goTo("/desafio-m5/instructions")
     
   })
   return div

};