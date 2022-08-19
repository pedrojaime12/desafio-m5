import { initRouter } from "./router";
import {initTextComp} from "./components/text"
import {initButtonComp} from "./components/boton"
import {initPlayOp} from "./components/play-options"
import {initCountdown} from "./components/countdown"
import {initResultComp} from "./components/result"

(function(){
    initTextComp();
    initButtonComp();
    initPlayOp();
    initCountdown();
    initResultComp();

    
        const root = document.querySelector(".root");
        initRouter(root as Element)
})()