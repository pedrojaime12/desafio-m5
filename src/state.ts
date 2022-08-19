type Jugada = "piedra" | "papel" | "tijera"
type Game = {
    userPLay : string,
    computerPlay : string,
}
const state = {
    data : {
        currentGame : {
            userPlay: "",
            computerPlay : "" ,
        },
        history : [],
        listeners:[],
    },
 
    getState(){
        return this.data;
    },

    setState(newState){
        this.data = newState;
    },

    whoWins(userPlay:Jugada , computerPlay:Jugada){
        switch(userPlay + computerPlay){
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

    currentState({userPLay, computerplay}){
        const lastState = this.getState();
        
        this.setState({
            ...lastState,
            userPLay,
            computerplay
        })

    },
    pushToHistory(){
        const lastState = this.getState();
        const history = localStorage.getItem("save-history");
       
        if (history === null){
            localStorage.setItem("save-history",JSON.stringify({userPlay:0,computerPlay:0}))
        }else{
            this.setState({
                ...lastState,
                history:JSON.parse(history)
            })
        }
    },
}

export {state};
