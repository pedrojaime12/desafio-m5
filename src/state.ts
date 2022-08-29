

type Game = {
    userPlay : string,
    computerPlay : string,
}
const state = {
    data : {
        currentGame : [] : Array,
        history : [] : Array ,
    },   
        listeners:[],
 
    getState(){
        return this.data;
    },

    setState(newState){
        this.data = newState;
        for (const cb of this.listeners) {
            cb()
        }
        localStorage.setItem("save-history",JSON.stringify(this.getState().history))
    },
    
    subscribe(callback: (any) => any) {
       // recibe callbacks para ser avisados posteriormente
       this.listeners.push(callback)
       
    },
    whoWins(game : Game){
        switch(game.userPlay + game.computerPlay){
            case "piedratijera":
            case "papelpiedra":
            case "tijerapapel":
                return 1; // Gana el usuario
            case "piedrapapel":
            case "papeltijera":
            case "tijerapiedra":
                return 2; // Gana la pc
            case "piedrapiedra":
            case "papelpapel":
            case "tijeratijera":
                return 3; // Empate
        }
    },
    currentGameWin (wins){
        const lastState = this.getState();
        console.log(this.data.history);
        
        console.log(this.data.history);
        


        this.setState({
            ...lastState,
            currentGame : {wins}
        })
        
    },
    
    loadLocalHistory(){
        const lastState = this.getState();
        const history = localStorage.getItem("save-history");
       
        if (history === null){
            localStorage.setItem("save-history",JSON.stringify({userPlay:0,computerPlay:0}))
            console.log(history,"null");
            
        }else{
            this.setState({
                ...lastState,
                history:JSON.parse(history)
                
            })
        }
    },
}
export {state};