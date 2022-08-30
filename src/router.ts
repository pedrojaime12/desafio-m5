import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import { initPlay } from "./pages/play";

const routes = [
    {
        path: /\/desafio-m5\/welcome/,
        component: initWelcome
    },
    {
        path: /\/desafio-m5/,
        component: initWelcome
    },
    {
        path: /\/desafio-m5\/instructions/,
        component:initInstructions
    },
    {
        path: /\/desafio-m5\/play/,
        component:initPlay
    }
] 
export function initRouter(container:Element){

    function goTo(path){

        history.pushState({}, "" , path)
        handleRoute(path);
    };

    function handleRoute(route){

        for (const r of routes) {
            
           if(r.path.test(route)){
            const el = r.component({goTo:goTo});
            if(container.firstChild){
                container.firstChild.remove();
            }
            container.appendChild(el)

            }
        }
    }

    if (location.pathname.includes("github.io")){
        goTo("/desafio-m5")
    } else {
        handleRoute(location.pathname)
    }
    
    if (location.host == "localhost:1234"){
        const path = location.pathname
        goTo("/desafio-m5" + path)
    } else {
        handleRoute(location.pathname)
    } 
    window.onpopstate = function(event){
        handleRoute(location.pathname)
    }
}