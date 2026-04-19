console.log(getComputerChoice()); 

function getComputerChoice(){
    let numAleatorio = Math.random();

    if(numAleatorio < 0.33){
        return "Piedra";
    }else if (numAleatorio < 0.66){
        return "Papel";
    }
    return "Tijera";
}

