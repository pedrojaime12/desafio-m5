export function initButtonComp (){

    customElements.define("my-button" , class extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var shadow = this.attachShadow({ mode : "open"})
            
            const div = document.createElement("div")
            const style = document.createElement("style")
            const content = this.textContent 

            div.innerHTML = `
            <button class="button"> ${content} </button>
            `;
            
            style.innerHTML = `
            .button{
                font-family:'Tiro Gurmukhi';
                background-color: #006CFC;
                padding:5px;
                Width: 320px;
                Height: 55px;
                border: solid 3px #001997;
                border-radius:10px;
                font-size:30px;
                color:white;
                opacity:90%;
            }
            .button:hover{
                opacity:100%;
            }
            
            `;
            
            shadow.appendChild(div)
            shadow.appendChild(style)
            
        }
    })
}