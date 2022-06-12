let d1 = document.getElementById('d1');
let op = document.getElementById('op');
let d2 = document.getElementById('d2');



let resultado = document.getElementById('resultado');




function handleOperator() {  
  let operator = op.value;

  if(operator == '-'){
   return menos();
  }else if(operator === '+'){
    return mais();
  }else if(operator === '*'){
    return vezes();
  }else if(operator === '/'){
    return divide();
  }
  return console.log('Não implementado')
  
  
}

function mais(){
  let number1 = parseInt(d1.value);
  let number2 = parseInt(d2.value);
  result = number1 + number2;
  console.log(result)
  return resultado.innerHTML = `<p>${result}</p>`
}

function menos() {
  let number1 = parseInt(d1.value);
  let number2 = parseInt(d2.value);
  result = number1 - number2;
  return resultado.innerHTML = `<p>${result}</p>`
}

function vezes() {
  let number1 = parseInt(d1.value);
  let number2 = parseInt(d2.value);
  result = number1 * number2;
  return resultado.innerHTML = `<p>${result}</p>`
}

function divide() {
  let number1 = parseInt(d1.value);
  let number2 = parseInt(d2.value);
  result = number1 / number2;
  return resultado.innerHTML = `<p>${result}</p>`
}

function calcular() {
  console.log('calculando');
  return handleOperator();
  

}
