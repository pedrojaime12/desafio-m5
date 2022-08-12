import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import { initPlay } from "./pages/play";

const routes = [
    {
        path: /\/welcome/,
        component: initWelcome
    },
    {
        path: /\/instructions/,
        component:initInstructions
    },
    {
        path: /\/play/,
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
            
           if(r.path.test(route))
           {
               const el = r.component({goTo:goTo})                
                  if (container.firstChild){
                  container.firstChild.remove();
                  }
               container.appendChild(el)
            }
        }
    }

    if (location.pathname == "/"){
        goTo("/welcome")
    } else {
        handleRoute(location.pathname)
    }
}