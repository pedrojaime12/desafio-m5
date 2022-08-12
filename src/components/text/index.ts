export function initTextComp (){
    class MyText extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const variant = this.getAttribute("variant") || "body"
            
            var shadow = this.attachShadow({ mode : "open"})
            
            const div = document.createElement("div")
            var style = document.createElement("style")
            
            style.innerHTML = `
            .title{
                font-family : 'Tiro Gurmukhi';
                font-size: 90px;
                font-weight: bold;
                color: #009048;
                margin: 0 auto;
            }
            .body{
                font-family : 'Tiro Gurmukhi';
                font-size: 45px;
                text-align: center;
                color:black;
                font-weight: bold;
            }
            `;

            div.className = variant;
            div.textContent = this.textContent;

            shadow.appendChild(div)
            shadow.appendChild(style)

        }
    }
    customElements.define("my-text" , MyText)
}