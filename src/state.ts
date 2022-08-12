type Jugada = "piedra" | "papel" | "tijera"
type Game = {
    userPLay : Jugada,
    computerPlay : Jugada,
}
const state = {
    data : {
        currentGame : {
            userPlay: "",
            computerPlay : "" ,
        },
        history : []
    },
 
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState     
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
                return 2; // Pierde el usuario
            case "piedrapiedra":
            case "papelpapel":
            case "tijeratijera":
                return 3; // Empate
        }
    },
    pushToHistory(play:Game){
        const cs = this.getState();
        cs.history(play)
    }
}

export {state};
