/*
Una empresa de comidas tiene que controlar las bolsas de producto azul que cocinan para
distribuir en Alburquerque. Para ello tienen que crear un formulario que almacene la
información de cada bolsa y validarlo teniendo en cuenta lo siguiente:
• Fecha de creación: obligatorio y con formato dd/mm/aaaa. ---------------------------------- OK
• Cocinero: será un nombre en clave formado por dos letras en mayúscula, un símbolo
y cuatro dígitos (ej. WW$1234) -------------------------------------------------------------- OK
• Destinatario: estará formado por dos o tres letras mayúsculas correspondientes al
estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código
de distrito de 4 digitos (ej. NM_alburquerque:1234). ---------------------------------------- OK
• Gramos: será un número del 100 al 5000. --------------------------------------------------- OK
• Composición: estará formado por una cantidad en gramos seguida de dos conjuntos
de una o dos letras seguidas o no de un número. (ej. 200gC3OH7) ----------------------------- OK
• Número de cuenta bancaria. Supongamos que un número de cuenta
estadounidense tiene el siguiente formato: AB03-123456789012-34
o Dos letras: el valor de cada letra es del 1 al 26 (no hay ñ ni ll).
o Dos dígitos: debe corresponderse con la suma de la primera letra y la
segunda: en caso de que sea menor que 10 se pone el 0 delante.
o Un guión. 
o Doce dígitos de cuenta.
o Un guión.
o Dos dígitos de control: el primero deben ser la suma de los 6 primeros dígitos
de la cuenta dividido entre 6 y extrayendo solamente su parte entera; y el
último exactamente igual, pero con los 6 siguientes.
Si el número está correcto se colocará en un campo de texto al lado del anterior,
pero sin guiones: solamente los números y las letras.
Ningún campo podrá dejarse en blanco.
NOTA: puedes utilizar tanto validaciones HTML como lo aprendido en Javascript.
En caso de que se informe correctamente guardar la información en un objeto y obtener el
JSON correspondiente, en caso contrario mostrar un mensaje de error.
*/
const $FORM = document.getElementById("Ej4");
const $FECHA = document.getElementById("fecha");
const $COCINERO = document.getElementById("cocinero");
const $DESTINATARIO = document.getElementById("destinatario");
const $GRAMOS = document.getElementById("gramos");
const $COMPOSICION = document.getElementById("composicion");
const $IBAN = document.getElementById("iban");

function handleSubmit(e) {
  e.preventDefault();
  const fecha = $FECHA.value;
  const cocinero = $COCINERO.value;
  const destinatario = $DESTINATARIO.value;
  const gramos = $GRAMOS.value;
  const composicion = $COMPOSICION.value;
  const iban = $IBAN.value;

  if (fecha == false || isValidDate(fecha) == false) {
    alert(
      "La fecha debe ser un valor válido : \n -Debe estar relleno \n -Debe seguir este modelo: dd/mm/aaaa \n -Debe ser anterior a la fecha actual"
    );
  } else {
    if (cocinero == false || isValidCooker(cocinero) == false) {
      alert(
        "El código de cocinero debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por dos letras en mayúscula, un símbolo y cuatro dígitos (ej. WW$1234)"
      );
    } else {
      if (destinatario == false || isValidReceiver(destinatario) == false) {
        alert(
          "El código de destinatario debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por dos o tres letras mayúsculas correspondientes a estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 digitos (ej. NM_alburquerque:1234)"
        );
      } else {
        if (gramos == false || isValidGrams(gramos) == false) {
          alert(
            "El número de gramaje debe ser un valor válido : \n -Debe estar relleno \n -Debe estar dentro del rango 100 y 5000)"
          );
        } else {
          if (composicion == false || isValidComposition(composicion) == false) {
            alert(
              "La composición debe ser un valor válido : \n -Debe estar relleno \n -Debe estar formado por una cantidad en gramos seguida de dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)"
            );
          } else {
            if (iban == false || isValidIban(iban) == false) {
              alert(
                "El iban debe ser un valor válido : \n -Debe estar relleno \n -Debe tener este formato: (AA12-123456789000-12)"
              );
            } else{
              alert("Datos presentados con éxito");
              let regContent = {
                fecha: fecha,
                cocinero: cocinero,
                destinatario: destinatario,
                gramos: gramos,
                composicion: composicion,
                iban: iban
              };
              console.log(regContent);
              let newContent = JSON.stringify(regContent);
              console.log(newContent);
              document.getElementById("newContent").innerHTML = newContent;
            }
          }
        }
      }
    }
  }
}
function isValidDate(fecha) {
  // DE aaaa-mm-dd A dd/mm/aaaa
  let currDate = new Date();
  const newOrder = fecha.split('-').reverse().join('/');
  const validacion = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
  if(newOrder<currDate.toLocaleDateString()){
    return validacion.test(newOrder);
  } else{return false}
}
function isValidCooker(cocinero) {
  const validacion = /^[A-Z]{2}\W\d{4}$/;
  return validacion.test(cocinero);
}
function isValidReceiver(destinatario) {
  const validacion = /^([A-Z]{2}|[A-Z]{3})_[a-z]+:\d{4}$/;
  return validacion.test(destinatario);
}
function isValidGrams(gramos) {
  return (gramos>=100 && gramos<=5000);
}
function isValidComposition(composicion) {
  const validacion = /^\d+g([a-zA-Z]{1,2}(\d?))([a-zA-Z]{1,2}(\d?))$/;
  return validacion.test(composicion);
}
function isValidIban(iban) {
  // AB03-123456789012-34
  const validacion = /^[A-Z]{2}\d{2}-\d{12}-\d{2}$/;
  let fullIban;
  
  if(validacion.test(iban)){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let firstLetter = iban[0];
    let secondLetter = iban[1];
    let firstLetterValue = letters.indexOf(firstLetter)+1;
    let secondLetterValue = letters.indexOf(secondLetter)+1;
    let firstDigits = iban.substring(2,4);
    let sumaLettersValue = firstLetterValue+secondLetterValue;
    let firstControlDigit = parseInt(iban.substring(18,19));
    let secondControlDigit = parseInt(iban.substring(19,20));
    let firstPart = iban.substring(5,11);
    let secondPart = iban.substring(11,17);
    let sumaFirstPart = 0;
    let sumaSecondPart = 0;
    let firstControlDigitValue;
    let secondControlDigitValue;
    
    if((firstLetter==="L" && secondLetter==="L")||(firstLetter==="Ñ" || secondLetter==="Ñ")){
      return false;
    } else{
      if(sumaLettersValue===parseInt(firstDigits)){
        if((sumaLettersValue<10 && parseInt(firstDigits[0])===0) || (sumaLettersValue>=10)){
          for(let i = 0; i<firstPart.length; i++){
            sumaFirstPart += parseInt(firstPart[i]);
            sumaSecondPart += parseInt(secondPart[i]);
          }
          firstControlDigitValue = parseInt(sumaFirstPart/6);
          secondControlDigitValue = parseInt(sumaSecondPart/6);
          if(firstControlDigit === firstControlDigitValue && secondControlDigit === secondControlDigitValue){
            fullIban = iban.replaceAll("-", "");
            document.getElementById("ibanChecked").hidden = false;
            document.getElementById("ibanChecked").disabled = true;
            document.getElementById("ibanChecked").value = fullIban;
          } else{
            return false;
          }
        } else{
          return false
        }
      } else{
        return false;
      }
    }
  } else{
    return false;
  }
}
$FORM.addEventListener("submit", handleSubmit);