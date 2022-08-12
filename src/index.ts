import { initRouter } from "./router";
import {initTextComp} from "./components/text"
import {initButtonComp} from "./components/boton"
import {initPlayOp} from "./components/play-options"
import {initCountdown} from "./components/countdown"

(function(){
    initTextComp();
    initButtonComp();
    initPlayOp();
    initCountdown();

    
        const root = document.querySelector(".root");
        initRouter(root as Element)
})()