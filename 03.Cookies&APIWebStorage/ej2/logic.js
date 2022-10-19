/*
Valida el contenido introducido en todos campos según las siguientes especificaciones:
 - DNI (99.999.999-X)
 - Nombre (Mínimo 1 nombre, Máximo 2 nombres) 
 - Apellidos (Mínimo 1 apellido, Máximo 2 apellidos) 
 - Teléfono (+34 954556817) 
 - Comentario (texto obligatorio de tamaño máximo 250 caracteres) 
 - Hora (hh:mm) 
Validar también que no puedan dejarse en blanco. 
NOTA: puedes utilizar tanto validaciones HTML como lo aprendido en Javascript.
En caso de que se informe correctamente guardar la información en un objeto y obtener el
JSON correspondiente, en caso contrario mostrar un mensaje de error.
*/
const $FORM = document.getElementById("Ej1");
const $DNI = document.getElementById("dni");
const $NAME = document.getElementById("nombre");
const $SURNAME = document.getElementById("apellidos");
const $PHONE = document.getElementById("telefono");
const $COMMENT = document.getElementById("comentario");
const $HOUR = document.getElementById("hora");

function handleSubmit(e) {
  e.preventDefault();
  const dni = $DNI.value;
  const name = $NAME.value;
  const surname = $SURNAME.value;
  const phone = $PHONE.value;
  const comment = $COMMENT.value;
  const hour = $HOUR.value;

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
      if (surname == false || isValidText(surname) == false) {
        alert(
          "El o los apellidos debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras"
        );
      } else {
        if (phone == false || isValidPhone(phone) == false) {
          alert(
            "El teléfono debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un prefijo (+00) y 9 números"
          );
        } else {
          if (comment == false || isValidComent(comment) == false) {
            alert(
              "El comentario debe ser un valor válido : \n -Debe estar relleno \n -Debe tener un máximo de 250 caracteres"
            );
          } else {
            if (hour == false || isValidHour(hour) == false) {
              alert("La hora debe ser un valor válido :  \n -Debe estar relleno \n -Debe corresponder al formato 24h");
            } else {
              alert("Datos presentados con éxito");
              let regUser = {
                dni: dni,
                name: name,
                surname: surname,
                phone: phone,
                comment: comment,
                hout: hour
              };
              console.log(regUser);
              let newUser = JSON.stringify(regUser);
              console.log(newUser);
              document.getElementById("newUser").innerHTML = newUser;
            }
          }
        }
      }
    }
  }
  checkCookie();
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

function isValidPhone(phone) {
  const validacion = /^(\+\d{2}\s\d{9})$/;
  return validacion.test(phone);
}

function isValidComent(comment) {
  const validacion = /^[\s\S]{1,250}$/;
  return validacion.test(comment);
}

function isValidHour(hour) {
  const validacion = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return validacion.test(hour);
}
$FORM.addEventListener("submit", handleSubmit);