'use strict'

alert('Hola usuario!');

let op;
let repetir = false;

do {
    let operando1 = '';
    let operando2 = '';
    let salir = operacionYvalidar();
    let introducirOpera = function(){
      while (!salir) {
        let operandos = prompt('Introduce los operandos separados por espacio', '');
          let i = 0;
          for (; i < operandos.length; i++) {
            if (operandos[i] !== ' ') {
              operando1 += operandos[i];
            } else {
              if (operando1 !== '') {
                break;
              }
            }
          }
    
          console.log(operando1);
    
          for (; i < operandos.length; i++) {
            if (operandos[i] !== ' ') {
              operando2 += operandos[i];
            } else {
              if (operando2 !== '') {
                break;
              }
            }
          }
          console.log(operando2);
    
          operando1 = Number(operando1);
          operando2 = Number(operando2);
          if (isNaN(operando1) || isNaN(operando2)) {
            alert('Tienes que introducir números')
            salir = false;
          } else {
            salir = true;
          }
        }   
      }
    introducirOpera();
    let resultado;

    function comprobar(suma, resta, multi, division) {
      if (op == '+') suma();
      else if(op == '-') resta();
      else if(op == '*') multi();
      else division();
    }
    
    comprobar(
      () => resultado = operando1 + operando2,
      () => resultado = operando1 - operando2,
      () => resultado = operando1 * operando2,
      () => resultado = operando1 / operando2
    );

    alert(`El resultado es: ${resultado}`)
    repetir = confirm('Quieres realizar otra operación?');

  
} while ((op !== '+' && op !== '-' && op !== '*' && op !== '/') || repetir)


function operacionYvalidar(){
  op = prompt('Elije operación: +, -, * ó /', '');
  op = op.trim();

  if (op === '+' || op === '-' || op === '*' || op === '/') {
    return false;
  } else {
    alert('La operación introducida es errónea. Prueba de nuevo.')
  }
}



console.log(op);