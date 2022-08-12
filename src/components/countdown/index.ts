export function initCountdown (){

    customElements.define("count-down" , class extends HTMLElement{
        constructor(){
            super()
            this.render();
        }
        render(){
            
            var shadow = this.attachShadow({ mode : "open"})
            
            const div = document.createElement("div")
            const style = document.createElement("style")
            
            let counter = 4;    
                const intervalId = setInterval(()=>{
                    counter --;            
                    if(counter == 0){
                        clearInterval(intervalId)
                    }
                    div.innerHTML = `
                    <h2 class="number"> ${counter}</h2>
                    `;
                }, 1000)
            
            
            style.innerHTML = `
            .number{
                font-family:"Tiro Gurmukhi";
                font-size:200px;
                margin:0;
            }
            `;

            shadow.appendChild(div)
            shadow.appendChild(style)
            
        }
    })
} 