alert("!Bienvenid@ a la calculadora¡");
let salir;
do{
    let operacion = prompt("Que operación desea hacer?(+,-,*,/)");
    if(operacion != null || operacion != undefined){
        let operadores = Number(prompt("Introduzca los 2 operadores, separados por un espacio"));
        if(operadores != null || operadores != undefined){
            let resultado;
            switch(operacion){
                case "+":

                    break;
                case "-":
                    break;
                case "*":
                    break;
                case "/":
                    break;
            }
            alert(resultado);
        }
    } else{
        salir = prompt("¿Desea salir?");
    }
    
    
}while(salir !== "si" && salir !== "Si"
        || prompt("¿Desea realizar otra operación?") !== "si" && prompt("¿Desea realizar otra operación?") !== "Si");


        

