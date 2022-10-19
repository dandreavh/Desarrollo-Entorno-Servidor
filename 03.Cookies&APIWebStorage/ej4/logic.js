/*
Valida el formulario con los siguientes campos y en caso de que sean correctos los datos
introducidos se almacenen en un objeto y en caso contrario muestre un mensaje de error.
 - DNI (99.999.999-X)
 - Nombre (Mínimo 1 nombre y 1 apellido, Máximo 2 nombre y 2 apellidos)
 - Fecha de Nacimiento (dd/mm/yyyy)
 - Email (xxxxxx@yyyyy.zzz)
 - WEB (http://www.xxxx.yyy)
 - Contraseña (Entre 8 y 10 carácteres)
Ningún campo podrá dejarse en blanco.
NOTA: puedes utilizar tanto validaciones HTML como lo aprendido en Javascript.
En caso de que se informe correctamente guardar la información en un objeto y obtener el
JSON correspondiente, en caso contrario mostrar un mensaje de error.
*/

/**
 * Ejercicio Form3 en el almacenamiento de sesión del navegador.
 * Añadir un botón “Recargar” que recargue los campos del formulario con la información almacenada. 
 * NOTA: Prueba posteriormente la persistencia de los datos en cada caso.
 */

const $FORM = document.getElementById("Ej3");
const $DNI = document.getElementById("dni");
const $NAME = document.getElementById("name");
const $BIRTH = document.getElementById("birth");
const $EMAIL = document.getElementById("email");
const $WEB = document.getElementById("web");
const $PASSWORD = document.getElementById("password");

function reload(){
  let reg = JSON.parse(sessionStorage.getItem("usuario"));

  document.getElementById("dni").value = reg.dni;
  document.getElementById("name").value = reg.name;
  document.getElementById("birth").value = reg.birth.reverse();
  document.getElementById("email").value = reg.email;
  document.getElementById("web").value = reg.web;
  document.getElementById("password").value = reg.password;
}

function handleSubmit(e) {
  e.preventDefault();
  const dni = $DNI.value;
  const name = $NAME.value;
  const birth = $BIRTH.value;
  const email = $EMAIL.value;
  const web = $WEB.value;
  const password = $PASSWORD.value;

  if (dni == false || isValidDni(dni) == false) {
    alert(
      "El dni debe ser un valor válido : \n -Debe estar relleno \n -Debe seguir este modelo: 00.000.000-A \n -La letra debe corresponder"
    );
  } else {
    if (name == false || isValidText(name) == false) {
      alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras"
      );
    } else {
      if (birth == false || isValidBirth(birth) == false) {
        alert(
          "La fecha de nacimiento debe ser un valor válido : \n -Debe estar relleno \n -Debe seguir este formato: dd/mm/aaaa"
        );
      } else {
        if (email == false || isValidEmail(email) == false) {
          alert(
            "El email debe ser un valor válido : \n -Debe estar relleno \n -Debe seguir este formato: xxxxxx@yyyyy.zzz)"
          );
        } else {
          if (web == false || isValidWeb(web) == false) {
            alert(
              "La web personal debe ser un valor válido : \n -Debe estar relleno \n -Debe tener este formato: http://www.xxxx.yyy"
            );
          } else {
            if (password == false || isValidPassword(password) == false) {
              alert(
                "La contraseña debe ser un valor válido : \n -Debe estar relleno \n -Debe tener entre 8 y 10 caracteres"
              );
            } else{
              alert("Datos presentados con éxito");
              let regUser = {
                dni: dni,
                name: name,
                birth: birth.split('-').reverse().join('/'),
                email: email,
                web: web,
                password: password
              };
              console.log(regUser);
              let newUser = JSON.stringify(regUser);
              console.log(newUser);
              document.getElementById("newUser").innerHTML = newUser;
              sessionStorage.setItem("usuario",newUser);
            }
          }
        }
      }
    }
  }
}
function isValidDni(dni) {
  const validacion = /^\d{2}\.\d{3}\.\d{3}-[A-Z]$/;
  const letters = "TRWAGMYFPDXBNJZSQVHLCKET";
  let letter = -1, userLetter, position, numbers;
  if (validacion.test(dni)) {
    numbers = (dni.substring(0, dni.length - 2)).replaceAll(".", "");
    userLetter = (dni[dni.length - 1]).toUpperCase();
    position = parseInt(numbers) % 23;
    letter = letters.substring(position, position + 1);
  }
  return (letter === userLetter)
}
function isValidText(text) {
  const validacion =
    /^(([A-Za-záéíóúÁÉÍÓÚ]{2,})|([A-Za-záéíóúÁÉÍÓÚ]{2,}\s[A-Za-záéíóúÁÉÍÓÚ]{2,}))$/;
  return validacion.test(text);
}
function isValidBirth(birth) {
  let currDate = new Date();
  const newOrder = birth.split('-').reverse().join('/');
  const validacion = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
  if(newOrder<currDate.toLocaleDateString()){
    return validacion.test(newOrder);
  } else{return false}
}
function isValidEmail(email) {
  const validacion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{2,}@[a-zA-Z0-9-]{2,}(?:\.[a-zA-Z0-9-]+)*$/;
  return validacion.test(email);
}
function isValidWeb(web) {
  const validacion = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  return validacion.test(web);
}
function isValidPassword(password) {
  const validacion = /^\S{8,10}$/;
  return validacion.test(password);
}
$FORM.addEventListener("submit", handleSubmit);